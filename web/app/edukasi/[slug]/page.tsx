import { client } from "@/lib/sanity/client";
import ImageSlider from "../section/ImageSlider";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EdukasiDetail({ params }: PageProps) {
  const { slug } = await params;

  const data = await client.fetch(
    `*[_type == "edukasi" && slug.current == $slug][0]{
      _id,
      judul,
      caption,
      gallery,
      isPremium,
      price,
      freeLimit
    }`,
    { slug },
    { cache: "no-store" },
  );

  if (!data) return <p className="text-center py-20">Data tidak ditemukan.</p>;

  const freeLimitValue =
    data.freeLimit || (data.isPremium ? 1 : data.gallery.length);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold text-[#0B1E3F] mb-6">{data.judul}</h1>
        {data.isPremium && (
          <span className="bg-orange-100 text-[#FF6B35] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Premium
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-8 whitespace-pre-line">{data.caption}</p>

      {data.gallery && data.gallery.length > 0 ? (
        <div className="shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          <ImageSlider
            images={data.gallery}
            title={data.judul}
            contentId={data._id}
            isPremium={data.isPremium}
            price={data.price}
            freeLimit={freeLimitValue}
          />
        </div>
      ) : (
        <p className="text-gray-400 italic">Tidak ada galeri foto.</p>
      )}

      <div className="mt-12">
        <a
          href="/#edukasi"
          className="text-[#FF6B35] font-bold hover:underline"
        >
          ← Kembali ke Edukasi
        </a>
      </div>
    </div>
  );
}
