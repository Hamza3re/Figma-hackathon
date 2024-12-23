import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Join = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Banner Image */}
      <div className="flex justify-center mb-6">
        <Image
          className="max-w-full h-auto"
          src="/join.png"
          alt="shoes banner"
          width={450}
          height={200}
        />
      </div>

      {/* Form Wrapper */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {/* Email */}
          <input
            className="w-full px-5 py-2 my-2 border border-gray-300 focus:outline-none focus:border-black"
            type="email"
            placeholder="Email Address"
          />

          {/* Password */}
          <input
            className="w-full px-5 py-2 my-2 border border-gray-300 focus:outline-none focus:border-black"
            type="password"
            placeholder="Password"
          />

          {/* First Name */}
          <input
            className="w-full px-5 py-2 my-2 border border-gray-300 focus:outline-none focus:border-black"
            type="text"
            placeholder="First Name"
          />

          {/* Last Name */}
          <input
            className="w-full px-5 py-2 my-2 border border-gray-300 focus:outline-none focus:border-black"
            type="text"
            placeholder="Last Name"
          />

          {/* Date of Birth */}
          <input
            className="w-full px-5 py-2 my-2 border border-gray-300 focus:outline-none focus:border-black"
            type="date"
            placeholder="Date of Birth"
          />
          <span className="text-sm text-gray-500 pl-1">
            Get a Nike Member Reward every year on your Birthday.
          </span>

          {/* Country with Icon */}
          <div className="relative my-2">
            <input
              className="w-full px-5 py-2 border border-gray-300 focus:outline-none focus:border-black"
              type="text"
              placeholder="India"
            />
            <div className="absolute top-2 right-3 text-gray-500">
              <ChevronDown />
            </div>
          </div>

          {/* Gender Fields */}
          <div className="grid grid-cols-2 gap-4 my-4">
            <input
              className="px-5 py-2 border border-gray-300 focus:outline-none focus:border-black"
              type="text"
              placeholder="Male"
            />
            <input
              className="px-5 py-2 border border-gray-300 focus:outline-none focus:border-black"
              type="text"
              placeholder="Female"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start py-4">
            <input
              className="mt-1"
              type="checkbox"
              id="marketing"
            />
            <label htmlFor="marketing" className="ml-2 text-gray-500">
              Sign up for emails to get updates from Nike on
              products, offers and your Member benefits
            </label>
          </div>

          {/* Terms of Use */}
          <p className="text-gray-600 text-center text-sm mb-6">
            By Creating an Account, you agree to Nike's{' '}
            <span className="text-gray-500 underline">Privacy Policy and Terms of Use</span>.
          </p>

          {/* Submit Button */}
          <div className="flex justify-center mb-4">
            <button className="w-full bg-black text-white py-3 text-lg rounded-lg">
              Join Us
            </button>
          </div>

          {/* Already a Member */}
          <div className="flex justify-center items-center">
            <span className="text-gray-500 text-sm">
              Already a member?
              <Link href="/signUp">
                <span className="text-black underline pl-1">Sign In.</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join



        </div>
    )
}

export default Join
