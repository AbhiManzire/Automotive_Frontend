import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaCar,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import logo2 from "./logo2.png";
import { Sider } from "./Sider";

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

  const isHomePage = location.pathname === "/";

  const handleSearch = () => {
    const pn = headerPN.trim();
    if (!pn) return;
    const search = encodeURIComponent(pn);
    const backUrl = `${window.location.origin}/search/`;
    const url = `https://oriparts.com/?search=${search}&back_url_pn=${encodeURIComponent(backUrl)}${pn}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* ===== TOPBAR START ===== */}
      <div className="border-b bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 gap-2">
            {/* Left info links (hidden on small screens) */}
            <ul className="hidden lg:flex space-x-4 text-gray-600 text-sm">
              <li>
                <Link to="/shop" className="hover:text-red-500">
                  STORES
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-red-500">
                  DELIVERY
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-red-500">
                  GUARANTEE
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.368 9.104C7.26133 9.17867 7.13867 9.216 7 9.216C6.86133 9.216 6.744 9.17867 6.648 9.104L0.36 4.624C0.264 4.56 0.178667 4.54933 0.104 4.592C0.04 4.624 0.008 4.69867 0.008 4.816V11.984C0.008 12.112 0.0506667 12.2187 0.136 12.304C0.221333 12.3893 0.322667 12.432 0.44 12.432H13.56C13.6773 12.432 13.7787 12.3893 13.864 12.304C13.96 12.2187 14.008 12.112 14.008 11.984V4.816C14.008 4.69867 13.9707 4.624 13.896 4.592C13.8213 4.54933 13.736 4.56 13.64 4.624L7.368 9.104Z"
                    fill="#FF2D37"
                  />
                </svg>
                <a href="mailto:info@example.com" className="hover:text-red-500">
                  info@example.com
                </a>
              </li>
            </ul>

            {/* Social & Login Section */}
            <ul className="flex items-center gap-3 sm:gap-4 text-sm">
              <li className="hidden sm:flex gap-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-200 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-200 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-200 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-200 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-200 rounded-full text-red-400 hover:bg-red-400 hover:text-white transition"
                >
                  <FaPinterest />
                </a>
              </li>

              <li className="flex items-center gap-2">
                <button
                  onClick={goToLoginPage}
                  className="text-gray-700 hover:text-red-600"
                >
                  Login
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={goToCreateAcc}
                  className="text-gray-700 hover:text-red-600"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-3 gap-3">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-4 flex-1 min-w-[200px]">
            <img
              onClick={goToHomePage}
              src={logo2}
              alt="Logo"
              className="h-14 w-auto cursor-pointer"
            />

            {/* Search Bar */}
            <div className="hidden sm:flex bg-gray-100 rounded-lg overflow-hidden shadow-sm w-full max-w-md">
              <input
                type="text"
                placeholder="Search by part number (PN)"
                className="flex-1 px-3 py-2 text-gray-700 text-sm md:text-base outline-none border-none bg-transparent"
                value={headerPN}
                onChange={(e) => setHeaderPN(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="bg-red-500 text-white px-4 flex items-center justify-center hover:bg-red-600"
              >
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {!isHomePage && (
              <>
                <Link
                  to="/garage"
                  className="hidden sm:flex items-center gap-1 font-semibold text-gray-700 hover:text-blue-700"
                >
                  <FaCar className="text-sky-500" /> MY GARAGE
                </Link>

                <div className="hidden md:flex items-center gap-1">
                  <MdAccountCircle className="text-sky-500 text-xl" />
                  <select
                    onChange={handleSelectChange}
                    className="text-sm border-gray-300 rounded px-2 py-1 focus:ring focus:ring-blue-300"
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

            <Link
              to="/category"
              className="font-semibold hover:text-red-600 hidden sm:block"
            >
              CATEGORY
            </Link>

            <button
              onClick={goToWishlist}
              className="hover:scale-110 transition-transform"
            >
              <FaHeart className="text-blue-900 text-xl" />
            </button>

            <button
              onClick={goToCart}
              className="hover:scale-110 transition-transform"
            >
              <FaShoppingCart className="text-blue-900 text-xl" />
            </button>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-2xl text-blue-900 hover:scale-110 transition-transform"
            >
              <IoReorderThreeOutline />
            </button>
          </div>
        </div>

        {/* Search bar on mobile */}
        <div className="flex sm:hidden bg-gray-100 rounded-lg overflow-hidden mb-2">
          <input
            type="text"
            placeholder="Search by part number"
            className="flex-1 px-3 py-2 text-sm text-gray-700 bg-transparent outline-none"
            value={headerPN}
            onChange={(e) => setHeaderPN(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-red-500 text-white px-3 flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>

        {/* Sidebar */}
        <Sider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
