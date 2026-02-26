"use client";

import Link from "next/link";
import Image from "next/image";

const categoryList = [
  {
    name: "Kelas Sebelum Kelahiran",
    imgUrl: "kelas-sebelum-kelahiran.png",
    desc: "Wadah edukatif bagi calon orang tua untuk mempersiapkan persalinan yang nyaman.",
  },
  {
    name: "Perawatan Ibu",
    imgUrl: "perawatan-ibu.png",
    desc: "Layanan pemulihan pasca melahirkan untuk kebugaran bunda.",
  },
  {
    name: "Perawatan Bayi",
    imgUrl: "perawatan-bayi.png",
    desc: "Perawatan lengkap yang dirancang untuk mendukung kenyamanan bayi.",
  },
  {
    name: "Perawatan Bayi Baru Lahir",
    imgUrl: "newborn care.png",
    desc: "Perawatan intensif untuk bayi baru lahir.",
  },
  {
    name: "Pijat Bayi dan Anak",
    imgUrl: "pijat-bayi-dan-anak.png",
    desc: "Sentuhan lembut untuk stimulasi tumbuh kembang si kecil secara optimal.",
  },
  {
    name: "Baby SPA",
    imgUrl: "baby spa.png",
    desc: "Relaksasi air dan pijat untuk meningkatkan kualitas tidur bayi.",
  },
];

const toSlug = (text: string) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

const CategorySection = () => {
  return (
    <section
      id="category-section"
      className="container mx-auto pb-20 px-4 scroll-mt-12"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Layanan Kami
        </h2>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 w-full max-w-6xl">
          {categoryList.map((category, index) => (
            <Link
              key={index}
              href={`/product/${toSlug(category.name)}`}
              className="group w-full"
            >
              <div
                className="rounded-xl bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7]
                           w-full h-full min-h-[240px] md:min-h-[280px]
                           flex flex-col items-center justify-start 
                           cursor-pointer transition-all duration-300
                           hover:shadow-lg border border-transparent hover:border-primary/20
                           p-4 md:p-6 overflow-hidden"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 flex-shrink-0">
                  <Image
                    src={`/images/categories/${category.imgUrl}`}
                    fill
                    alt={category.name}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col items-center text-center">
                  <h3 className="text-primary font-bold text-sm md:text-lg leading-tight mb-2">
                    {category.name}
                  </h3>

                  <p className="text-gray-500 text-[10px] md:text-xs line-clamp-3 md:line-clamp-2">
                    {category.desc}
                  </p>

                  <span className="text-primary text-[10px] font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                    Lihat detail...
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
