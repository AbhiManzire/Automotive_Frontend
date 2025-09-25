import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCar, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
// import logo from "./logo.png";
import logo2 from "./logo2.png";

import { Sider } from './Sider';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value !== "MY ACCOUNT") {
      navigate(value);
    }
  };

  const goToWishlist = () => navigate("/mywishlist");
  const goToCart = () => navigate("/cart");
  const goToHomePage = () => navigate("/");
  const goToLoginPage = () => navigate("/login");
  const goToCreateAcc = () => navigate("/signup");
  const isLoggedIn = !!localStorage.getItem("token"); // or your auth flag


  const isHomePage = location.pathname === "/";

  return (
    <div className="w-full bg-white shadow-md px-6 relative">
      <div className="flex justify-between items-center">

        {/* Left: Logo + Search */}
        <div className="flex items-center gap-6">
          <img
            onClick={goToHomePage}
            src={logo2}
            alt="Boodmo Logo"
            className="h-18 w-[150px] cursor-pointer"
          />
          <div className="flex bg-gray-100 rounded-lg overflow-hidden shadow-sm text-sm w-[300px] md:w-[400px]">
            <input
              type="text"
              placeholder='Search: "Maruti Alto Oil Filter"'
              className="flex-1 px-4 py-3 md:py-3 text-gray-700 text-base md:text-lg outline-none"
            />
            <button className="bg-sky-500 text-white px-5 flex items-center justify-center">
              <FaSearch className="text-lg md:text-xl" />
            </button>
          </div>

        </div>

        {/* Right: Links & Buttons */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">

          {/* <Link
            to="/garage"
            className="hover:text-gray-700 text-blue-950 flex items-center font-bold gap-1"
          >
            <FaCar className="text-sky-500" /> MY GARAGE
          </Link> */}

          {/* <div className="flex items-center gap-1">
            <MdAccountCircle className="text-sky-500 text-xl" />
            <select
              onChange={handleSelectChange}
              className="font-bold text-sm px-3 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="MY ACCOUNT">MY ACCOUNT</option>
              <option value="/myprofile">MY PROFILE</option>
              <option value="/myorder">MY ORDER</option>
              <option value="/document">DOCUMENT</option>
              <option value="/company_gst">COMPANY/GST</option>
              <option value="/addresses">ADDRESSES</option>
              <option value="/mywishlist">MY WISHLIST</option>
            </select>
          </div> */}

          <button onClick={goToWishlist} className="hover:text-blue-700 hover:scale-110">
            <FaHeart className="text-blue-900 text-xl" />
          </button>

          <button onClick={goToCart} className="hover:text-blue-700 hover:scale-110">
            <FaShoppingCart className="text-blue-900 text-xl" />
          </button>

          {/* Three lines menu button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hover:text-blue-700 text-2xl hover:scale-110"
          >
            <IoReorderThreeOutline className="text-blue-900" />
          </button>
          {isHomePage && (
            <button
              onClick={goToLoginPage}
              className="border-solid bg-blue-400 text-white px-5 py-2 rounded hover:bg-green-500"
            >
              Login
            </button>
          )}

          {isHomePage && (
            <button
              onClick={goToCreateAcc}
              className="border-solid bg-blue-400 text-white px-5 py-2 rounded hover:bg-green-500 "
            >
              Register
            </button>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <Sider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default Header;