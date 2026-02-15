import { client } from "@/lib/sanity/client";
import ImageSlider from "../section/ImageSlider";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EdukasiDetail({ params }: PageProps) {
  const { slug } = await params;

  // Get data from Sanity
  const data = await client.fetch(
    `*[_type == "edukasi" && slug.current == $slug][0]{
      judul,
      caption,
      gallery
    }`,
    { slug },
    { cache: 'no-store' }
  );

  if (!data) return <p className="text-center py-20">Data tidak ditemukan.</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-[#0B1E3F] mb-6">{data.judul}</h1>
      <p className="text-gray-600 mb-8 whitespace-pre-line">{data.caption}</p>
      
      {data.gallery && data.gallery.length > 0 ? (
        <div className="shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          <ImageSlider images={data.gallery} title={data.judul} />
        </div>
      ) : (
        <p className="text-gray-400 italic">Tidak ada galeri foto.</p>
      )}

      <div className="mt-12">
        <a href="/#edukasi" className="text-[#FF6B35] font-bold hover:underline">
          ← Kembali ke Edukasi
        </a>
      </div>
    </div>
  );
}