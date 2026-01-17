"use client";

import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup"
import { useState } from "react";
// import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  // const { items } = useCartStore();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-rose-100">
      <div className="container mx-auto flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-rhc.png"
            alt="Rizqiya Home Care"
            width={127}
            height={30}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-16 text-sm font-medium">
          <Link
            href="#rhc-section"
            className="relative text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-1/2 after:rounded-full after:bg-primary"
          >
            RHC
          </Link>

          <Link
            href="#category-section"
            className="text-gray-700 hover:text-primary transition"
          >
            Layanan Kami
          </Link>

          <Link
            href="#products-section"
            className="text-gray-700 hover:text-primary transition"
          >
            Temukan Perawatan yang Tepat
          </Link>
        </nav>
        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            {/* <FiShoppingBag size={24} />
            {items.length ? (
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
                {items.length}
              </div>
            ) : (
              <></>
            )} */}
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>

        {/* Mobile hint (optional placeholder) */}
        <div className="md:hidden text-sm font-medium text-primary">
          Menu
        </div>
      </div>
      {/* Accent strip */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
    </header>
  );
};

export default Header;
