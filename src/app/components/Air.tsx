"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Air = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Women's Shoes",
      imageUrl: "/a1.png",
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Men's Shoes",
      imageUrl: "/a2.png",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      category: "Men's Shoes",
      imageUrl: "/a3.png",
    },
  ];

  return (
    <div className="bg-white py-10">
      {/* Header */}
      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">Best of Air Max</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-semibold text-gray-700">Shop</span>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-7xl mx-auto mt-6">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex flex-col items-center border border-gray-400 rounded-lg shadow-md overflow-hidden">
                <div className="relative bg-gray-100 w-full aspect-square">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <div className="flex flex-col items-center mt-4 px-4">
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                  <p className="text-lg font-bold mt-2">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Air;