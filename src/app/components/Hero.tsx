import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white">
        <div className="absolute top-0 left-0 right-0 text-center py-2 text-sm font-medium z-10 w-full flex justify-center bg-[#F5F5F5] px-6">
        <span className="text-gray-700">
        <p className='font-extrabold'>Hello Nike App </p>- Download the app to access everything Nike.{' '}
            <a href="#" className="underline text-black">
                Get Your Great
            </a>
        </span>
         </div>

      <div className="relative top-14 w-full max-w-screen-xl mx-auto">
        <Image
          src="/hero1.png" 
          alt="Nike Air Max Pulse"
          width={1440} 
          height={700} 
          objectFit="cover"
          priority
        />
      </div>

      <div className="text-center py-20 px-6">
        <h2 className="text-lg font-semibold uppercase text-gray-500">First Look</h2>
        <h1 className="text-4xl font-bold mt-2">NIKE AIR MAX PULSE</h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="px-6 py-3 bg-black text-white rounded-full">
            Notify Me
          </button>
          <button className="px-6 py-3 border border-black text-black rounded-full">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;