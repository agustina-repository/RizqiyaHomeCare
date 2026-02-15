import { client, urlFor } from "@/lib/sanity/client";
import Link from "next/link";

interface EdukasiItem {
  _id: string;
  judul: string;
  caption: string;
  slug: string;
  gallery?: any[];
}

export default async function RuangEdukasi() {
  const edukasi: EdukasiItem[] = await client.fetch(
    `*[_type == "edukasi"] | order(_createdAt desc){
      _id,
      judul,
      caption,
      "slug": slug.current, 
      gallery
    }`,
    {},
    { cache: 'no-store' }
  );

  return (
    <section id="edukasi" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E3F] mb-12">
        Ruang Edukasi
      </h2>

      {(!edukasi || edukasi.length === 0) ? (
        <div className="p-10 border-2 border-dashed border-gray-200 rounded-[2rem] text-center text-gray-400">
          Belum ada data edukasi yang dipublikasikan.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {edukasi.map((item: EdukasiItem) => (
            /* Grid Edukasi */
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
      )}
    </section>
  );
}