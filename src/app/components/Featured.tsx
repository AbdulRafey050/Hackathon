"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="bg-white w-full py-10">

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-lg font-semibold text-black mb-6">Featured</h2>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="relative w-full h-[600px]">
          <Image
            src="/f1.png" 
            alt="Running featured image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-10 px-4">
        <h1 className="text-3xl font-extrabold text-black">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <Link href='/allproducts'>
        <button
          className="mt-8 px-6 py-3 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-all"
        >
          Find Your Shoe
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
