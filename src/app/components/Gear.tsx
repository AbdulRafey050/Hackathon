import React from "react";
import Image from "next/image";

const Gear = () => {
  return (
    <div className="w-full max-w-[1344px] h-auto mx-auto relative px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Gear Up</h1>
        <div className="flex items-center space-x-2"></div>
      </div>

      <div className="flex flex-wrap justify-between items-center -mt-4 md:-mt-7 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2 ml-0 md:ml-[407px]">
          <span className="text-lg font-bold">Shop Men</span>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-100 rounded-full">
            &lt;
          </button>
          <button className="w-10 h-10 flex items-center justify-center border bg-gray-300 rounded-full">
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="w-full max-w-[300px] mx-auto">
          <Image
            src="/g1.png"
            alt="Nike Dri-FIT ADV TechKnit Ultra"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="mt-2 text-sm font-bold">Nike Dri-FIT ADV TechKnit Ultra</div>
          <div className="text-sm">Men Short-Sleeve Running Top</div>
          <div className="text-sm font-bold">₹ 3,895</div>
        </div>

        <div className="w-full max-w-[300px] mx-auto">
          <Image
            src="/g2.png"
            alt="Nike Dri-FIT Challenger"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="mt-2 text-sm font-bold">Nike Dri-FIT Challenger</div>
          <div className="text-sm">Men 18cm (approx.) 2-in-1 Versatile Shorts</div>
          <div className="text-sm font-bold">₹ 2,495</div>
        </div>

        <div className="w-full max-w-[300px] mx-auto">
          <Image
            src="/g3.png"
            alt="Nike Dri-FIT ADV Run Division"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="mt-2 text-sm font-bold">Nike Dri-FIT ADV Run Division</div>
          <div className="text-sm">Women Long-Sleeve Running Top</div>
          <div className="text-sm font-bold">₹ 5,295</div>
        </div>

        <div className="w-full max-w-[300px] mx-auto">
          <Image
            src="/g4.png"
            alt="Nike Fast"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="mt-2 text-sm font-bold">Nike Fast</div>
          <div className="text-sm">Women Mid-Rise 7/8 Running Leggings with Pockets</div>
          <div className="text-sm font-bold">₹ 3,795</div>
        </div>
      </div>
    </div>
  );
};

export default Gear;