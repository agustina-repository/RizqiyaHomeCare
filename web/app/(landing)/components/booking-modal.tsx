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

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const waMessage = encodeURIComponent(
    `Halo Rizqiya Homecare, saya ingin konfirmasi booking untuk paket ${productTitle} (${variantTitle}). Saya sudah memilih jadwal di website.`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <>
      {/* Tombol Pemicu Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white text-center py-2.5 px-8 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
      >
        Pilih Jadwal & Paket
      </button>

      {/* Overlay Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          
          <div className="bg-white w-full max-w-4xl h-[95vh] lg:h-[90vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl">
            
            {/* Header Modal */}
            <div className="p-5 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h3 className="font-bold text-xl text-gray-900">Reservasi Kunjungan</h3>
                <p className="text-xs text-gray-500 mt-0.5">{productTitle} - {variantTitle}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <span className="text-2xl font-light">&times;</span>
              </button>
            </div>

            {/* iFrame TidyCal */}
            <div className="flex-1 bg-gray-50 relative">
              <iframe
                src={tidyCalLink}
                className="w-full h-full border-0"
                title="TidyCal Booking"
              />
            </div>

            {/* Footer / Call to Action WhatsApp */}
            <div className="p-6 bg-white border-t">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                    <p className="text-sm font-bold text-orange-600 uppercase tracking-wider">Langkah Terakhir:</p>
                    </div>
                    <p className="text-xs text-gray-600">
                      Wajib klik tombol untuk mengirim rincian pesanan ke Admin. </p>
                      </div>

                      <a href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-extrabold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 animate-bounce-subtle"
                        > KONFIRMASI WHATSAPP</a>
                  </div>
                </div>
              </div>
            </div>
      )}
    </>
  );
}