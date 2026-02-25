"use client";

import { useState } from "react";

const certifications = [
  {
    id: 1,
    title: "Sertifikat Pijat Laktasi",
    issuer: "BNSP / Lembaga Kesehatan Resmi",
    image: "/images/certifications/sertifikat-laktasi-wm.png",
    isLegal: false,
  },
  {
    id: 2,
    title: "Spesialis Pijat Bayi",
    issuer: "Lembaga Pelatihan Profesional",
    image: "/images/certifications/sertifikat-bayi-wm.png",
    isLegal: false,
  },
  {
    id: 3,
    title: "Izin Usaha Resmi (NIB)",
    issuer: "Pemerintah Republik Indonesia (OSS)",
    image: "/images/certifications/sertifikat-nib-wm.png",
    isLegal: true,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="legal" className="py-20 bg-gray-50 scroll-mt-48">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Tenaga Profesional &{" "}
            <span className="text-orange-600">Bersertifikat</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Keamanan dan kenyamanan buah hati Mama adalah prioritas kami.
            Seluruh terapis
            <strong> Rizqiya Homecare</strong> telah tersertifikasi secara resmi
            untuk memberikan pelayanan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert.image)}
              className={`group p-6 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden bg-white shadow-sm hover:shadow-xl ${
                cert.isLegal
                  ? "hover:border-green-400"
                  : "hover:border-orange-200"
              }`}
            >
              <div
                className={`absolute -right-4 -top-4 w-24 h-24 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-50 ${
                  cert.isLegal ? "bg-green-100" : "bg-orange-50"
                }`}
              ></div>

              <div className="relative flex items-center justify-between">
                <div className="text-left">
                  {cert.isLegal ? (
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-2 py-1 rounded-md mb-2 inline-block border border-green-100">
                      Official Legal Document
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded-md mb-2 inline-block border border-orange-100">
                      Verified Document
                    </span>
                  )}

                  <h4 className="font-extrabold text-xl text-gray-800 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <div
                  className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform ${
                    cert.isLegal ? "bg-green-100" : "bg-orange-600"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      stroke={cert.isLegal ? "#16a34a" : "#ffffff"}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                <span>Klik untuk verifikasi</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center bg-white">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Verification System - Rizqiya Homecare
              </p>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-red-500 hover:text-white transition-all"
              >
                &times;
              </button>
            </div>

            <div
              className="relative select-none cursor-not-allowed bg-gray-100"
              onContextMenu={(e) => e.preventDefault()}
            >
              <div className="absolute inset-0 z-10 bg-transparent"></div>
              <img
                src={selectedCert}
                alt="Sertifikat Profesional"
                className="w-full h-auto max-h-[75vh] object-contain pointer-events-none"
                draggable="false"
              />
            </div>

            <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
              <p>
                © {new Date().getFullYear()} Rizqiya Homecare. Dokumen ini
                dilindungi sistem keamanan.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
