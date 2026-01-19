"use client";

import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup"
import { useState } from "react";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-rose-100 w-full">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-rhc.png"
            alt="Rizqiya Home Care"
            width={127}
            height={30}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#rhc-section"
            className="relative text-primary after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-1/2 after:rounded-full after:bg-primary">
            RHC
          </Link>

          <Link href="#category-section"
            className="text-gray-700 hover:text-primary transition">
            Layanan Kami
          </Link>

          <Link href="#testimonial-section"
            className="text-gray-700 hover:text-primary transition">
            Suara Mereka
          </Link>
        </nav>

        {/* Icons */}
        <div className="relative flex items-center gap-4 md:gap-6">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-sm font-medium text-primary">
          Menu
        </div>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
    </header>
  );
};

export default Header;
