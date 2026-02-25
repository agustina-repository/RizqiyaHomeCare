import { client } from "@/lib/sanity/client";
import EdukasiListClient from "@/app/edukasi/section/EdukasiListClient"; 

export default async function RuangEdukasiPage() {
  const edukasi = await client.fetch(
    `*[_type == "edukasi"] | order(_createdAt desc){
      _id,
      judul,
      caption,
      "slug": slug.current, 
      gallery,
      isPremium
    }`,
    {}, 
    { cache: 'no-store' }
  );

  return (
    <main className="min-h-screen bg-white">
      <EdukasiListClient initialData={edukasi} />
    </main>
  );
}