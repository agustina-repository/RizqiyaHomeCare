"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { urlFor } from "@/lib/sanity/client";
import { Lock, X, Loader2, Mail, CheckCircle } from "lucide-react";
import { zipSync } from "fflate";
import { db } from "@/lib/superbase/db";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * 1. DEFINISI TIPE DATA
 */
interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

declare global {
  interface Window {
    snap: {
      pay: (
        token: string,
        options: {
          onSuccess: (result: unknown) => void;
          onPending: (result: unknown) => void;
          onError: (result: unknown) => void;
          onClose: () => void;
        },
      ) => void;
    };
  }
}

interface ImageSliderProps {
  images: SanityImage[];
  title: string;
  contentId: string;
  isPremium: boolean;
  price: number;
  freeLimit: number;
}

type ModalStep = "email" | "checking" | "paying" | "success" | "error";

export default function ImageSlider({
  images,
  title,
  contentId,
  isPremium,
  price,
  freeLimit,
}: ImageSliderProps) {
  const [hasPaid, setHasPaid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<ModalStep>("email");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const safeLimit = Math.max(parseInt(String(freeLimit)) || 1, 1);
  const totalImages = images?.length || 0;
  const isLockedMode = isPremium && !hasPaid;
  const displayImages = isLockedMode ? images.slice(0, safeLimit) : images;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("transaction_status");
    const emailParam = params.get("email");
    if ((status === "settlement" || status === "capture") && emailParam) {
      checkUnlockStatus(emailParam);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const checkUnlockStatus = async (userEmail: string) => {
    try {
      const { data, error } = await db
        .from("products")
        .select("status")
        .eq("email", userEmail.toLowerCase())
        .eq("content_id", contentId)
        .eq("status", "paid")
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setHasPaid(true);
        setShowModal(false);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Gagal cek status Supabase:", err);
      return false;
    }
  };

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleUnlockClick = () => {
    setShowModal(true);
    setModalStep("email");
    setEmailError("");
    setErrorMessage("");
  };

  const handleEmailSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError("Masukkan email yang valid");
      return;
    }
    setEmailError("");
    setModalStep("checking");

    try {
      const { data: purchase, error: dbError } = await db
        .from("products")
        .select("status")
        .eq("email", email.toLowerCase())
        .eq("content_id", contentId)
        .eq("status", "paid")
        .maybeSingle();

      if (dbError) throw dbError;

      if (purchase) {
        setHasPaid(true);
        setModalStep("success");
        setTimeout(() => setShowModal(false), 1500);
        return;
      }

      setModalStep("paying");
      const checkoutRes = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contentId, contentTitle: title, price }),
      });
      const checkoutData = await checkoutRes.json();
      if (!checkoutData.token) throw new Error("Token tidak ada");

      window.snap.pay(checkoutData.token, {
        onSuccess: async () => {
          try {
            await db.from("products").insert([
              {
                email: email.toLowerCase(),
                content_id: contentId,
                content_title: title,
                amount: price,
                status: "paid",
              },
            ]);
            setHasPaid(true);
            setModalStep("success");
            setTimeout(() => setShowModal(false), 1500);
          } catch (err) {
            setModalStep("error");
            setErrorMessage("Gagal mencatat akses. Hubungi Admin.");
          }
        },
        onPending: () => {
          setModalStep("email");
          setErrorMessage("Pembayaran pending. Selesaikan pembayaran kamu ya!");
        },
        onError: () => {
          setModalStep("error");
          setErrorMessage("Pembayaran gagal. Silakan coba lagi.");
        },
        onClose: () => {
          setModalStep("email");
        },
      });
    } catch (err) {
      setModalStep("error");
      setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const handleDownloadAll = async (format: "jpg" | "zip") => {
    setIsDownloading(true);
    try {
      if (format === "jpg") {
        for (let i = 0; i < images.length; i++) {
          const url = urlFor(images[i]).url();
          const response = await fetch(url);
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = blobUrl;
          a.download = `${title}-slide-${i + 1}.jpg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
          await new Promise((r) => setTimeout(r, 300));
        }
      } else {
        const files: { [key: string]: Uint8Array } = {};
        for (let i = 0; i < images.length; i++) {
          const url = urlFor(images[i]).url();
          const response = await fetch(url);
          const arrayBuffer = await response.arrayBuffer();
          files[`${title}-slide-${i + 1}.jpg`] = new Uint8Array(arrayBuffer);
        }
        const zipped = zipSync(files);
        const blob = new Blob([zipped.buffer as ArrayBuffer], {
          type: "application/zip",
        });
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = `${title}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }
    } catch (err) {
      console.error("Download gagal:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        async
      />

      <div className="relative w-full rounded-2xl bg-white overflow-hidden shadow-sm border border-gray-100">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {displayImages.map((img: SanityImage, i: number) => (
            <SwiperSlide key={`slide-${i}`}>
              <div className="relative w-full h-[450px] md:h-[650px] bg-[#F8FAFC] flex justify-center items-center p-4">
                <img
                  src={urlFor(img).url()}
                  alt={`Slide ${i + 1}`}
                  className="max-w-full max-h-full object-contain select-none"
                />
              </div>
            </SwiperSlide>
          ))}

          {isLockedMode && totalImages > safeLimit && (
            <SwiperSlide key="slide-lock">
              <div className="w-full h-[450px] md:h-[650px] bg-slate-50 flex items-center justify-center p-6">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl text-center max-w-xs border border-orange-100">
                  <div className="w-14 h-14 bg-orange-100 text-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock size={28} />
                  </div>
                  <h3 className="text-[#0B1E3F] font-bold text-lg mb-2">
                    Materi Premium
                  </h3>
                  <p className="text-gray-500 text-xs mb-6">
                    Beli akses untuk melihat seluruh <b>{totalImages} materi</b>{" "}
                    secara lengkap.
                  </p>
                  <button
                    onClick={handleUnlockClick}
                    className="w-full bg-[#FF6B35] text-white font-bold py-4 rounded-full shadow-lg hover:bg-[#0B1E3F] transition-all"
                  >
                    Buka Semua Slide
                  </button>
                  <p className="text-[11px] text-gray-400 mt-4 font-mono font-bold uppercase tracking-wider">
                    Rp {price?.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        {!isLockedMode && (
          <div className="p-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={() => setShowDownloadModal(true)}
              className="flex items-center gap-2 bg-[#0B1E3F] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#FF6B35] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Materi
            </button>
          </div>
        )}

        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #ff6b35 !important;
            background: white;
            width: 44px !important;
            height: 44px !important;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px !important;
            font-weight: bold;
          }
          .swiper-pagination-bullet-active {
            background: #ff6b35 !important;
          }
        `}</style>
      </div>

      {/* MODAL DOWNLOAD */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-8 relative">
            <button
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-orange-100 text-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h3 className="text-[#0B1E3F] font-bold text-lg mb-1">
                Pilih Format Download
              </h3>
              <p className="text-gray-400 text-xs">
                Mau disimpan dalam format apa?
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleDownloadAll("jpg")}
                className="w-full flex items-center gap-4 border-2 border-gray-100 hover:border-[#FF6B35] rounded-2xl p-4 transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-blue-500 font-bold text-xs">
                  JPG
                </div>
                <div>
                  <p className="font-bold text-[#0B1E3F] text-sm">Gambar JPG</p>
                  <p className="text-gray-400 text-xs">Slide terpisah</p>
                </div>
              </button>
              <button
                onClick={() => handleDownloadAll("zip")}
                className="w-full flex items-center gap-4 border-2 border-gray-100 hover:border-[#FF6B35] rounded-2xl p-4 transition-all"
              >
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0 text-[#FF6B35] font-bold text-xs">
                  ZIP
                </div>
                <div>
                  <p className="font-bold text-[#0B1E3F] text-sm">File ZIP</p>
                  <p className="text-gray-400 text-xs">Semua dalam 1 file</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CHECKOUT (SESUAI GAMBAR) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm p-10 relative animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X size={24} />
            </button>

            {modalStep === "email" && (
              <div className="flex flex-col items-center">
                {/* Icon Wrapper */}
                <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 border border-orange-100">
                  <Mail size={28} strokeWidth={2.5} />
                </div>

                <h3 className="text-[#0B1E3F] font-extrabold text-xl mb-2 text-center">
                  Masukkan Email Kamu
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed text-center mb-8 px-2">
                  Kami akan cek apakah kamu sudah pernah membeli materi ini.
                </p>

                <div className="w-full space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className={`w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm text-[#0B1E3F] placeholder:text-gray-300 outline-none focus:border-orange-200 focus:ring-4 focus:ring-orange-50 transition-all text-center font-medium ${emailError ? "border-red-200" : ""}`}
                  />

                  {emailError && (
                    <p className="text-red-500 text-[11px] text-center font-bold">
                      {emailError}
                    </p>
                  )}
                  {errorMessage && (
                    <p className="text-red-500 text-[11px] text-center font-bold">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    onClick={handleEmailSubmit}
                    className="w-full bg-[#C05638] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#a84a2f] active:scale-95 transition-all text-sm uppercase tracking-wide"
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            )}

            {/* Loading / Success States */}
            {(modalStep === "checking" || modalStep === "paying") && (
              <div className="py-10 flex flex-col items-center">
                <Loader2
                  size={40}
                  className="animate-spin text-orange-500 mb-4"
                />
                <p className="font-bold text-[#0B1E3F]">Sedang diproses...</p>
              </div>
            )}

            {modalStep === "success" && (
              <div className="py-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-bold text-[#0B1E3F] text-lg">
                  Akses Terbuka!
                </h3>
                <p className="text-gray-400 text-xs mt-2">Selamat belajar!</p>
              </div>
            )}

            {modalStep === "error" && (
              <div className="py-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                  <X size={32} />
                </div>
                <p className="font-bold text-[#0B1E3F]">{errorMessage}</p>
                <button
                  onClick={() => setModalStep("email")}
                  className="mt-4 text-orange-500 text-sm font-bold underline"
                >
                  Coba Lagi
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
