import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCar, FaHeart, FaShoppingCart, FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import logo2 from "./logo2.png";
import { Sider } from './Sider';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerPN, setHeaderPN] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value !== "MY ACCOUNT") navigate(value);
  };

  const goToWishlist = () => navigate("/mywishlist");
  const goToCart = () => navigate("/cart");
  const goToHomePage = () => navigate("/");
  const goToLoginPage = () => navigate("/login");
  const goToCreateAcc = () => navigate("/signup");
  const goToVendor = () => navigate("/vendor");

  const isLoggedIn = !!localStorage.getItem("token");
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-full ">

      {/* ===== TOPBAR START ===== */}
      <div className="border-b bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">

            {/* Left info links */}
            <ul className="hidden lg:flex space-x-4 text-gray-600 text-sm">
              <li><Link to="/shop" className="hover:text-red-500">STORES</Link></li>
              <li><Link to="/cart" className="hover:text-red-500">DELIVERY</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-red-500">GUARANTEE</Link></li>
              <li className="flex items-center gap-1">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.368 9.104C7.26133 9.17867 7.13867 9.216 7 9.216C6.86133 9.216 6.744 9.17867 6.648 9.104L0.36 4.624C0.264 4.56 0.178667 4.54933 0.104 4.592C0.04 4.624 0.008 4.69867 0.008 4.816V11.984C0.008 12.112 0.0506667 12.2187 0.136 12.304C0.221333 12.3893 0.322667 12.432 0.44 12.432H13.56C13.6773 12.432 13.7787 12.3893 13.864 12.304C13.96 12.2187 14.008 12.112 14.008 11.984V4.816C14.008 4.69867 13.9707 4.624 13.896 4.592C13.8213 4.54933 13.736 4.56 13.64 4.624L7.368 9.104ZM6.76 8.32C6.84533 8.37333 6.92533 8.4 7 8.4C7.08533 8.4 7.16533 8.37333 7.24 8.32L12.52 4.56C12.6373 4.464 12.696 4.352 12.696 4.224V0.783999C12.696 0.666666 12.6533 0.570666 12.568 0.495999C12.4933 0.410666 12.3973 0.367999 12.28 0.367999H1.72C1.60267 0.367999 1.50667 0.410666 1.432 0.495999C1.35733 0.570666 1.32 0.666666 1.32 0.783999V4.224C1.32 4.37333 1.37333 4.48533 1.48 4.56L6.76 8.32Z" fill="#FF2D37" />
                </svg>
                <a href="mailto:info@example.com" className="hover:text-red-500">info@example.com</a>
              </li>
            </ul>

            {/* Social links */}
            <ul className="flex items-center space-x-4">
              {/* Social Icons */}
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 shadow-md"
                >
                  <FaPinterest />
                </a>
              </li>

              {/* Login/Register Buttons */}
              <li className="flex items-center space-x-2">
                <button
                  onClick={goToLoginPage}
                  className="px-3 py-2  text-gray-900  hover:text-red-700 transition-all duration-300 "
                >
                  Login
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={goToCreateAcc}
                  className="px-3 py-2  text-gray-900  hover:text-red-700 transition-all duration-300"
                >
                  Register
                </button>
              </li>
            </ul>


          </div>
        </div>
      </div>
      {/* ===== TOPBAR END ===== */}


      {/* ===== MAIN HEADER START ===== */}
      <div className="w-full bg-white shadow-md px-6 relative">
        <div className="flex justify-between items-center py-3">

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
                placeholder='Search by part number (PN)'
                className="flex-1 px-4 py-3 md:py-3 text-gray-700 border border-gray-200 text-base md:text-lg outline-none"
                value={headerPN}
                onChange={(e) => setHeaderPN(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const pn = headerPN.trim();
                    if (!pn) return;
                    const search = encodeURIComponent(pn);
                    const backUrl = `${window.location.origin}/search/`;
                    const url = `https://oriparts.com/?search=${search}&back_url_pn=${encodeURIComponent(backUrl)}{pn}`;
                    window.open(url, '_blank', 'noopener');
                  }
                }}
              />
              <button
                onClick={() => {
                  const pn = headerPN.trim();
                  if (!pn) return;
                  const search = encodeURIComponent(pn);
                  const backUrl = `${window.location.origin}/search/`;
                  const url = `https://oriparts.com/?search=${search}&back_url_pn=${encodeURIComponent(backUrl)}{pn}`;
                  window.open(url, '_blank', 'noopener');
                }}
                className="bg-red-500 text-white px-5 flex items-center justify-center"
              >
                <FaSearch className="text-lg md:text-xl" />
              </button>
            </div>
          </div>

          {/* Right: Links & Buttons */}
          <div className="flex items-center gap-6 text-gray-700 font-medium">
            {!isHomePage && (
              <>
                <Link to="/garage" className="hover:text-gray-700 text-blue-950 flex items-center font-bold gap-1">
                  <FaCar className="text-sky-500" /> MY GARAGE
                </Link>

                <div className="flex items-center gap-1">
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
                </div>
              </>
            )}

            <button className=" text-gray-800 text-base font-bold px-2 py-2 flex items-center justify-center">
              <Link to="/category">CATEGORY</Link>
            </button>
            <button onClick={goToWishlist} className="hover:text-blue-700 hover:scale-110">
              <FaHeart className="text-blue-900 text-xl" />
            </button>

            <button onClick={goToCart} className="hover:text-blue-700 hover:scale-110">
              <FaShoppingCart className="text-blue-900 text-xl" />
            </button>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="hover:text-blue-700 text-2xl hover:scale-110"
            >
              <IoReorderThreeOutline className="text-blue-900" />
            </button>

            {isHomePage && (
              <>
                {/* <button onClick={goToVendor} className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">Become A Vendor</button> */}
              </>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <Sider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
      {/* ===== MAIN HEADER END ===== */}
    </div>
  );
};

export default Header;
