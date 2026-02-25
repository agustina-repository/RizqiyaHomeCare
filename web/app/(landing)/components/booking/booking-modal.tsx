"use client";

import { useState, useEffect } from "react";

type BookingModalProps = {
  tidyCalLink: string;
  productTitle: string;
  variantTitle: string;
};

export default function BookingModal({ 
  tidyCalLink, 
  productTitle, 
  variantTitle 
}: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setShowTerms(false);
      setHasAgreed(false);
    }
  }, [isOpen]);

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const waMessage = encodeURIComponent(
    `Halo Rizqiya Homecare, saya ingin konfirmasi booking untuk paket ${productTitle} (${variantTitle}). Saya sudah memilih jadwal di website.`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white text-center py-2.5 px-8 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
      >
        Pilih Jadwal & Paket
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl h-[95vh] lg:h-[90vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl">
            
            <div className="p-5 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h3 className="font-bold text-xl text-gray-900 text-left">Reservasi Kunjungan</h3>
                <p className="text-xs text-gray-500 mt-0.5 text-left">{productTitle} - {variantTitle}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <span className="text-2xl font-light">&times;</span>
              </button>
            </div>

            <div className="flex-1 bg-gray-50 relative overflow-hidden">
              {showTerms ? (
                <div className="absolute inset-0 z-20 bg-white p-6 overflow-y-auto animate-in slide-in-from-bottom duration-300">
                  <h4 className="font-bold text-lg mb-4 text-orange-600 border-b pb-2 text-left">Syarat & Ketentuan Layanan</h4>
                  <div className="text-sm text-gray-700 space-y-3 leading-relaxed text-left">
                    <p><strong>1. Biaya Transport:</strong> 8-12Km (30rb), 12-16Km (40rb), 16-20Km (50rb) dari titik Pijat Laktasi & Bayi.</p>
                    <p><strong>2. Waktu Perjanjian:</strong> H-1 atau paling lambat H-8 jam sebelum waktu terpilih.</p>
                    <p><strong>3. Pembayaran:</strong> Tidak menerima cash/DP. Transfer <strong>HANYA ke Mandiri a/n RIZQIYA MAULIDA</strong>.</p>
                    <p><strong>4. Fasilitas:</strong> Baby swim menggunakan air normal (bukan hangat). Kulit sensitif harap sedia lotion mandiri.</p>
                    <p><strong>5. Pembatalan:</strong> Maksimal H-4 jam. Jika batal saat perawatan sedang berjalan, pembayaran tetap <strong>FULL</strong>.</p>
                    <p className="bg-blue-50 p-3 rounded-lg italic text-xs text-blue-700 font-medium">
                      Kami menyediakan klinik gratis bagi kaum duafa dan yatim piatu (Hubungi kami via WA).
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-orange-50 rounded-2xl border-2 border-dashed border-orange-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={hasAgreed}
                        onChange={(e) => setHasAgreed(e.target.checked)}
                        className="mt-1 w-5 h-5 accent-orange-600 shrink-0"
                      />
                      <span className="text-sm font-bold text-gray-800 text-left">
                        Saya memahami biaya transport, metode pembayaran Mandiri, dan menyetujui S&K yang berlaku.
                      </span>
                    </label>
                  </div>
                </div>
              ) : (
                <iframe
                  src={tidyCalLink}
                  className="w-full h-full border-0"
                  title="TidyCal Booking"
                />
              )}
            </div>

            <div className="p-6 bg-white border-t">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                    <p className="text-sm font-bold text-orange-600 uppercase tracking-wider">Langkah Terakhir:</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    {showTerms 
                      ? "Centang persetujuan di atas untuk mengaktifkan tombol WhatsApp."
                      : "Selesaikan jadwal, lalu klik tombol untuk baca S&K & Konfirmasi."}
                  </p>
                </div>

                {showTerms ? (
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setShowTerms(false)}
                      className="text-sm font-bold text-gray-400 hover:text-gray-600 underline"
                    >
                      Batal
                    </button>
                    <a 
                      href={hasAgreed ? waLink : "#"}
                      onClick={(e) => !hasAgreed && e.preventDefault()}
                      className={`flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-sm shadow-lg transition-all ${
                        hasAgreed 
                        ? "bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-105 active:scale-95" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      KONFIRMASI WHATSAPP
                    </a>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowTerms(true)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-extrabold text-sm shadow-lg transition-all active:scale-95"
                  >
                    LANJUT KE KONFIRMASI
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}