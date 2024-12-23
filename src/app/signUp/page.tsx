import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Banner Image */}
      <div className="flex justify-center mt-4 mb-6">
        <Image
          className="max-w-full h-auto"
          src="/signIn.png"
          alt="shoes banner"
          width={450}
          height={200}
        />
      </div>

      {/* Sign In Form */}
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
          
          {/* Keep Me Signed In & Forgot Password */}
          <div className="flex justify-between items-center text-sm mt-4 mb-4">
            <label className="inline-flex items-center text-gray-500">
              <input className="mr-2" type="checkbox" />
              Keep me signed in
            </label>
            <span className="text-gray-400 cursor-pointer">Forgotten password?</span>
          </div>

          {/* Privacy Policy */}
          <p className="text-gray-600 text-center text-sm mb-4">
            By logging in, you agree to Nike's{' '}
            <span className="underline text-gray-500">Privacy Policy and Terms of Use</span>.
          </p>

          {/* Sign In Button */}
          <div className="flex justify-center mb-4">
            <button className="w-full bg-black text-white py-3 rounded-lg">
              Sign In
            </button>
          </div>

          {/* Not a Member? */}
          <div className="flex justify-center items-center">
            <span className="text-gray-500 text-sm">
              Not a member?
              <Link href="/join">
                <span className="text-black underline pl-1">Join Us.</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
