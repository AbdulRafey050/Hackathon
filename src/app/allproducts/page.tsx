import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Nike Air Force 1 Mid '07",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 10,795.00",
    color: "1 Colour",
    image: "/s1.png",
  },
  {
    id: 2,
    title: "Nike Court Vision Low Next Nature",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 4,995.00",
    color: "1 Colour",
    image: "/s2.png",
  },
  {
    id: 3,
    title: "Nike Air Force 1 PLT.AF.ORM",
    subtitle: "Women's Shoes",
    color: "1 Colour",
    price: "MRP: ₹ 8,695.00",
    image: "/s3.png",
  },
  {
    id: 4,
    title: "Nike Air Force 1 React",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 13,295.00",
    color: "1 Colour",
    image: "/s4.png",
  },
  {
    id: 5,
    title: "Air Jordan 1 Elevate Low",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 11,895.00",
    color: "1 Colour",
    image: "/s5.png",
  },
  {
    id: 6,
    title: "Nike Standard Issue",
    subtitle: "Women's Basketball Jersey",
    price: "MRP: ₹ 2,895.00",
    color: "1 Colour",
    image: "/s6.png",
  },
  {
    id: 7,
    title: "Nike Dunk Low Retro SE",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 9,695.00",
    color: "1 Colour",
    image: "/s7.png",
  },
  {
    id: 8,
    title: "Nike Dri-FIT UV Hyverse",
    subtitle: "Men's Short-Sleeve Graphic Fitness Top",
    price: "MRP: ₹ 2,495.00",
    color: "1 Colour",
    image: "/s8.png",
  },
  {
    id: 9,
    title: "Nike Court Vision Low",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 5,695.00",
    color: "1 Colour",
    image: "/s9.png",
  },
  {
    id: 10,
    title: "Nike Dri-FIT Ready",
    subtitle: "Men's Short-Sleeve Fitness Top",
    price: "MRP: ₹ 2,495.00",
    color: "3 Colours",
    image: "/s10.png",
  },
  {
    id: 11,
    title: "Nike One Leak Protection: Period",
    subtitle: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    price: "MRP: ₹ 2,395.00",
    color: "2 Colours",
    image: "/s11.png",
  },
  {
    id: 12,
    title: "Nike Air Force 1 LV8 3",
    subtitle: "Older Kids' Shoes",
    price: "MRP: ₹ 7,495.00",
    color: "1 Colour",
    image: "/s12.png",
  },
  {
    id: 13,
    title: "Nike Blazer Low Platform",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 8,195.00",
    color: "1 Colour",
    image: "/s13.png",
  },
  {
    id: 14,
    title: "Nike Air Force 1 '07",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 8,195.00",
    color: "2 Colours",
    image: "/s14.png",
  },
  {
    id: 15,
    title: "Nike Pro Dri-FIT",
    subtitle: "Men's Tight-Fit Sleeveless Top",
    price: "MRP: ₹ 1,495.00",
    color: "1 Colour",
    image: "/s15.png",
  },
  {
    id: 16,
    title: "Nike Dunk Low Retro",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 8,695.00",
    color: "1 Colour",
    image: "/s16.png",
  },
  {
    id: 17,
    title: "Nike Air Max SC",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 5,995.00",
    color: "2 Colours",
    image: "/s17.png",
  },
  {
    id: 18,
    title: "Nike Dri-FIT UV Miler",
    subtitle: "Men's Short-Sleeve Running Top",
    price: "MRP: ₹ 1,695.00",
    color: "1 Colour",
    image: "/s18.png",
  },
  {
    id: 19,
    title: "Nike Air Max SYSTM",
    subtitle: "Older Kids' Shoes",
    price: "MRP: ₹ 6,495.00",
    color: "1 Colour",
    image: "/s19.png",
  },
  {
    id: 20,
    title: "Nike Alate All U",
    subtitle: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
    price: "MRP: ₹ 2,195.00",
    color: "1 Colour",
    image: "/s20.png",
  },
  {
    id: 21,
    title: "Nike Court Legacy Lift",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 7,495.00",
    color: "2 Colours",
    image: "/s21.png",
  },
  {
    id: 22,
    title: "Nike Swoosh",
    subtitle: "Women's Medium-Support Padded Sports Bra Tank",
    price: "MRP: ₹ 3,095.00",
    color: "2 Colours",
    image: "/s22.png",
  },
  {
    id: 23,
    title: "Nike SB Zoom Janoski OG+",
    subtitle: "Shoes",
    price: "MRP: ₹ 8,595.00",
    color: "1 Colour",
    image: "/s23.png",
  },
  {
    id: 24,
    title: "Nike Dri-FIT Run Division Rise 365",
    subtitle: "Men's Running Tank",
    price: "MRP: ₹ 3,495.00",
    color: "2 Colours",
    image: "/s24.png",
  },
  {
    id: 25,
    title: "Nike Dri-FIT Challenger",
    subtitle: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "MRP: ₹ 2,495.00",
    color: "1 Colour",
    image: "/s25.png",
  },
  {
    id: 26,
    title: "Jordan Series ES",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 7,495.00",
    color: "2 Colours",
    image: "/s26.png",
  },
  {
    id: 27,
    title: "Nike Outdoor Play",
    subtitle: "Older Kids' Oversized Woven Jacket",
    price: "MRP: ₹ 3,895.00",
    color: "1 Colour",
    image: "/s27.png",
  },
  {
    id: 28,
    title: "Nike Sportswear Trend",
    subtitle: "Older Kids'/Girls' High-Waisted Woven Shorts",
    price: "MRP: ₹ 2,495.00",
    color: "2 Colours",
    image: "/s28.png",
  },
  {
    id: 29,
    title: "Nike Blazer Low '77 Jumbo",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 6,595.00",
    color: "1 Colour",
    image: "/s29.png",
  },
  {
    id: 30,
    title: "Nike SB Force 58",
    subtitle: "Skate Shoe",
    price: "MRP: ₹ 5,995.00",
    color: "1 Colour",
    image: "/s30.png",
  },
  {
    id: 31,
    title: "Nike Dri-FIT Run Division Challenger",
    subtitle: "Men's 13cm (approx.) Brief-Lined Running Shorts",
    price: "MRP: ₹ 2,495.00",
    color: "2 Colours",
    image: "/s31.png",
  },
  {
    id: 32,
    title: "Nike Legend Essential 3 Next Nature",
    subtitle: "Men's Training Shoes",
    price: "MRP: ₹ 4,995.00",
    color: "2 Colours",
    image: "/s32.png",
  },
  {
    id: 33,
    title: "Nike Air Max SYSTM",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 6,595.00",
    color: "1 Colour",
    image: "/s33.png",
  },
  {
    id: 34,
    title: "Nike Dri-FIT Totality",
    subtitle: "Men's 23cm (approx.) Unlined Shorts",
    price: "MRP: ₹ 1,795.00",
    color: "2 Colours",
    image: "/s34.png",
  },
  {
    id: 35,
    title: "Serena Williams Design Crew",
    subtitle: "Women's Full-zip Top",
    price: "MRP: ₹ 5,495.00",
    color: "1 Colour",
    image: "/s35.png",
  },
  {
    id: 36,
    title: "Jordan Why Not .6 PF",
    subtitle: "Men's Shoes",
    price: "MRP: ₹ 13,995.00",
    color: "2 Colours",
    image: "/s36.png",
  },
  {
    id: 37,
    title: "Air Jordan 1 Low",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 8,295.00",
    color: "1 Colour",
    image: "/s37.png",
  },
  {
    id: 38,
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    subtitle: "Men's Short-Sleeve Running Top",
    price: "MRP: ₹ 3,895.00",
    color: "1 Colour",
    image: "/s38.png",
  },
  {
    id: 39,
    title: "Nike Dri-FIT Form",
    subtitle: "Men's 18cm (approx.) Unlined Versatile Shorts",
    price: "MRP: ₹ 2,395.00",
    color: "2 Colours",
    image: "/s39.png",
  },
  {
    id: 40,
    title: "Air Jordan 1 Mid",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 11,495.00",
    color: "1 Colour",
    image: "/s40.png",
  },
  {
    id: 41,
    title: "Nike Dri-FIT ADV Run Division",
    subtitle: "Women's Long-Sleeve Running Top",
    price: "MRP: ₹ 5,295.00",
    color: "1 Colour",
    image: "/s41.png",
  },
  {
    id: 42,
    title: "Nike Yoga",
    subtitle: "Women's High-Waisted 7/8 Leggings",
    price: "MRP: ₹ 3,735.00",
    color: "1 Colour",
    image: "/s42.png",
  },
  {
    id: 43,
    title: "Nike Dri-FIT Totality",
    subtitle: "Men's 18cm (approx.) Unlined Shorts",
    price: "MRP: ₹ 1,795.00",
    color: "3 Colours",
    image: "/s43.png",
  },
  {
    id: 44,
    title: "Nike Dri-FIT ADV Tour",
    subtitle: "Women's Short-sleeve Golf Polo",
    price: "MRP: ₹ 3,695.00",
    color: "2 Colours",
    image: "/s44.png",
  },
  {
    id: 45,
    title: "Nike Tanjun",
    subtitle: "Women's Shoes",
    price: "MRP: ₹ 4,995.00",
    color: "2 Colours",
    image: "/s45.png",
  },
  {
    id: 46,
    title: "Nike Go",
    subtitle: "Women's Firm-Support High-Waisted Leggings with Pockets",
    price: "MRP: ₹ 5,795.00",
    color: "1 Colour",
    image: "/s46.png",
  },
  {
    id: 47,
    title: "NikeCourt Victory",
    subtitle: "Women's Tennis Tank",
    price: "MRP: ₹ 1,895.00",
    color: "1 Colour",
    image: "/s47.png",
  },
  {
    id: 48,
    title: "Nike Alpha",
    subtitle: "Women's High-Support Padded Sports Bra",
    price: "MRP: ₹ 3,695.00",
    color: "1 Colour",
    image: "/s48.png",
  },

  // Add more products as needed
  
];

const AllProduct = () => {
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

      <div className="flex-1 p-6">
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

      </div>
      </div>
    </div>
  );
};

export default AllProduct;