import Image from 'next/image'
import React from 'react'

const Help = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* FORM SECTION */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold uppercase mb-4">Get Help</h1>

        {/* Search Bar */}
        <div className="mx-auto flex max-w-md items-center">
          <input
            className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-black"
            type="text"
            placeholder="What can we help you with?"
          />
          <button className="ml-2 px-3 py-2 text-gray-400">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_20)">
                <path
                  d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                  stroke="#111111"
                  strokeWidth="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_20">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      {/* CONTENT SECTION: Use flex-col on small screens and flex-row on large */}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* FAQS TEXT */}
        <div className="w-full lg:w-2/3 faqs px-2 sm:px-5 lg:px-10">
          <h2 className="text-2xl font-semibold uppercase mb-4">
            What payment options can I use on Nike orders?
          </h2>
          <p className="mb-6 leading-relaxed">
            We want to make buying your favourite Nike shoes and gear online fast and easy,
            and we accept the following payment options:
          </p>

          <div className="px-4 sm:px-8 mb-6 space-y-4 leading-relaxed">
            <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
            <p>
              If you enter your PAN information at checkout, you’ll be able to pay for your order 
              with PayTM or a local credit or debit card.
            </p>
            <p>Apple Pay</p>
          </div>

          <p className="mb-4 leading-relaxed">
            <span className="underline font-semibold">Nike Members</span> can store multiple 
            debit or credit cards in their profile for faster checkout. If you’re not 
            already a Member, <span className="underline font-semibold">join us</span> today.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button className="btn">JOIN US</button>
            <button className="btn">SHOP NIKE</button>
          </div>

          {/* FAQS SECTION */}
          <div className="my-4 py-4">
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>

            <div className="mb-6 leading-relaxed">
              <p className="font-semibold">Does my card need international purchases enabled?</p>
              <p>
                Yes, we recommend asking your bank to enable international purchases on your card. 
                You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p className="mt-2">
                Please note, some banks may charge a small transaction fee for international orders.
              </p>
            </div>

            <div className="mb-6 leading-relaxed">
              <p className="font-semibold">Can I pay for my order with multiple methods?</p>
              <p>No, payment for Nike orders can’t be split between multiple payment methods.</p>
            </div>

            <div className="mb-6 leading-relaxed">
              <p className="font-semibold">What payment method is accepted for SNKRS orders?</p>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>

            <div className="mb-6 leading-relaxed">
              <p className="font-semibold">Why don’t I see Apple Pay as an option?</p>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a 
                compatible Apple device running the latest OS, be signed in to your iCloud account 
                and have a supported card in your Wallet. Additionally, you’ll need to use Safari 
                to use Apple Pay on Nike.com.
              </p>
            </div>

            <div className="mb-4">
              <p>Was this answer helpful?</p>
              {/* You could add thumbs-up/down icons here */}
            </div>

            <div className="mb-4 text-gray-500">
              <p className="font-semibold">RELATED</p>
            </div>

            <div className="underline font-semibold px-4 sm:px-0 space-y-2">
              <p>WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
              <p>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION (hidden on smaller screens, shown on lg and above) */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex justify-center lg:justify-end">
          {/* We only hide it on small screens if we truly want to keep it hidden, 
              otherwise we can just let it wrap below. */}
          <div className="hidden lg:block">
            <Image
              src="/faqs.png"
              alt="FAQs Banner"
              width={250}
              height={1000}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
