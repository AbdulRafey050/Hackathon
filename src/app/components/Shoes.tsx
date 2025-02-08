'use client'
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { GET_PRODUCTS } from "../../sanity/lib/queries";
import { Product } from "../../../types/product";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

const SHOES = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(GET_PRODUCTS, {}, { cache: "no-store" });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {product.length > 0 ? (
        product.map((product) => (
          <div key={product._id} className="bg-white p-4 shadow-md rounded-lg  transition-transform transform hover:scale-105">
            <div className="relative w-full h-60 sm:h-72 md:h-80">
              {product.imageUrl && (
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.productName || "Product Image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              )}
            </div>
            <h2 className="mt-4 text-lg font-semibold">{product.productName}</h2>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-gray-900 font-bold mt-2">MRP: ₹ {product.price}</p>
            <div className="flex justify-evenly items-center">
            <Link
              href={`/product/${product._id}`}
              className="mt-4 inline-block px-6 py-2 bg-black text-white rounded-full  transition-colors text-base font-medium"
            >
              View Details
            </Link>
            <Link
              href="/checkout"
              className="mt-4 inline-block px-6 py-2 bg-black text-white rounded-full  transition-colors text-base font-medium"
            >
              Buy Now
            </Link>
            
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg col-span-full">No products available</p>
      )}
    </div>
  );
};

export default SHOES;

