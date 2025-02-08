import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center px-4 py-2 bg-[#F5F5F5]">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/logo1.png"
          alt="logo"
          width={100}
          height={100}
          className="w-6 h-6"
        />
      </div>

      {/* Navigation Section */}
      <div className="flex flex-wrap justify-center items-center gap-2 text-sm sm:text-base">
        <span className="hidden sm:inline">Find a Store</span>
        <span className="hidden sm:inline">|</span>
        <Link href="/help" className="text-black hover:underline">
          Help
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/joinus" className="text-black hover:underline">
          Join us
        </Link>
        <span className="hidden sm:inline">|</span>
        
        {/* Authentication Section */}
        <SignedOut>
          <SignInButton>
            <Link href="" className="text-black hover:underline">
              Sign In
            </Link>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;