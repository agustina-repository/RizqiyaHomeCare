"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  const [activeFooterTab, setActiveFooterTab] = useState<string | null>(null);
  const instagramUser = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;
  const tiktokUser = process.env.NEXT_PUBLIC_TIKTOK_ACCOUNT;

  const quickLinks = [
    { name: "RHC", href: "/#rhc-section" },
    { name: "Layanan", href: "/#category-section" },
    { name: "Ruang Edukasi", href: "/#edukasi" },
    { name: "Legalitas", href: "/#legal" },
    { name: "Testimoni", href: "/#testimonial-section" },
  ];

  const socialLinks = [
    { name: "Instagram", href: `https://www.instagram.com/${instagramUser}` },
    { name: "TikTok", href: `https://www.tiktok.com/${tiktokUser}` },
  ];

  return (
    <footer className="relative mt-40 text-white overflow-hidden bg-[#1a1a2e]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2ab9]/20 via-[#38384b]/10 to-[#1a0d12]" />
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-between pt-20 pb-24 gap-12">
        <div className="brightness-110 contrast-110">
          <Image
            src="/images/logo-rhc.png"
            alt="logo rhc footer"
            width={187}
            height={44}
          />
          <p className="mt-6 text-amber-400/90 text-[12px] leading-relaxed tracking-wide font-light max-w-[250px]">
            Perawatan terbaik dengan kepedulian dan ketulusan, sigap hadir di
            rumah Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-rose-300 mb-2 uppercase tracking-widest">
              Navigation
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveFooterTab(link.name)}
                className="relative group w-fit block"
              >
                <motion.div
                  className="flex items-center py-1"
                  whileHover={{ x: 6 }} // Efek geser ke kanan saat hover
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span
                    className={`text-sm transition-all duration-300 ${
                      activeFooterTab === link.name
                        ? "text-white font-bold" // Terang & Bold jika aktif
                        : "text-white/60 group-hover:text-white" // Redup jadi terang saat hover
                    }`}
                  >
                    {link.name}
                  </span>
                </motion.div>

                {activeFooterTab === link.name && (
                  <motion.div
                    layoutId="footerActiveTab"
                    className="absolute -left-2 top-0 bottom-0 w-[2px] bg-amber-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-rose-300 mb-2 uppercase tracking-widest">
              Connect
            </h4>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="text-white/60 hover:text-red-400 text-sm hover:translate-x-1 transition-all duration-300"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-6 pt-10 pb-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-[12px] font-light tracking-wide text-center md:text-left">
            Rizqiya Home Care © 2022 All Rights Reserved.
            <br className="md:hidden" />
            <span className="text-amber-400 font-semibold ml-0 md:ml-2 drop-shadow-sm transition-all hover:underline">
              Built by Amanah Tech
            </span>
          </div>

          <div className="flex gap-8 items-center text-xs md:text-sm">
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white transition-all hover:underline decoration-red-500 underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white transition-all hover:underline decoration-red-500 underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </footer>
  );
};

export default FooterSection;
