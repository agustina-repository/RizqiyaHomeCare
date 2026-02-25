'use client';

import { useState } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";

export default function EdukasiGrid({ items }: { items: any[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedItems = isExpanded ? items : items.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedItems.map((item) => (
          <Link 
            key={item._id} 
            href={`/edukasi/${item.slug}`} 
            className="bg-[#F3F7FA] rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-orange-100 cursor-pointer"
          >
            <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-[#F3F7FA] transform group-hover:scale-105 transition-transform duration-300">
              {item.gallery && item.gallery[0] ? (
                <img 
                  src={urlFor(item.gallery[0]).width(600).url()} 
                  alt={item.judul || "Edukasi"} 
                  className="object-contain w-full h-full"
                />
              ) : (
                <div className="text-5xl opacity-20">📖</div>
              )}
            </div>

            <h3 className="text-[#FF6B35] font-bold text-xl mb-3 leading-tight min-h-[3rem] flex items-center">
              {item.judul || "Tanpa Judul"}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {item.caption 
                ? item.caption.length > 50 
                  ? `${item.caption.slice(0, 50)}...` 
                  : item.caption
                : "Klik detail untuk membaca..."
              }
            </p>

            <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest group-hover:underline mt-auto">
              Lihat detail...
            </span>
          </Link>
        ))}
      </div>

      {!isExpanded && items.length > 6 && (
        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsExpanded(true)}
            className="bg-[#0B1E3F] text-white px-10 py-4 rounded-full font-bold hover:bg-[#FF6B35] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Lihat Semua Artikel
          </button>
        </div>
      )}
    </>
  );
}