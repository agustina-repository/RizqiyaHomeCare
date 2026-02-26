"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import CartPopup from "../ui/cart-popup";

const Header = () => {
  const [activeTab, setActiveTab] = useState("RHC");
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  const navItems = [
    { name: "RHC", href: "/#rhc-section" },
    { name: "Layanan", href: "/#category-section" },
    { name: "Ruang Edukasi", href: "/#edukasi" },
    { name: "Legalistas", href: "/#legal" },
    { name: "Testimoni", href: "/#vip" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-rose-100 w-full">
      <div className="flex items-center justify-between px-4 md:px-8 py-8 md:py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/header-img.png"
            alt="Rizqiya Home Care"
            width={250}
            height={60}
            className="h-16 md:h-20 w-auto object-contain transform scale-110 origin-left transition-transform"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2 bg-rose-50/50 p-1.5 rounded-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className="relative px-6 py-2.5 transition-all duration-300"
            >
              <span
                className={`relative z-10 font-bold transition-colors duration-300 ${
                  activeTab === item.name
                    ? "text-white"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.name}
              </span>

              {activeTab === item.name && (
                <motion.div
                  layoutId="activeNavigationBox"
                  className="absolute inset-0 bg-primary rounded-xl shadow-lg shadow-orange-200"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="relative flex items-center gap-4 md:gap-6">
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          ></button>
          {isCartPopupOpen && <CartPopup />}
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div className="md:hidden">
          <select
            onChange={(e) => (window.location.href = e.target.value)}
            className="bg-rose-50 text-primary text-xs font-bold py-1 px-2 rounded-lg border-none outline-none"
          >
            <option value="">Menu</option>
            <option value="/#rhc-section">RHC</option>
            <option value="/#category-section">Layanan</option>
            <option value="/#edukasi">Ruang Edukasi</option>
            <option value="/#legal">Legalitas</option>
            <option value="/#vip">Testimoni</option>
          </select>
        </div>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
    </header>
  );
};

export default Header;
