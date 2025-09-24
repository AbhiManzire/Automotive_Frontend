// src/pages/ForgotPassword.jsx
import React from "react";
import forgotOffice from "../assets/img/forgot-password-office.jpeg";
import forgotOfficeDark from "../assets/img/forgot-password-office-dark.jpeg";

const ForgotPassword = () => {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          {/* Left Image */}
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={forgotOffice}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={forgotOfficeDark}
              alt="Office Dark"
            />
          </div>

          {/* Right Form */}
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 ">
                Forgot password
              </h1>

              <form>
                <label className="block text-sm font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  name="verifyEmail"
                  placeholder="john@doe.com"
                  className="block w-full h-12 px-3 py-2 mt-1 text-sm rounded-md bg-gray-100 border border-gray-200 focus:bg-white focus:border-gray-300 dark:text-gray-300 dark:border-gray-600 dark:focus:bg-gray-700 dark:focus:border-gray-500 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full mt-4 h-12 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 active:bg-emerald-600 focus:outline-none"
                >
                  Recover password
                </button>
              </form>

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

export default ForgotPassword;
