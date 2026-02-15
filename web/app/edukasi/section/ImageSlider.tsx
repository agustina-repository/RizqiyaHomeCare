"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { urlFor } from "@/lib/sanity/client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: any[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  return (
    <div className="relative w-full group">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="bg-[#F8FAFC] flex justify-center items-center">
            <div className="relative w-full h-[400px] md:h-[600px] flex justify-center p-4">
              <img 
                src={urlFor(img).url()} 
                alt={`${title} - slide ${i + 1}`}
                className="max-w-full max-h-full object-contain shadow-sm" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        :root {
          --swiper-navigation-color: #FF6B35;
          --swiper-pagination-color: #FF6B35;
        }
        .swiper-button-next, .swiper-button-prev {
          background: rgba(255, 255, 255, 0.8);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          after: { font-size: 18px !important; }
        }
      `}</style>
    </div>
  );
}