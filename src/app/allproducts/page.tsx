// import Image from "next/image";
import Link from "next/link";
import React from "react";
import Shoes from "../components/Shoes"
import { IoIosArrowUp } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";



const AllProduct=() => {
  return (
    <div className="max-w-[1440px] mx-auto mt-10 ">
      <div className="flex justify-between items-center px-12 mb-6">
          <h1 className="text-2xl font-medium  text-[#111111]">New (500)</h1>
          <div className="flex items-center space-x-4">
            <button className="text-[#111111] font-normal text-base align-center hover:text-gray-700">
              Hide Filters
            </button>
            <IoFilterSharp className="text-[#111111] font-normal text-base align-center hover:text-gray-700"/>
            <div >
            <select className="text-[#111111] border  w-[86.47px] rounded p3-2 py-1 font-normal text-base align-center hover:text-gray-700">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            </div>
          </div>
        </div>
        <div className="flex">
      {/* Sidebar */}
      <aside className="w-[260px] h-[849px] bg-white p-4  hidden sm:block">
       
        <ul className="space-y-2 ml-4">
          <li>
            
            <ul className="ml-4 mb-10 space-y-2">
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Shoes</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Sports Bras</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Tops & T-Shirts</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Hoodies & Sweatshirts</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Jackets</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Trouser & Tights</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Shorts</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Tracksuits</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Jumpsuits & Rompers</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Skirts & Dresses</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Socks</Link></li>
              <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Accessories <br /> & Equipment</Link></li>
            </ul>
          </li>
          <li className=" w-[192px] h-[163px] border-t  border-[#E5E5E5]  ">
           <div className="flex justify-between items-center w-[188.16px] h-12">
             <h1 className="text-xl text-[#111111] font-semibold">Gender</h1>
             <IoIosArrowUp  className="text-xl text-[#111111] font-semibold"/>
             </div>
            <ul className=" w-[196px] h-[108px] top-[54px ] text-[#111111] font-normal text-base">
              <li ><label className="flex items-center mt-1"><input type="checkbox" className="mr-2  border w-5 h-5 border-[#CCCCCC]" /> Men</label></li>
              <li><label className="flex items-center mt-1" ><input type="checkbox" className="mr-2  border w-5 h-5 border-[#CCCCCC]" /> Women</label></li>
              <li><label className="flex items-center mt-1" ><input type="checkbox" className="mr-2 border w-5 h-5 border-[#CCCCCC]" /> Unisex</label></li>
            </ul>
          </li>
          <li className=" w-[192px] h-[132px]  border-t border-[#E5E5E5]  ">
           <div className="flex justify-between items-center w-[188.16px] h-12">
             <h1 className="text-xl text-[#111111] font-semibold">Kids</h1>
             <IoIosArrowUp  className="text-xl text-[#111111] font-semibold"/>
             </div>
            <ul className=" w-[196px] h-[108px]  text-[#111111] font-normal text-base">
              <li ><label className="flex items-center mt-1"><input type="checkbox" className="mr-2  border w-5 h-5 border-[#CCCCCC]" /> Boys</label></li>
              <li><label className="flex items-center mt-1" ><input type="checkbox" className="mr-2  border w-5 h-5 border-[#CCCCCC]" /> Girls</label></li>
              </ul>
          </li>
          <li className=" w-[192px] h-[132px]  border-t border-[#E5E5E5]  ">
           <div className="flex justify-between items-center w-[188.16px] h-12">
             <h1 className="text-lg text-[#111111] font-semibold">Shop By Price</h1>
             <IoIosArrowUp  className="text-xl text-[#111111] font-semibold"/>
             </div>
            <ul className=" w-[196px] h-[108px]  text-[#111111] font-normal text-base">
              <li ><label className="flex items-center mt-1"><input type="checkbox" className="mr-2  border w-5 h-5 border-[#CCCCCC]" />  Under ₹ 2,500.00</label></li>
              <li><label className="flex items-center mt-1" ><input type="checkbox" className="mr-2  border w-5 h-5 border-[#CCCCCC]" />  ₹ 2,501.00+</label></li>
              </ul>
          </li>
          
        
        </ul>
      </aside>

      {/* <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {products.map((product) => (
    <Link href='/productdetail' key={product.id}>
    <div
      key={product.id}
      className="border h-[533px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={348}
        height={348}
        className="w-full h-[348px] object-cover"
      />
      <div className="p-1">
        <p className="text-[#9E3500] text-base  font-medium">
          Just In
        </p>
        <h3 className="text-[#111111] text-base  font-medium">
          {product.title}
        </h3>
        <p className="text-[#757575] text-base  font-normal">{product.subtitle}</p>
        <p className="text-[#757575] text-base  font-normal">{product.color}</p>
        <p className="text-[#111111] text-base  font-bold mt-6">
          {product.price}
        </p>
      </div>
    </div>
    </Link>
  ))}
</div>

      </div> */}
      <Shoes />
      </div>
    </div>
  );
};

export default AllProduct;








// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Shoes from "../components/Shoes"
// import { IoIosArrowUp } from "react-icons/io";
// import { IoFilterSharp } from "react-icons/io5";

// const AllProduct = () => {
//   return (
//     <div className="max-w-[1440px] mx-auto mt-10 px-4 md:px-8 lg:px-12">
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
//         <h1 className="text-2xl font-medium text-[#111111]">New (500)</h1>
//         <div className="flex items-center space-x-4 mt-4 md:mt-0">
//           <button className="text-[#111111] font-normal text-base hover:text-gray-700">
//             Hide Filters
//           </button>
//           <IoFilterSharp className="text-[#111111] font-normal text-base hover:text-gray-700" />
//           <div>
//             <select className="text-[#111111] border w-[120px] rounded px-2 py-1 font-normal text-base hover:text-gray-700">
//               <option>Sort By</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row">
//         {/* Sidebar */}
//         <aside className="w-full md:w-[260px] bg-white p-4 hidden md:block">
//           <ul className="space-y-2 ml-4">
//             <li>
//               <ul className="ml-4 mb-10 space-y-2">
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Shoes</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Sports Bras</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Tops & T-Shirts</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Hoodies & Sweatshirts</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Jackets</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Trouser & Tights</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Shorts</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Tracksuits</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Jumpsuits & Rompers</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Skirts & Dresses</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Socks</Link></li>
//                 <li><Link href="#" className="text-[#111111] font-medium text-base hover:underline">Accessories & Equipment</Link></li>
//               </ul>
//             </li>
//           </ul>
//         </aside>
//         {/* Product Section */}
//         <div className="flex-1">
//           <Shoes />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllProduct;