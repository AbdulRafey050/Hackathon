import React from "react";
import Image from 'next/image';

const Miss = () => {
  return (
    <div>
      <div className="w-[1344px] h-[700px] mx-auto">
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-semibold">Don't Miss</h1>
        </div>

        <div className="mt-6">
          <Image
            src="/miss.png" 
            alt="Jordan Spring 2023"
            width={1344}
            height={700}
            className="rounded-lg" 
          />
        </div>

        <div className="flex flex-col items-center mt-6">
          <h2 className="text-3xl font-bold tracking-wide">FLIGHT ESSENTIALS</h2>
          <p className="text-sm font-light mt-2">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white text-sm font-bold rounded-full">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Miss;