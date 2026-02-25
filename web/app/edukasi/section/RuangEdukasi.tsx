import { client } from "@/lib/sanity/client";
import EdukasiGrid from "./EdukasiGrid"; 

export default async function RuangEdukasi() {
  const edukasi = await client.fetch(
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
    <section id="edukasi" className="container mx-auto py-15 px-4 scrol-mt-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E3F] mb-12">
        Ruang Edukasi
      </h2>

      {(!edukasi || edukasi.length === 0) ? (
        <div className="p-10 border-2 border-dashed border-gray-200 rounded-[2rem] text-center text-gray-400">
          Belum ada data edukasi yang dipublikasikan.
        </div>
      ) : (

        <EdukasiGrid items={edukasi} />
      )}
    </section>
  );
}