import Image from "next/image";

export default function HelpPage() {
    return (
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h2 className="text-xl font-bold uppercase mb-6">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
              <li>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.</li>
              <li>Apple Pay</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member, <a href="#" className="text-blue-600 underline">join us</a> today.
            </p>
            <div className="flex gap-4 mb-12">
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800">
                JOIN US
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800">
                SHOP NIKE
              </button>
            </div>
  
            {/* FAQs Section */}
            <h3 className="text-lg font-bold mb-6">FAQs</h3>
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2">Does my card need international purchases enabled?</p>
              <p className="text-gray-600">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p className="text-gray-600 mt-2">
                Please note, some banks may charge a small transaction fee for international orders.
              </p>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2">Can I pay for my order with multiple methods?</p>
              <p className="text-gray-600">No, payment for Nike orders can not be split between multiple payment methods.</p>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2">What payment method is accepted for SNKRS orders?</p>
              <p className="text-gray-600">You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">Why do not I see Apple Pay as an option?</p>
              <p className="text-gray-600">
                To see Apple Pay as an option in the Nike App or on Nike.com, you will need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you will need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
  
            {/* Feedback Section */}
            <div className="mt-8">
              <p className="font-medium text-gray-700 mb-4">Was this answer helpful?</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gray-200 rounded-full hover:bg-gray-300">
                  👍
                </button>
                <button className="px-6 py-3 bg-gray-200 rounded-full hover:bg-gray-300">
                  👎
                </button>
              </div>
            </div>
  
            {/* Related Links */}
            <div className="mt-10">
              <h4 className="text-gray-700 font-medium mb-4">RELATED</h4>
              <ul className="list-none space-y-2">
                <li>
                  <a href="#" className="text-blue-600 underline">
                    WHAT ARE NIKE DELIVERY OPTIONS?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 underline">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="lg:col-span-1">
            <div className="border-l border-gray-300 pl-6">
              {/* CONTACT US Section */}
              <h3 className="text-lg font-bold mb-6">CONTACT US</h3>
  
              {/* Phone Section */}
              <div className="flex items-center mb-4">
                <Image src="/si1.png" alt="Phone Logo" height={25} width={25} className="w-6 h-6 mr-3" />
                <p className="font-semibold text-gray-800">000 800 919 0566</p>
              </div>
              <p className="text-gray-600 mb-4">Products & Orders: 24 hours a day, 7 days a week</p>
              <p className="text-gray-600 mb-8">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
  
              {/* Support Hours */}
              <div className="flex items-center mb-4">
                <Image src="/si2.png" alt="Clock Logo" height={25} width={25} className="w-6 h-6 mr-3" />
                <p className="font-semibold text-gray-800">24 hours a day</p>
              </div>
              <p className="text-gray-800 mb-8">7 days a week</p>
  
              {/* Email Section */}
              <div className="flex items-center mb-4">
                <Image src="/si3.png" alt="Email Logo" height={25} width={25} className="w-6 h-6 mr-3" />
                <p className="font-semibold text-gray-800">We will reply within</p>
              </div>
              <p className="text-gray-800 mb-8">five business days</p>
  
              {/* Store Locator */}
              <div className="flex items-center mb-4">
                <Image src="/si4.png" alt="Location Logo" height={25} width={25} className="w-6 h-6 mr-3" />
                <p className="font-semibold text-gray-800">STORE LOCATOR</p>
              </div>
              <p className="text-gray-600">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  