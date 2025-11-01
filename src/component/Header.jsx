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
  const [selectedCategory, setSelectedCategory] = useState("0");

  const handleSelectChange = (e) => {
    const href = e.target.selectedOptions[0].getAttribute("data-href");
    setSelectedCategory(e.target.value);
    if (href && href !== "0") {
      navigate(href);
    }
  };

  const goToWishlist = () => navigate("/mywishlist");
  const goToCart = () => navigate("/cart");
  const goToHomePage = () => navigate("/");
  const goToLoginPage = () => navigate("/login");
  const goToCreateAcc = () => navigate("/signup");

  const handleSearch = () => {
    const pn = headerPN.trim();
    if (!pn) return;
    const search = encodeURIComponent(pn);
    const backUrl = `${window.location.origin}/search/`;
    const url = `https://oriparts.com/?search=${search}&back_url_pn=${encodeURIComponent(
      backUrl
    )}${pn}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <header className="w-full bg-white shadow-sm">

      {/* ===== TOPBAR ===== */}
      <div className="border-b bg-gray-100 text-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 gap-2">
            <ul className="hidden lg:flex space-x-5 text-sm">
              <li><Link to="/shop" className="hover:text-red-500">STORES</Link></li>
              <li><Link to="/cart" className="hover:text-red-500">DELIVERY</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-red-500">GUARANTEE</Link></li>
              <li className="flex items-center gap-1">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Social & Auth */}
            <ul className="flex items-center gap-3 sm:gap-4 text-sm">
              <li className="hidden sm:flex gap-2">
                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </li>
              <li className="flex items-center gap-2">
                <button
                  onClick={goToLoginPage}
                  className="hover:text-red-600"
                >
                  Login
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={goToCreateAcc}
                  className="hover:text-red-600"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            onClick={goToHomePage}
            src={logo2}
            alt="Logo"
            className="h-14 w-auto cursor-pointer"
          />
        </div>

        {/* Search Bar with Category */}
        <div className="flex items-center bg-gray-100 rounded-lg shadow-md overflow-hidden flex-1 max-w-md">
          <select
            className="px-3 py-3 bg-gray-200 text-gray-700 text-sm outline-none border-r border-gray-300 cursor-pointer"
            value={selectedCategory}
            onChange={handleSelectChange}
          >
            <option value="0" >All Categories</option>
            <option value="1" data-href="/catalog/air_conditioning/">Air Conditioning</option>
            <option value="2" data-href="/catalog/bearings/">Bearings</option>
            <option value="3" data-href="/catalog/drive_belts/">Belts Chains And Rollers</option>
            <option value="4" data-href="/catalog/body/">Body</option>
            <option value="5" data-href="/catalog/brakes/">Brake System</option>
            <option value="6" data-href="/catalog/car_accessories/">Car Accessories</option>
            <option value="7" data-href="/catalog/clutch/">Clutch System</option>
            <option value="8" data-href="/catalog/control_cables/">Control Cables</option>
            <option value="9" data-href="/catalog/electric_components/">Electrical Components</option>
            <option value="10" data-href="/catalog/engine/">Engine</option>
            <option value="11" data-href="/catalog/cooling_system/">Engine Cooling System</option>
            <option value="12" data-href="/catalog/exhaust/">Exhaust System</option>
            <option value="13" data-href="/catalog/filters/">Filters</option>
            <option value="14" data-href="/catalog/fuelsystem/">Fuel Supply System</option>
            <option value="15" data-href="/catalog/Gasket_SealingRings/">Gaskets & Seals</option>
            <option value="16" data-href="/catalog/interior_comfort/">Interior and Comfort</option>
            <option value="17" data-href="/catalog/lighting/">Lighting</option>
            <option value="18" data-href="/catalog/maintenance_service_parts/">Maintenance Service Parts</option>
            <option value="19" data-href="/catalog/oilsfluids/">Oils and Fluids</option>
            <option value="20" data-href="/catalog/pipes_hoses/">Pipes & Hoses</option>
            <option value="21" data-href="/catalog/sensors_control_units/">Sensors Relays and Control Units</option>
            <option value="22" data-href="/catalog/steering/">Steering</option>
            <option value="23" data-href="/catalog/suspension/">Suspension and Arms</option>
            <option value="24" data-href="/catalog/towbar/">Towbar Parts</option>
            <option value="25" data-href="/catalog/transmission/">Transmission</option>
            <option value="26" data-href="/catalog/trims/">Trims</option>
            <option value="27" data-href="/catalog/universal/">Universal</option>
            <option value="28" data-href="/catalog/wheels/">Wheels</option>
            <option value="29" data-href="/catalog/windscreen_cleaning_system/">Windscreen Cleaning System</option>
          </select>

          <input
            type="text"
            placeholder="Search by number plate..."
            className="flex-1 px-3 py-3 bg-transparent text-gray-700 text-sm focus:outline-none"
            value={headerPN}
            onChange={(e) => setHeaderPN(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-red-500 text-white px-4 py-3 hover:bg-red-600 transition flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>

        {/* Wishlist & Cart */}
        <div className="flex items-center gap-4">
          <button
            onClick={goToWishlist}
            className="relative hover:scale-110 transition-transform"
          >
            <FaHeart className="text-blue-900 text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </button>

          <div className="relative">
            <button
              onClick={goToCart}
              className="hover:scale-110 transition-transform relative"
            >
              <FaShoppingCart className="text-blue-900 text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </button>

            {/* Cart dropdown (hidden by default) */}
            <div className="absolute right-0 mt-3 bg-white rounded-lg shadow-lg w-80 hidden group-hover:block border">
              <div className="p-3">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="w-16 p-2">
                        <img
                          src="https://via.placeholder.com/60"
                          alt="item1"
                          className="rounded"
                        />
                      </td>
                      <td className="text-gray-700">Item Name</td>
                      <td className="text-gray-500">x1</td>
                      <td className="text-gray-700 font-semibold">$80</td>
                    </tr>
                    <tr>
                      <td className="w-16 p-2">
                        <img
                          src="https://via.placeholder.com/60"
                          alt="item2"
                          className="rounded"
                        />
                      </td>
                      <td className="text-gray-700">Another Item</td>
                      <td className="text-gray-500">x1</td>
                      <td className="text-gray-700 font-semibold">$60</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-3 border-t pt-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Total:</span>
                    <span className="font-semibold text-gray-800">$140</span>
                  </div>
                  <div className="mt-3 flex justify-between gap-2">
                    <Link
                      to="/cart"
                      className="bg-gray-200 text-sm px-3 py-1 rounded hover:bg-gray-300"
                    >
                      View Cart
                    </Link>
                    <Link
                      to="/checkout"
                      className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-3xl text-blue-900 hover:scale-110 transition-transform"
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Sider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
