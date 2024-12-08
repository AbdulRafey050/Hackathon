import Image from "next/image";
export default function Footer() {
    return (
      <footer className="bg-black text-white py-6 relative">

        <div className="absolute top-4 right-4 flex space-x-4">
          <a href="#" aria-label="Twitter" className="hover:opacity-75">
            <img src="/n1.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:opacity-75">
            <img src="/n2.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-75">
            <img src="/n3.png" alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-75">
            <img src="/n4.png" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">

          <div>
            <h3 className="font-bold mb-4">FIND A STORE</h3>
            <ul className="space-y-2">
              <li>BECOME A MEMBER</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>Send Us Feedback</li>
              <li>STUDENT DISCOUNTS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">GET HELP</h3>
            <ul className="space-y-2">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div className="flex items-center justify-start sm:justify-end space-x-4 mt-4 sm:mt-0">
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-gray-400">
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p>India © 2023 Nike, Inc. All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white">
                Guides
              </a>
              <a href="#" className="hover:text-white">
                Terms of Sale
              </a>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white">
                Nike Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  