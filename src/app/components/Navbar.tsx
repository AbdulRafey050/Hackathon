"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full px-6 py-4 bg-white border-black border-b-[0.5px] border-opacity-30">
      <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between">

        <div className="flex-shrink-0 left-6">
          <Link href="/">
            <Image
              src="/logo2.png" 
              alt="Exclusive Logo"
              className="h-8  w-auto"
              height={25}
              width={25}
            />
          </Link>
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-8 absolute md:static bg-white md:bg-transparent top-[64px] left-0 w-full md:w-auto p-4 md:p-0`}
        >
          <Link
            href="/"
            className="block md:inline text-[#000000] font-poppins font-normal text-base no-underline hover:md:underline decoration-solid decoration-2 hover:text-black"
          >
            New & Featured
          </Link>
          <Link
            href="/contact"
            className="block md:inline text-[#000000] font-poppins font-normal text-base no-underline hover:md:underline decoration-solid decoration-2 hover:text-black"
          >
            Men
          </Link>
          <Link
            href="/about"
            className="block md:inline text-[#000000] font-poppins font-normal text-base no-underline hover:md:underline decoration-solid decoration-2 hover:text-black"
          >
            Women
          </Link>
          <Link
            href="/signup"
            className="block md:inline text-[#000000] font-poppins font-normal text-base no-underline hover:md:underline decoration-solid decoration-2 hover:text-black"
          >
            Kids
          </Link>
          <Link
            href="/signup"
            className="block md:inline text-[#000000] font-poppins font-normal text-base no-underline hover:md:underline decoration-solid decoration-2 hover:text-black"
          >
            Sale
          </Link>
          <Link
            href="/signup"
            className="block md:inline text-[#000000] font-poppins font-normal text-base no-underline hover:md:underline decoration-solid decoration-2 hover:text-black"
          >
            SNKRS
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-[#f5f5f5] rounded-[70px] px-4 py-2">
            <FiSearch className="text-[#000000] h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent outline-none text-[#000000] font-poppins font-normal text-xs leading-4"
            />
          </div>
          <FiHeart className="text-[#000000] text-xl h-8 w-8 cursor-pointer hover:text-black" />
          <Link href="/cart">
            <HiOutlineShoppingBag className="text-[#000000] text-xl h-8 w-8 cursor-pointer hover:text-black" />
          </Link>

          <div className="md:hidden">
            {!isMenuOpen ? (
              <FiMenu
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            ) : (
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
