"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
// import { FiSearch, FiShoppingBag } from "react-icons/fi";
// import CartPopup from "../ui/cart-popup";
import { use, useState } from "react";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
   <header>
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Link href="/">
        <Image 
          src = "/images/logorhc.png"
          alt="rhc logo"
          width={127}
          height={30}
        />
        </Link>

        <nav className="flex gap-24 font font-medium">
          <Link href="#hero-section" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">Home</Link>
          <Link href="#categoriey-section">Category</Link>
          <Link href="#products-section">Explore Products</Link>
        </nav>

        {/* <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
              3
            </div>
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div> */}
      </div>
   </header> 
  )
}
export default Header;