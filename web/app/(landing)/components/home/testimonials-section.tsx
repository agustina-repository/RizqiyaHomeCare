"use client";

import { useState } from "react";
import Script from "next/script";
import { FiMapPin, FiNavigation, FiPhone, FiInfo } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

declare global {
  interface Window {
    ElfsightApps: any;
  }
}

const branches = [
  {
    id: "pusat",
    name: "Pusat - Kebayoran Lama",
    address: "Jl. Raya Kby. Lama No.17, Grogol Utara, Kec. Kebayoran Lama, Jakarta, 12210",
    hasMap: true,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.346923230054!2d106.7787961!3d-6.2178992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f76563992c73%3A0x4afd16a7308372d4!2sPijat%20laktasi%20dan%20Pijat%20bayi!5e0!3m2!1sen!2sid!4v1771571617213!5m2!1sen!2sid",
    directLink: "https://maps.app.goo.gl/KdSPB4RtWZMpaquD8",
  },
  {
    id: "cabang",
    name: "Cabang - Kemandoran",
    address: "Jl. Pulo Kenanga Raya No.15, RT.8/RW.16, Grogol Utara, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210",
    hasMap: false,
    patokan: "Taraso Laundry Cabang Kemandoran",
    directLink: "https://wa.me/628123456789?text=Halo, minta share loc cabang baru dong"
  }
];

const TestimonialSection = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const instagramUser = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;
  const tiktokUser = process.env.NEXT_PUBLIC_TIKTOK_ACCOUNT;
    const waMessage = encodeURIComponent(
    `Halo Rizqiya Homecare, saya ingin bertanya terkait perawatan .... `
  );
  const waLink = `https://wa.me/${phoneNumber}?text=${waMessage}`;

  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <main className="py-16 md:py-24 bg-gray-50">
      <div id="testimonial-section" className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepercayaan anda adalah keutamaan kami. Berikut adalah ulasan ikhlas daripada para ibu bapa yang telah mempercayakan penjagaan anak mereka kepada Rizqiya Home Care.
          </p>
        </div>

        <div className="w-full overflow-hidden mb-20">
          <div 
            className="elfsight-app-49c12fe0-3c4a-466f-8f47-4cad759f6ea7" 
            data-elfsight-app-lazy
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t pt-20 border-gray-200">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-2">
              <FiMapPin /> Lokasi Klinik
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Kunjungi Klinik Kami
            </h3>

            <div className="space-y-4">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border-2 flex gap-4 ${
                    activeBranch.id === branch.id 
                    ? "border-rose-500 bg-white shadow-lg scale-[1.02]" 
                    : "border-transparent bg-white hover:bg-gray-100 text-gray-500 shadow-sm"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${activeBranch.id === branch.id ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-400"}`}>
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeBranch.id === branch.id ? "text-gray-900" : "text-gray-600"}`}>
                      {branch.name}
                    </h4>
                    <p className="text-sm leading-relaxed mt-1">{branch.address}</p>
                    {!branch.hasMap && (
                      <span className="inline-block mt-2 text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                        📍 Cabang Baru
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-6 space-y-3 border-t border-gray-100">
              <div className="flex gap-2">
                <a href={waLink} target="_blank"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-100 transition-all hover:-translate-y-1 active:scale-95"
                  > <FaWhatsapp size={20} />
                  WhatsApp
                </a>
                <a 
                  href={`https://instagram.com/${instagramUser}`} target="_blank" 
                  className="group flex items-center gap-2 p-2 px-3 bg-gradient-to-tr from-amber-500 to-rose-500 text-white rounded-xl hover:scale-105 transition-all shadow-md shadow-rose-200"
                  > <FaInstagram size={20} />
                  <span className="text-xs font-bold hidden sm:inline">Instagram</span>
                </a>

                <a 
                  href={`https://tiktok.com/${tiktokUser}`} target="_blank" 
                  className="group flex items-center gap-2 p-2 bg-black text-white rounded-xl hover:scale-105 transition-all shadow-md shadow-gray-400"
                  >
                  <FaTiktok size={20} />
                  <span className="text-xs font-bold hidden sm:inline">Tiktok</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 relative">
            {activeBranch.hasMap ? (
              <iframe
                key={activeBranch.id}
                src={activeBranch.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (

              <div className="w-full h-full bg-gradient-to-br from-rose-500 to-rose-700 flex flex-col items-center justify-center p-8 text-center text-white animate-in zoom-in-95 duration-500">
                <div className="mb-6 p-6 bg-white/20 rounded-full animate-bounce">
                  <FiInfo size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Lokasi Sedang Diverifikasi</h3>
                <p className="max-w-md opacity-90 mb-8 leading-relaxed">
                  Lokasi cabang kami di <span className="font-bold underline">{activeBranch.name}</span> sedang dalam proses pendaftaran. Kamu bisa gunakan patokan: <br/>
                  <span className="italic mt-2 inline-block font-semibold bg-white/20 px-3 py-1 rounded">"{activeBranch.patokan}"</span>
                </p>
                <a 
                  href={activeBranch.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition flex items-center gap-2"
                >
                  <FaWhatsapp size={20} /> Minta Share Location Sekarang
                </a>
              </div>
            )}
          </div>
        </div>

        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="afterInteractive" 
          onLoad={() => {
            if(window.ElfsightApps) {
              window.ElfsightApps.init();
            }
          }}
        />
      </div>
    </main>
  );
};

export default TestimonialSection;