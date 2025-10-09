// src/component/Signup.jsx
import React from "react";
import createAccountOffice from "../assets/img/create-account-office.jpeg";
import createAccountOfficeDark from "../assets/img/create-account-office-dark.jpeg";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl bg-gray-900 text-white">
        
        {/* Left Image */}
        <div className="md:w-1/2 h-60 md:h-auto relative transform transition duration-700 hover:scale-105">
          <img
            aria-hidden="true"
            src={createAccountOffice}
            alt="Office"
            className="object-cover w-full h-full rounded-l-xl dark:hidden"
          />
          <img
            aria-hidden="true"
            src={createAccountOfficeDark}
            alt="Office Dark"
            className="hidden object-cover w-full h-full rounded-l-xl dark:block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent rounded-l-xl"></div>
          <div className="absolute bottom-6 left-6">
            <h2 className="text-3xl font-bold">Join Us</h2>
            <p className="text-gray-300 mt-2 text-sm">Create your automotive staff account</p>
          </div>
        </div>

        {/* Right Form */}
        <main className="md:w-1/2 flex items-center justify-center p-6 sm:p-12 transform transition duration-700 hover:scale-105">
          <div className="w-full">
            <h1 className="mb-6 text-3xl font-bold text-emerald-400">Create Account</h1>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Admin"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mt-4">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mt-4">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="***************"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mt-4">Staff Role</label>
                <select
                  name="role"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                  defaultValue=""
                >
                  <option value="" hidden>Staff role</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Accountant">Accountant</option>
                </select>
              </div>

              {/* Privacy Policy */}
              <div className="mt-4">
                <label className="inline-flex items-center text-sm text-gray-300">
                  <input
                    type="checkbox"
                    className="form-checkbox text-emerald-600 rounded focus:outline-none"
                  />
                  <span className="ml-2">I agree to the <span className="underline">privacy policy</span></span>
                </label>
              </div>

              {/* Create account button */}
              <button
                type="submit"
                className="w-full mt-4 h-12 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 active:bg-emerald-700 transition-all shadow-lg"
              >
                Create Account
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 space-y-2">
              <button
                disabled
                className="w-full h-12 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition shadow-md disabled:opacity-50"
              >
                {/* Facebook Icon */}
                Login With Facebook
              </button>
              <button
                disabled
                className="w-full h-12 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition shadow-md disabled:opacity-50"
              >
                {/* Google Icon */}
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.159 6.856v2.744h4.537c-0.184 1.178-1.372 3.45-4.537 3.45-2.731 0-4.959-2.262-4.959-5.05s2.228-5.05 4.959-5.05c1.553 0 2.594 0.663 3.188 1.234l2.172-2.091c-1.394-1.306-3.2-2.094-5.359-2.094-4.422 0-8 3.578-8 8s3.578 8 8 8c4.616 0 7.681-3.247 7.681-7.816 0-0.525-0.056-0.925-0.125-1.325l-7.556-0.003z"></path>
                </svg>
                Login With Google
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-300">
              <a
                href="/login"
                className="text-emerald-400 hover:underline"
              >
                Already have an account? Login
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Signup;
