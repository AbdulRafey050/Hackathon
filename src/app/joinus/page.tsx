import React from "react";
import Image from "next/image";
import logo from "../../../public/logo3.png"; 

export default function JoinUs() {
  return (
    <div className="bg-white flex justify-center items-center pt-16 min-h-screen">
      <div className="w-[344px] text-center">
        {/* Nike Logo */}
        <div className="h-8 mb-6 flex justify-center items-center">
          <Image
            src={logo}// Use the correct path to your logo
            alt="Nike Logo"
            width={500}
            height={232}
            priority
          />
        </div>

        <h1 className="font-bold text-lg mb-4">BECOME A NIKE MEMBER</h1>
        <p className="text-sm text-gray-600 mb-6">
          Create your Nike Member profile and get <br /> first access to the very best
          of Nike <br /> products, inspiration and community.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded">
            <option value="India">India</option>
            {/* Add other country options as needed */}
          </select>

          {/* Gender Selection */}
          <div className="flex space-x-2">
            <button
              type="button"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-black"
            >
              Male
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-black"
            >
              Female
            </button>
          </div>

          {/* Email Updates Checkbox */}
          <div className="flex items-start space-x-2 mt-2">
            <input
              type="checkbox"
              className="w-4 h-4 mt-1 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </label>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs text-gray-600 text-left mt-4">
            By creating an account, you agree to Nike{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Terms of Use
            </a>
            .
          </p>

          {/* Submit Button */}
          <button className="w-full py-2 bg-black text-white rounded font-bold mt-4">
            JOIN US
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-4 py-7">
          Already a Member?{" "}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}