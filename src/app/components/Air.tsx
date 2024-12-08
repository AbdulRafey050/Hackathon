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

      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">Best of Air Max</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-semibold text-gray-700">Shop</span>
          <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-100">
            <span className="text-lg font-bold">&lt;</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-200">
            <span className="text-lg font-bold">&gt;</span>
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-6">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30} 
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>

              <div
                className="flex flex-col items-center border border-gray-400 rounded-lg shadow-md overflow-hidden"
                style={{
                  width: "441.36px",
                  height: "510.36px",
                }}
              >
                <div
                  className="relative bg-gray-100"
                  style={{ width: "441.36px", height: "441.36px" }}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col items-center mt-4">
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
