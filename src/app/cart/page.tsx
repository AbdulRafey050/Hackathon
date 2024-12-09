import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function CartPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="p-4 rounded shadow mb-6 bg-gray-100">
        <p className="text-sm text-gray-600">Free Delivery</p>
        <p className="text-sm text-blue-600 underline">Applies to orders of ₹14,000.00 or more. View details</p>
      </div>


      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white p-4 rounded flex-1">
          <h2 className="text-lg font-bold mb-4">Bag</h2>

          <div className="flex items-start gap-4 border-b pb-4 mb-4">
            <Image
              src="/s38.png" 
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              width={100}
              height={100}
              className="rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p className="text-sm text-gray-600">Men Short-Sleeve Running Top</p>
              <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
              <div className='flex gap-28'>
              <p className="text-sm text-gray-600">Size: 8</p>
              <p className="text-sm text-gray-600">Quantity: 1</p>
              </div>
              <p className="text-sm font-bold">MRP: ₹3,895.00</p>
              <div className='flex space-x-6'>
                <p><CiHeart size={20} /></p>
                <p><RiDeleteBin6Line size={20}/> </p>
              </div>
            </div>
            
          </div>

          <div className="flex items-start gap-4">
            <Image
              src="/s45.png" 
              alt="Nike Air Max 97 SE"
              width={100}
              height={100}
              className="rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Nike Air Max 97 SE</h3>
              <p className="text-sm text-gray-600">Men Shoes</p>
              <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
              <div className='flex gap-28'>
              <p className="text-sm text-gray-600">Size: 8</p>
              <p className="text-sm text-gray-600">Quantity: 1</p>
              </div>
              <p className="text-sm font-bold">MRP: ₹16,995.00</p>
              <div className='flex space-x-6'>
                <p><CiHeart size={20} /></p>
                <p><RiDeleteBin6Line size={20}/> </p>
              </div>
            </div>
           
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white p-4 rounded w-full lg:w-1/3">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>₹20,890.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>₹20,890.00</p>
          </div>
          <button className="bg-black text-white w-full rounded-3xl py-3 mt-4">
            Member Checkout
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow my-6">
        <h2 className="text-lg font-bold mb-2">Favourites</h2>
        <p className="text-gray-600">There are no items saved to your favourites.</p>
      </div>

<div className="bg-white p-4 rounded shadow">
  <h2 className="text-lg font-bold mb-4">You Might Also Like</h2>
  <div className="flex flex-col items-start gap-4">
    <Image
      src="/card.png" 
      alt="Air Jordan 1 Mid SE Craft"
      width={300}
      height={400}
      className="rounded"
    />
    <div>
      <h3 className="font-semibold">Air Jordan 1 Mid SE Craft</h3>
      <p className="text-sm text-gray-600">Men Shoes</p>
      <p className="text-sm font-bold">MRP: ₹12,295.00</p>
    </div>
  </div>
</div>
    </div>
  );
}