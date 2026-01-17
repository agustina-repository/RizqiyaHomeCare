"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const categoryList = [
  {
    name: "Kelas Sebelum Kelahiran",
    imgUrl: "kelas-sebelum-kelahiran.png",
  },
  {
    name: "Perawatan Ibu",
    imgUrl: "perawatan-ibu.png",
  },
  {
    name: "Pijat Bayi & Anak",
    imgUrl: "pijat-bayi-dan-anak.png",
  },
  {
    name: "Baby SPA",
    imgUrl: "baby spa.png",
  },
];

const CategorySection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Layanan Kami</h2>
      </div>

      {/* GRID CENTER */}
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-4 gap-12">
          {categoryList.map((category, index) => (
            <div
              key={index}
              className="rounded-xl bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7]
                         w-[220px] h-[220px]
                         flex items-center justify-center"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={`/images/categories/${category.imgUrl}`}
                  width={86}
                  height={86}
                  alt={category.name}
                  className="mb-3"
                />
                <div className="text-primary font-medium text-lg">
                  {category.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
