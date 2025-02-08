// import Image from "next/image";
// import { FaShoppingCart } from "react-icons/fa";
// import { client } from "../../../sanity/lib/client";
// import { GET_PRODUCTS } from "../../../sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";

// export async function getServerSideProps(context:any) {
//   const { id } = context.params;
  
//   try {
//     const product = await client.fetch(GET_PRODUCTS, { id });
    
//     if (!product) {
//       return { notFound: true };
//     }

//     return {
//       props: { product },
//     };
//   } catch (error) {
//     console.error("Error fetching product details:", error);
//     return { notFound: true };
//   }
// }

// const ProductDetail = ({ product }:any) => {
//   return (
//     <div className="max-w-[1440px] mx-auto px-4">
//       <div className="flex flex-col md:flex-row items-center gap-12 py-12">
//         <div className="flex-1">
//           {product.imageUrl && (
//             <Image
//               src={urlFor(product.imageUrl).url()}
//               alt={product.productName}
//               width={653}
//               height={653}
//               className="w-full max-w-[653px] h-auto object-contain"
//             />
//           )}
//         </div>

//         <div className="flex-1 max-w-full md:max-w-[500px]">
//           <h1 className="text-3xl md:text-4xl font-semibold text-[#111111]">
//             {product.productName}
//           </h1>
//           <h2 className="text-2xl md:text-4xl font-semibold text-[#111111] mt-1">
//             {product.category}
//           </h2>

//           <p className="mt-6 text-[#111111] text-sm md:text-base leading-relaxed">
//             {product.description}
//           </p>

//           <div className="mt-6 text-[#111111] text-2xl md:text-3xl font-medium">
//             ₹ {product.price}
//           </div>

//           <button
//             className="mt-4 flex items-center justify-center w-full md:w-auto px-6 py-2 bg-[#111111] text-white rounded-full hover:bg-gray-700 transition-colors text-base font-medium"
//             type="button"
//           >
//             <FaShoppingCart className="mr-2 w-5 h-5" />
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


// import Image from "next/image";
// import { FaShoppingCart } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";
// import { GET_PRODUCTS} from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";


// export default async function ProductDetail({ params }: { params: { id: string } }) {
//   const product = await client.fetch(GET_PRODUCTS, { id: params.id });

//   console.log("Fetched Product:", product)

//   if (!product) {
//     return <p className="text-center text-gray-500 text-lg">Product not found</p>;
//   }

//   return (
//     <div className="max-w-[1440px] mx-auto px-4">
//       <div className="flex flex-col md:flex-row items-center gap-12 py-12">
//         <div className="flex-1">
//           {product.imageUrl && (
//             <Image
//               src={urlFor(product.imageUrl).url()}
//               alt={product.productName}
//               width={653}
//               height={653}
//               className="w-full max-w-[653px] h-auto object-contain"
//             />
//           )}
//         </div>

//         <div className="flex-1 max-w-full md:max-w-[500px]">
//           <h1 className="text-3xl md:text-4xl font-semibold text-[#111111]">
//             {product.productName}
//           </h1>
//           <h2 className="text-2xl md:text-4xl font-semibold text-[#111111] mt-1">
//             {product.category}
//           </h2>

//           <p className="mt-6 text-[#111111] text-sm md:text-base leading-relaxed">
//             {product.description}
//           </p>

//           <div className="mt-6 text-[#111111] text-2xl md:text-3xl font-medium">
//             ₹ {product.price}
//           </div>

//           <button
//             className="mt-4 flex items-center justify-center w-full md:w-auto px-6 py-2 bg-[#111111] text-white rounded-full hover:bg-gray-700 transition-colors text-base font-medium"
//             type="button"
//           >
//             <FaShoppingCart className="mr-2 w-5 h-5" />
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { GET_PRODUCT_BY_ID } from "@/sanity/lib/queries"; // Use correct query
import { urlFor } from "@/sanity/lib/image";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  // Fetch only the specific product
  const product = await client.fetch(GET_PRODUCT_BY_ID, { id: params.id }, { cache: "no-store" });

  console.log("Fetched Product:", product);

  if (!product) {
    return <p className="text-center text-gray-500 text-lg">Product not found</p>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 py-12">
      {product.image && product.image.asset && (
  <Image
    src={urlFor(product.image.asset._ref).url()} // Directly using image reference
    alt={product.productName}
    width={653}
    height={653}
    className="w-full max-w-[653px] h-auto object-contain"
  />
)}


        <div className="flex-1 max-w-full md:max-w-[500px]">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#111111]">
            {product?.productName}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#111111] mt-1">
            {product?.category}
          </h2>

          <p className="mt-6 text-[#111111] text-sm md:text-base leading-relaxed">
            {product?.description}
          </p>

          <div className="mt-6 text-[#111111] text-2xl md:text-3xl font-medium">
            ₹ {product?.price}
          </div>

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
}
