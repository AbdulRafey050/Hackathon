import Image from 'next/image';
import logo from '../../../public/logo2.png'; 

export default function Login() {
  return (
    <div className=" flex flex-col">
      
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-8 rounded-lg w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <Image src={logo} alt="Logo" width={80} height={80} />
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-bold mb-4">
            YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
          </h2>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="mt-[5px] block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox text-black focus:ring-black"
                />
                <span className="ml-2">Keep me signed in</span>
              </label>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black"
              >
                Forgotten your password?
              </a>
            </div>

            {/* Agreement Section */}
            <p className="text-xs text-center text-gray-600 mb-6 ">
              By logging in, you agree to Nike{" "}
              <a href="#" className="text-black font-medium hover:underline">
                Privacy Policy
              </a>{" "}
              <br />
              and{" "}
              <a href="#" className="text-black font-medium hover:underline">
                Terms of Use
              </a>.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-sm hover:bg-gray-800 transition"
            >
              SIGN IN
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Not a Member?{' '}
            <a href="#" className="text-black font-medium hover:underline">
              Join Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}