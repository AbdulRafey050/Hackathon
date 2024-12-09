import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center gap-12 py-12">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src="/s3.png"
            alt="Product detail"
            width={653}
            height={653}
            className="w-full max-w-[653px] h-auto object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 max-w-full md:max-w-[500px]">
          {/* Title Section */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#111111]">
            Nike Air Force 1
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#111111] mt-1">
            PLT.AF.ORM
          </h2>

          {/* Description */}
          <p className="mt-6 text-[#111111] text-sm md:text-base leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its inside out-inspired construction, including unique layering
            and exposed foam accents, ups the ante on this timeless Jordan Brand
            silhouette. Details like the deco stitching on the Swoosh add coveted
            appeal, while the unexpected shading, rich mixture of materials, and
            aged midsole aesthetic give this release an artisan finish.
          </p>

          {/* Price Section */}
          <div className="mt-6 text-[#111111] text-2xl md:text-3xl font-medium">
            ₹ 8,695.00
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-4 flex items-center justify-center w-full md:w-auto px-6 py-2 bg-[#111111] text-white rounded-full hover:bg-gray-700 transition-colors text-base font-medium"
            type="button"
          >
            <FaShoppingCart className="mr-2 w-5 h-5" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
