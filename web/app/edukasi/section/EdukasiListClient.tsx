'use client';

import { useState } from "react";
import { urlFor } from "@/lib/sanity/client";
import Link from "next/link";

export default function EdukasiListClient({ initialData }: { initialData: any[] }) {
  const [limit, setLimit] = useState(6);
  const hasMore = initialData.length > limit;

  const handleShowAll = () => {
    setLimit(initialData.length);
  };

  return (
    <section id="edukasi" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E3F] mb-12 text-center md:text-left">
        Ruang Edukasi
      </h2>

      {(!initialData || initialData.length === 0) ? (
        <div className="p-10 border-2 border-dashed border-gray-200 rounded-[2rem] text-center text-gray-400">
          Belum ada data edukasi yang dipublikasikan.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {initialData.slice(0, limit).map((item) => (
              <Link 
                key={item._id} 
                href={`/edukasi/${item.slug}`}
                className="bg-[#F3F7FA] rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-orange-100"
              >
                <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-inner transform group-hover:scale-105 transition-transform duration-300">
                  {item.gallery?.[0] ? (
                    <img 
                      src={urlFor(item.gallery[0]).width(600).url()} 
                      alt={item.judul} 
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="text-5xl opacity-20">📖</div>
                  )}
                </div>

                <h3 className="text-[#FF6B35] font-bold text-xl mb-3 leading-tight min-h-[3rem] flex items-center">
                  {item.judul}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6">
                  {item.caption?.length > 70 ? `${item.caption.slice(0, 70)}...` : item.caption}
                </p>

                <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest group-hover:underline mt-auto">
                  Lihat detail...
                </span>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="mt-16 text-center">
              <button 
                onClick={handleShowAll}
                className="bg-[#0B1E3F] text-white px-10 py-4 rounded-full font-bold hover:bg-[#FF6B35] transition-all duration-300 shadow-xl hover:shadow-orange-200 transform hover:-translate-y-1"
              >
                Tampilkan Semua Artikel
              </button>
              <p className="mt-4 text-gray-400 text-xs">
                Menampilkan 6 dari {initialData.length} materi edukasi
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
}