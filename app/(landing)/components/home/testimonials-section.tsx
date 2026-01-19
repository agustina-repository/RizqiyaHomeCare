"use client";

import Script from "next/script";
import { FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const TestimonialSection = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const instagramUser = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;
  return (
    <main className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* ================= SECTION TESTIMONI ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepercayaan anda adalah keutamaan kami. Berikut adalah ulasan ikhlas daripada para ibu bapa yang telah mempercayakan penjagaan anak mereka kepada Rizqiya Home Care.
          </p>
        </div>

        {/* Widget Elfsight */}
        <div className="w-full overflow-hidden mb-20">
          <div 
            className="elfsight-app-49c12fe0-3c4a-466f-8f47-4cad759f6ea7" 
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* ================= KUNJUNGI KLINIK KAMI ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t pt-20 border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4">
              <FiMapPin /> Lokasi Klinik
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Kunjungi Klinik Kami
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Kami sedia menerima kunjungan anda untuk konsultasi secara langsung. Temui pakar kami untuk mengetahui lebih lanjut tentang perkhidmatan urutan laktasi dan penjagaan bayi.
            </p>

            <div className="space-y-6">
              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-md rounded-xl text-primary shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alamat Lengkap</h4>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Jl. Raya Kby. Lama No.17, Grogol Utara, <br />
                    Kec. Kebayoran Lama, Jakarta, 12210
                  </p>
                </div>
              </div>

              {/* No Telefon */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-md rounded-xl text-primary shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Hubungi Kami</h4>
                  <p className="text-gray-600">{phoneNumber}</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-md rounded-xl text-rose-500 shrink-0">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Instagram</h4>
                  <a 
                    href={`https://www.instagram.com/${instagramUser}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-500 transition-colors"
                  >
                    @{instagramUser}
                  </a>
                </div>
              </div>

              {/* Butang Petunjuk Arah */}
              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps?q=-6.216397,106.784403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition shadow-lg shadow-rose-200 w-full md:w-auto justify-center"
                >
                  <FiNavigation /> Petunjuk Arah Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Peta Interaktif */}
          <div className="h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.386!2d106.782!3d-6.216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70066992c4b%3A0x4a7d1627c28376d4!2sJl.%20Raya%20Kby.%20Lama%20No.17%2C%20Grogol%20Utara%2C%20Kec.%20Kebayoran%20Lama%2C%20Jakarta%2C%2012210!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="afterInteractive" 
        />
      </div>
    </main>
  );
};

export default TestimonialSection;