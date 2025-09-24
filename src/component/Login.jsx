// src/pages/Login.jsx
import React from "react";
import loginOffice from "../assets/img/login-office.jpeg";
import loginOfficeDark from "../assets/img/login-office-dark.jpeg";

const Login = () => {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-white">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          {/* Left Image */}
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={loginOffice}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={loginOfficeDark}
              alt="Office Dark"
            />
          </div>

          {/* Right Form */}
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-6 text-2xl font-semibold text-gray-700">
                Login
              </h1>

              <form>
                {/* Email */}
                <label className="block text-sm font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  autoComplete="username"
                  defaultValue="admin@gmail.com"
                  className="block w-full h-12 border px-3 py-2 mt-1 text-sm rounded-md bg-gray-100 focus:bg-white border-gray-200 dark:border-gray-600 focus:border-gray-300 dark:focus:border-gray-500 focus:outline-none"
                />

                {/* Password */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-800">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="***************"
                    defaultValue="12345678"
                    className="block w-full h-12 border px-3 py-2 mt-1 text-sm rounded-md bg-gray-100 focus:bg-white border-gray-200 dark:border-gray-600 focus:border-gray-300 dark:focus:border-gray-500 focus:outline-none"
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full h-12 mt-4 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 active:bg-emerald-600 focus:outline-none"
                >
                  Login
                </button>

                <hr className="my-10" />

                {/* Facebook Login */}
                <button
                  disabled
                  className="w-full h-12 mb-2 flex items-center justify-center text-sm font-semibold text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  {/* SVG icon here */}
                  Login With Facebook
                </button>

                {/* Google Login */}
                <button
                  disabled
                  className="w-full h-12 flex items-center justify-center text-sm font-semibold text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-red-500 hover:text-white transition duration-300"
                >
                  {/* SVG icon here */}
                  Login With Google
                </button>
              </form>

              {/* Links */}
              <p className="mt-4">
                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-emerald-500 hover:underline"
                >
                  Forgot your password
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="/signup"
                  className="text-sm font-medium text-emerald-500 hover:underline"
                >
                  Create account
                </a>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
