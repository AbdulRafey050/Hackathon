import Image from "next/image";

export default function Essential() {
  return (
    <div className="bg-white">

      <h2 className="text-xl font-bold mb-4 mt-52 ml-4 sm:text-2xl sm:ml-8">The Essentials</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4">

        <div className="relative">
          <Image
            src="/es1.png" 
            alt="Men's Essentials"
            width={450}
            height={400}
            className="rounded-md object-cover"
          />
        </div>

        <div className="relative">
          <Image
            src="/es2.png" 
            alt="Women's Essentials"
            width={450}
            height={400}
            className="rounded-md object-cover"
          />
        </div>


        <div className="relative">
          <Image
            src="/es3.png" 
            alt="Kids' Essentials"
            width={450}
            height={400}
            className="rounded-md object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-medium px-4 py-2 mx-6 my-7 rounded-full shadow-lg">
            Kid
          </button>
        </div>
      </div>


      <div
        className="mx-auto mt-8"
        style={{
          height: "192px",
          width: "880px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="space-y-1">
          <h3 className="font-bold mb-2 text-sm sm:text-lg">Icons</h3>
          <ul>
            <li className="text-xs sm:text-sm">Air Force 1</li>
            <li className="text-xs sm:text-sm">Huarache</li>
            <li className="text-xs sm:text-sm">Air Max 90</li>
            <li className="text-xs sm:text-sm">Air Max 95</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="font-bold mb-2 text-sm sm:text-lg">Shoes</h3>
          <ul>
            <li className="text-xs sm:text-sm">All Shoes</li>
            <li className="text-xs sm:text-sm">Custom Shoes</li>
            <li className="text-xs sm:text-sm">Jordan Shoes</li>
            <li className="text-xs sm:text-sm">Running Shoes</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="font-bold mb-2 text-sm sm:text-lg">Clothing</h3>
          <ul>
            <li className="text-xs sm:text-sm">All Clothing</li>
            <li className="text-xs sm:text-sm">Modest Wear</li>
            <li className="text-xs sm:text-sm">Hoodies & Pullovers</li>
            <li className="text-xs sm:text-sm">Shirts & Tops</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="font-bold mb-2 text-sm sm:text-lg">Kids</h3>
          <ul>
            <li className="text-xs sm:text-sm">Infant & Toddler Shoes</li>
            <li className="text-xs sm:text-sm">Kids Shoes</li>
            <li className="text-xs sm:text-sm">Kids Jordan Shoes</li>
            <li className="text-xs sm:text-sm">Kids Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
