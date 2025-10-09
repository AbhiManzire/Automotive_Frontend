// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import loginOffice from "../assets/img/login-office.jpeg";
import loginOfficeDark from "../assets/img/login-office-dark.jpeg";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("superadmin");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter all fields");
      return;
    }

    // Example role-based navigation
    const dashboards = {
      superadmin: "/superadmin/dashboard",
      manufacturer: "/manufacturer/dashboard",
      vendor: "/vendor/dashboard",
      mechanic: "/mechanic/dashboard",
    };

    navigate(dashboards[role]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl bg-gray-900 text-white">
        {/* Left Image Section */}
        <div className="md:w-1/2 h-60 md:h-auto relative" data-aos="fade-right">
          <img
            aria-hidden="true"
            src={loginOffice}
            alt="Office"
            className="object-cover w-full h-full rounded-l-xl dark:hidden"
          />
          <img
            aria-hidden="true"
            src={loginOfficeDark}
            alt="Office Dark"
            className="hidden object-cover w-full h-full rounded-l-xl dark:block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent rounded-l-xl"></div>
          <div className="absolute bottom-6 left-6">
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <p className="text-sm text-gray-300 mt-2">Sign in to manage your account</p>
          </div>
        </div>

        {/* Right Form Section */}
        <main className="md:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-gray-900" data-aos="fade-left">
          <div className="w-full">
            <h1 className="mb-6 text-3xl font-bold text-emerald-400">Login</h1>

            {error && <div className="mb-4 text-red-500">{error}</div>}

            <form className="space-y-4" onSubmit={handleLogin}>
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Select Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full h-12 border border-gray-700 bg-gray-800 px-3 py-2 mt-1 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                >
                  <option value="superadmin">Super Admin</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="vendor">Vendor</option>
                  <option value="mechanic">Mechanic</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  className="block w-full h-12 border border-gray-700 bg-gray-800 px-3 py-2 mt-1 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full h-12 border border-gray-700 bg-gray-800 px-3 py-2 mt-1 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-12 mt-4 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 active:bg-emerald-700 transition-all shadow-lg"
              >
                Login
              </button>

              <div className="flex items-center justify-between mt-4">
                <a href="/forgot-password" className="text-sm text-emerald-400 hover:underline">
                  Forgot password?
                </a>
                <a href="/signup" className="text-sm text-emerald-400 hover:underline">
                  Create account
                </a>
              </div>

              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-700" />
                <span className="mx-2 text-gray-500">or</span>
                <hr className="flex-grow border-gray-700" />
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-2">
                <button
                  disabled
                  className="w-full h-12 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition shadow-md disabled:opacity-50"
                >
                  Login With Facebook
                </button>
                <button
                  disabled
                  className="w-full h-12 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition shadow-md disabled:opacity-50"
                >
                  {/* SVG icon here */}
                  Login With Google
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
