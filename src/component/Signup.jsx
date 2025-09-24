// src/component/Signup.jsx
import React from "react";
import createAccountOffice from "../assets/img/create-account-office.jpeg";
import createAccountOfficeDark from "../assets/img/create-account-office-dark.jpeg";

const Signup = () => {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          {/* Left Image */}
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={createAccountOffice}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={createAccountOfficeDark}
              alt="Office Dark"
            />
          </div>

          {/* Right Form */}
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-6 text-2xl font-semibold text-gray-700 ">
                Create account
              </h1>

              <form>
                {/* Name */}
                <label className="block text-sm font-medium text-gray-800 ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Admin"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-100 border border-gray-200 focus:bg-white focus:border-gray-300  dark:text-gray-300 dark:focus:bg-gray-700 dark:focus:border-gray-500 focus:outline-none"
                />

                {/* Email */}
                <label className="block text-sm font-medium text-gray-800  mt-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-100 border border-gray-200 focus:bg-white focus:border-gray-300 dark:text-gray-300 dark:focus:bg-gray-700 dark:focus:border-gray-500 focus:outline-none"
                />

                {/* Password */}
                <label className="block text-sm font-medium text-gray-800 mt-4">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="***************"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-100 border border-gray-200 focus:bg-white focus:border-gray-300 dark:text-gray-300 dark:focus:bg-gray-700 dark:focus:border-gray-500 focus:outline-none"
                />

                {/* Role */}
                <label className="block text-sm font-medium text-gray-800 mt-4">
                  Staff Role
                </label>
                <select
                  name="role"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-100 border border-gray-200 focus:bg-white focus:border-gray-300 dark:focus:border-gray-500 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" hidden>
                    Staff role
                  </option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Accountant">Accountant</option>
                </select>

                {/* Privacy policy */}
                <label className="inline-flex items-center mt-6 text-sm text-gray-800">
                  <input
                    type="checkbox"
                    className="form-checkbox text-emerald-600 rounded focus:outline-none"
                  />
                  <span className="ml-2">
                    I agree to the <span className="underline">privacy policy</span>
                  </span>
                </label>

                {/* Create account button */}
                <button
                  type="submit"
                  className="w-full mt-4 h-12 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 active:bg-emerald-600 focus:outline-none"
                >
                  Create account
                </button>
              </form>

              <hr className="my-10" />

              {/* Social login buttons (disabled) */}
              <button
                disabled
                className="w-full h-12 mb-2 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-blue-600 hover:text-white"
              >
                {/* Facebook Icon */}
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path>
                </svg>
                Login With Facebook
              </button>

              <button
                disabled
                className="w-full h-12 mb-2 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-red-500 hover:text-white"
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

              <p className="mt-4">
                <a
                  href="/login"
                  className="text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:underline"
                >
                  Already have an account? Login
                </a>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signup;
