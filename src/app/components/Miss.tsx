import React from "react";
import Image from 'next/image';

const Miss = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Don t Miss</h1>
        </div>

        {/* Image Section */}
        <div className="mt-6">
          <Image
            src="/miss.png"
            alt="Jordan Spring 2023"
            width={1344}
            height={700}
            className="rounded-lg object-cover w-full max-h-[700px]"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center mt-6 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-sm sm:text-base font-light mt-2">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Miss;
