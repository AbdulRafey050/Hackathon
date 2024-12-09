import Image from "next/image";

export default function Essential() {
  return (
    <div className="bg-white">
      <h2 className="text-xl font-bold mb-6 mt-16 ml-4 sm:text-2xl sm:ml-8">
        The Essentials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div className="relative group">
          <Image
            src="/es1.png"
            alt="Men's Essentials"
            layout="responsive"
            width={450}
            height={400}
            className="rounded-md object-cover"
          />
        </div>

        <div className="relative group">
          <Image
            src="/es2.png"
            alt="Women's Essentials"
            layout="responsive"
            width={450}
            height={400}
            className="rounded-md object-cover"
          />
        </div>

        <div className="relative group">
          <Image
            src="/es3.png"
            alt="Kids' Essentials"
            layout="responsive"
            width={450}
            height={400}
            className="rounded-md object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-medium px-4 py-2 rounded-full shadow-lg transition duration-300 group-hover:bg-gray-200 my-8">
            Kid
          </button>
        </div>
      </div>

      <div className="mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Icon Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Icons</h3>
            <ul className="space-y-1">
              <li className="text-sm">Air Force 1</li>
              <li className="text-sm">Huarache</li>
              <li className="text-sm">Air Max 90</li>
              <li className="text-sm">Air Max 95</li>
            </ul>
          </div>

          {/* Shoes Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Shoes</h3>
            <ul className="space-y-1">
              <li className="text-sm">All Shoes</li>
              <li className="text-sm">Custom Shoes</li>
              <li className="text-sm">Jordan Shoes</li>
              <li className="text-sm">Running Shoes</li>
            </ul>
          </div>

          {/* Clothing Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Clothing</h3>
            <ul className="space-y-1">
              <li className="text-sm">All Clothing</li>
              <li className="text-sm">Modest Wear</li>
              <li className="text-sm">Hoodies & Pullovers</li>
              <li className="text-sm">Shirts & Tops</li>
            </ul>
          </div>

          {/* Kids Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Kids</h3>
            <ul className="space-y-1">
              <li className="text-sm">Infant & Toddler Shoes</li>
              <li className="text-sm">Kids Shoes</li>
              <li className="text-sm">Kids Jordan Shoes</li>
              <li className="text-sm">Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
