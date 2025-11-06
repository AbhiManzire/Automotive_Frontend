import React, { useState, useEffect } from "react";
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
  FaChevronDown,
  FaChevronRight,
  FaBars,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTruck,
  FaShieldAlt,
  FaStore,
} from "react-icons/fa";
import { MdAccountCircle, MdCompare, MdLanguage } from "react-icons/md";
import { IoReorderThreeOutline, IoSparkles } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import logo3 from "./logo3.png";
import { Sider } from "./Sider";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerPN, setHeaderPN] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [showVehiclePicker, setShowVehiclePicker] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showDepartmentsMenu, setShowDepartmentsMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data from both components
  const vehicles = [
    { id: '', name: 'All Vehicles' },
    { id: '1', name: '2011 Ford Focus S', details: 'Engine 2.0L 1742DA L4 FI Turbo' },
    { id: '2', name: '2019 Audi Q7 Premium', details: 'Engine 3.0L 5626CC L6 QK' },
    { id: '3', name: '2015 Kia Rio LX', details: 'Engine 1.6L 8306JK L5 RL' }
  ];

  const currencies = ['€ Euro', '£ Pound Sterling', '$ US Dollar', '₽ Russian Ruble'];

  const languages = [
    { name: 'English', flag: '/images/languages/english.png', code: 'EN' },
    { name: 'Russian', flag: '/images/languages/russian.png', code: 'RU' },
    { name: 'French', flag: '/images/languages/french.png', code: 'FR' },
    { name: 'Hindi', flag: '/images/languages/hindi.png', code: 'HI' }
  ];

  const departments = [
    { name: 'Categories', hasSubmenu: true, href: '/category', icon: '📁' },
    { name: 'OEM Catalog', hasSubmenu: true, href: '/catalog', icon: '🔧' },
    { name: 'Car Makers', hasSubmenu: true, href: '/vehicles', icon: '🚗' },
    { name: 'Brands', hasSubmenu: true, href: '/brands', icon: '🏷️' },
    { name: 'Cart', href: '/cart', icon: '🛒' },
    { name: 'Checkout', href: '/checkout', icon: '💳' },
    { name: 'Order Success', href: '/order-success', icon: '✅' },
    { name: 'Wishlist', href: '/mywishlist', icon: '❤️' },
    { name: 'Compare', href: '/compare', icon: '⚖️' },
    { name: 'Track Order', href: '/track-order', icon: '📦' }
  ];

  const categories = [
    { value: "0", label: "All Categories", href: "/category" },
    { value: "1", label: "Air Conditioning", href: "/catalog/air_conditioning/" },
    { value: "2", label: "Bearings", href: "/catalog/bearings/" },
    { value: "3", label: "Belts Chains And Rollers", href: "/catalog/drive_belts/" },
    { value: "4", label: "Body", href: "/catalog/body/" },
    { value: "5", label: "Brake System", href: "/catalog/brakes/" },
    { value: "6", label: "Car Accessories", href: "/catalog/car_accessories/" },
    { value: "7", label: "Clutch System", href: "/catalog/clutch/" },
    { value: "8", label: "Control Cables", href: "/catalog/control_cables/" },
    { value: "9", label: "Electrical Components", href: "/catalog/electric_components/" },
    { value: "10", label: "Engine", href: "/catalog/engine/" },
    { value: "11", label: "Engine Cooling System", href: "/catalog/cooling_system/" },
    { value: "12", label: "Exhaust System", href: "/catalog/exhaust/" },
    { value: "13", label: "Filters", href: "/catalog/filters/" },
    { value: "14", label: "Fuel Supply System", href: "/catalog/fuelsystem/" },
    { value: "15", label: "Gaskets & Seals", href: "/catalog/Gasket_SealingRings/" },
    { value: "16", label: "Interior and Comfort", href: "/catalog/interior_comfort/" },
    { value: "17", label: "Lighting", href: "/catalog/lighting/" },
    { value: "18", label: "Maintenance Service Parts", href: "/catalog/maintenance_service_parts/" },
    { value: "19", label: "Oils and Fluids", href: "/catalog/oilsfluids/" },
    { value: "20", label: "Pipes & Hoses", href: "/catalog/pipes_hoses/" },
    { value: "21", label: "Sensors Relays and Control Units", href: "/catalog/sensors_control_units/" },
    { value: "22", label: "Steering", href: "/catalog/steering/" },
    { value: "23", label: "Suspension and Arms", href: "/catalog/suspension/" },
    { value: "24", label: "Towbar Parts", href: "/catalog/towbar/" },
    { value: "25", label: "Transmission", href: "/catalog/transmission/" },
    { value: "26", label: "Trims", href: "/catalog/trims/" },
    { value: "27", label: "Universal", href: "/catalog/universal/" },
    { value: "28", label: "Wheels", href: "/catalog/wheels/" },
    { value: "29", label: "Windscreen Cleaning System", href: "/catalog/windscreen_cleaning_system/" }
  ];

  const mainMenu = [
    {
      name: 'Home',
      submenu: [
        { name: 'Home One', href: '/' },
        { name: 'Home Two', href: '/home-two' },
        {
          name: 'Header Spaceship',
          submenu: [
            { name: 'Variant One', href: '/header-spaceship-one' },
            { name: 'Variant Two', href: '/header-spaceship-two' },
            { name: 'Variant Three', href: '/header-spaceship-three' }
          ]
        },
        {
          name: 'Header Classic',
          submenu: [
            { name: 'Variant One', href: '/header-classic-one' },
            { name: 'Variant Two', href: '/header-classic-two' },
            { name: 'Variant Three', href: '/header-classic-three' },
            { name: 'Variant Four', href: '/header-classic-four' },
            { name: 'Variant Five', href: '/header-classic-five' }
          ]
        },
        {
          name: 'Mobile Header',
          submenu: [
            { name: 'Variant One', href: '/mobile-header-one' },
            { name: 'Variant Two', href: '/mobile-header-two' }
          ]
        }
      ]
    },
    {
      name: 'Shop',
      submenu: [
        {
          name: 'Category',
          submenu: [
            { name: "Air Conditioning", href: "/catalog/air_conditioning/" },
            { name: "Bearings", href: "/catalog/bearings/" },
            { name: "Belts Chains And Rollers", href: "/catalog/drive_belts/" },
            { name: "Body", href: "/catalog/body/" },
            { name: "Brake System", href: "/catalog/brakes/" },
            { name: "Car Accessories", href: "/catalog/car_accessories/" },
            { name: "Clutch System", href: "/catalog/clutch/" },
            { name: "Control Cables", href: "/catalog/control_cables/" },
            { name: "Electrical Components", href: "/catalog/electric_components/" },
          ]
        },
        {
          name: 'Shop Grid',
          submenu: [
            { name: '6 Columns Full', href: '/shop-grid-6-full' },
            { name: '5 Columns Full', href: '/shop-grid-5-full' },
            { name: '4 Columns Full', href: '/shop-grid-4-full' },
            { name: '4 Columns Sidebar', href: '/shop-grid-4-sidebar' },
            { name: '3 Columns Sidebar', href: '/shop-grid-3-sidebar' }
          ]
        },
        { name: 'Shop List', href: '/shop-list' },
        { name: 'Shop Table', href: '/shop-table' },
        { name: 'Shop Right Sidebar', href: '/shop-right-sidebar' },
        {
          name: 'Shop Navigation',
          submenu: [
            { name: 'Cursor-Based', href: '/shop-cursor-navigation' },
            { name: 'Page-Based', href: '/shop-page-navigation' }
          ]
        },
        {
          name: 'Product',
          submenu: [
            { name: 'Full Width', href: '/product-full' },
            { name: 'Left Sidebar', href: '/product-sidebar' }
          ]
        },
      ]
    },
    {
      name: 'Blog',
      submenu: [
        {
          name: 'Blog Classic',
          submenu: [
            { name: 'Left Sidebar', href: '/blog-classic-left' },
            { name: 'Right Sidebar', href: '/blog-classic-right' }
          ]
        },
        {
          name: 'Blog List',
          submenu: [
            { name: 'Left Sidebar', href: '/blog-list-left' },
            { name: 'Right Sidebar', href: '/blog-list-right' }
          ]
        },
        {
          name: 'Blog Grid',
          submenu: [
            { name: 'Left Sidebar', href: '/blog-grid-left' },
            { name: 'Right Sidebar', href: '/blog-grid-right' }
          ]
        },
        {
          name: 'Post Page',
          submenu: [
            { name: 'Full Width', href: '/post-full-width' },
            { name: 'Left Sidebar', href: '/post-left-sidebar' },
            { name: 'Right Sidebar', href: '/post-right-sidebar' }
          ]
        },
        { name: 'Post Without Image', href: '/post-without-image' }
      ]
    },
    {
      name: 'Account',
      submenu: [
        { name: 'Login & Register', href: '/login' },
        { name: 'Dashboard', href: '/account/dashboard' },
        { name: 'Garage', href: '/garage' },
        { name: 'Edit Profile', href: '/myprofile' },
        { name: 'Order History', href: '/myorders' },
        { name: 'Order Details', href: '/cart' },
        { name: 'Address Book', href: '/addresses' },
        { name: 'Edit Address', href: '/myaddresses' },
        { name: 'Change Password', href: '/forgot-password' }
      ]
    },
    {
      name: 'Pages',
      submenu: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us ', href: '/contact' },
        { name: '404', href: '/not-found' },
        { name: 'Terms And Conditions', href: '/terms' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Components', href: '/components' },
        { name: 'Typography', href: '/typography' }
      ]
    }
  ];

  // Navigation handlers
  const handleSelectChange = (e) => {
    const href = e.target.selectedOptions[0].getAttribute("data-href");
    setSelectedCategory(e.target.value);
    if (href && href !== "0") {
      navigate(href);
    }
  };

  const handleSearch = () => {
    const pn = headerPN.trim();
    if (!pn) return;

    // Oriparts search functionality
    const search = encodeURIComponent(pn);
    const backUrl = `${window.location.origin}/search/`;
    const url = `https://oriparts.com/?search=${search}&back_url_pn=${encodeURIComponent(backUrl)}${pn}`;
    window.open(url, "_blank", "noopener");
  };

  const goToWishlist = () => navigate("/mywishlist");
  const goToCart = () => navigate("/cart");
  const goToHomePage = () => navigate("/");
  const goToLoginPage = () => navigate("/login");
  const goToCreateAcc = () => navigate("/signup");
  const goToCompare = () => navigate("/compare");
  const goToStores = () => navigate("/shop");
  const goToDelivery = () => navigate("/cart");
  const goToGuarantee = () => navigate("/privacy-policy");

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } }
  };

  const slideInVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <motion.header
      className={`w-full bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-xl bg-white/95 backdrop-blur-sm" : "shadow-sm"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ===== TOPBAR ===== */}
      <div className="border-b bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 gap-2">
            {/* Left side - Store Info */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToStores}
                className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
              >
                <FaStore className="text-sm" />
                <span>STORES</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToDelivery}
                className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
              >
                <FaTruck className="text-sm" />
                <span>DELIVERY</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToGuarantee}
                className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
              >
                <FaShieldAlt className="text-sm" />
                <span>GUARANTEE</span>
              </motion.button>

              <div className="flex items-center gap-1">
                <FaEnvelope className="text-yellow-300" />
                <a href="mailto:info@example.com" className="hover:text-yellow-300 transition-colors">
                  info@example.com
                </a>
              </div>
            </div>

            {/* Right side - Social, Currency, Language, Auth */}
            <div className="flex items-center gap-3 sm:gap-4 text-sm">
              {/* Social Icons */}
              <div className="hidden sm:flex gap-2">
                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>

              {/* Currency & Language for larger screens */}
              <div className="hidden lg:flex items-center space-x-4">
                {/* Currency Selector */}
                <div className="relative">
                  <motion.button
                    className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                    onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>Currency:</span>
                    <span className="font-semibold">USD</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${showCurrencyMenu ? "rotate-180" : ""
                        }`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {showCurrencyMenu && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full right-0 mt-2 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-50 min-w-32"
                      >
                        {currencies.map((currency, index) => (
                          <motion.button
                            key={index}
                            className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            whileHover={{ x: 5 }}
                            onClick={() => setShowCurrencyMenu(false)}
                          >
                            {currency}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Language Selector */}
                <div className="relative">
                  <motion.button
                    className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MdLanguage className="text-lg" />
                    <span className="font-semibold">EN</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${showLanguageMenu ? "rotate-180" : ""
                        }`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {showLanguageMenu && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full right-0 mt-2 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-50 min-w-32"
                      >
                        {languages.map((language, index) => (
                          <motion.button
                            key={index}
                            className="flex items-center space-x-2 w-full text-left px-4 py-2 hover:bg-red-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            whileHover={{ x: 5 }}
                            onClick={() => setShowLanguageMenu(false)}
                          >
                            <span className="font-medium">{language.code}</span>
                            <span className="text-sm text-gray-600">{language.name}</span>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Auth Links */}
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={goToLoginPage}
                  className="hover:text-yellow-300 transition-colors flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaUser className="text-sm" />
                  <span>Login</span>
                </motion.button>
                <span className="text-white/50">|</span>
                <motion.button
                  onClick={goToCreateAcc}
                  className="hover:text-yellow-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Register
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo & Departments */}
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img
              onClick={goToHomePage}
              src={logo3}
              alt="Logo"
              className="h-14 w-auto cursor-pointer drop-shadow-lg"
            />
          </motion.div>

          {/* Departments Menu - Commented out as per original */}
          <div className="hidden lg:block">
            {/* Departments menu code commented out */}
          </div>
        </div>

        {/* Search Bar with Category & Vehicle Selector */}
        <div className="flex items-center bg-white rounded-2xl shadow-lg overflow-hidden flex-1 max-w-2xl border border-gray-200">
          {/* Category Selector */}
          <div className="relative">
            <select
              className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm outline-none border-r border-gray-300 cursor-pointer appearance-none pr-8"
              value={selectedCategory}
              onChange={handleSelectChange}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value} data-href={category.href}>
                  {category.label}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by number plate or part number..."
            className="flex-1 px-4 py-3 bg-transparent text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={headerPN}
            onChange={(e) => setHeaderPN(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          {/* Vehicle Selector Button */}
          <motion.button
            className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-l border-gray-300 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 flex items-center space-x-2"
            onClick={() => setShowVehiclePicker(!showVehiclePicker)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCar className="text-gray-600" />
            <span className="hidden sm:block font-medium">Vehicle</span>
          </motion.button>

          {/* Search Button */}
          <motion.button
            onClick={handleSearch}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-4 hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSearch />
          </motion.button>

          {/* Vehicle Picker Dropdown */}
          <AnimatePresence>
            {showVehiclePicker && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 w-96"
              >
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <IoSparkles className="text-yellow-500" />
                    <span>Select a vehicle to find exact fit parts</span>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {vehicles.map((vehicle) => (
                      <motion.label
                        key={vehicle.id}
                        className="flex items-center space-x-3 p-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <input
                          type="radio"
                          name="vehicle"
                          value={vehicle.id}
                          checked={currentVehicle === vehicle.id}
                          onChange={(e) => setCurrentVehicle(e.target.value)}
                          className="text-red-600 focus:ring-red-500"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">{vehicle.name}</div>
                          {vehicle.details && (
                            <div className="text-sm text-gray-500">{vehicle.details}</div>
                          )}
                        </div>
                        {vehicle.id && (
                          <motion.button
                            className="text-gray-400 hover:text-red-500 p-1"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 4V2h3V1h6v1h3v2H2zm11 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5h10v8z" />
                            </svg>
                          </motion.button>
                        )}
                      </motion.label>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-red-600 text-sm hover:underline font-medium">
                      Back to list
                    </button>
                    <motion.button
                      className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add Vehicle
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {/* Compare (for larger screens) */}
          <motion.button
            onClick={goToCompare}
            className="hidden lg:flex items-center space-x-1 hover:text-red-500 transition-colors relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdCompare className="text-2xl text-red-900" />
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
              0
            </span>
          </motion.button>

          {/* Wishlist */}
          <motion.button
            onClick={goToWishlist}
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart className="text-2xl text-red-900" />
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
              0
            </span>
          </motion.button>

          {/* Account */}
          <div className="relative">
            <motion.button
              className="flex items-center space-x-2 hover:text-red-600 transition-colors"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdAccountCircle className="text-2xl text-red-900" />
              <div className="hidden sm:block text-left">
                <div className="text-xs text-gray-500">Hello, Log In</div>
                <div className="text-sm font-semibold">My Account</div>
              </div>
            </motion.button>

            <AnimatePresence>
              {showAccountMenu && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 min-w-64"
                >
                  <div className="p-4">
                    <div className="font-semibold mb-3 text-gray-800">Log In to Your Account</div>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="customer@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <div className="flex items-center space-x-2">
                        <input
                          type="password"
                          placeholder="Password"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <button className="text-red-600 text-sm hover:underline whitespace-nowrap">
                          Forgot?
                        </button>
                      </div>
                      <motion.button
                        className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-2 rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Login
                      </motion.button>
                      <div className="text-center">
                        <button
                          onClick={goToCreateAcc}
                          className="text-red-600 text-sm hover:underline font-medium"
                        >
                          Create An Account
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart */}
          <div className="relative group">
            <motion.button
              onClick={goToCart}
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaShoppingCart className="text-2xl text-red-900" />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                2
              </span>
            </motion.button>

            {/* Cart dropdown */}
            <div className="absolute right-0 mt-3 bg-white rounded-2xl shadow-2xl w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border z-50 transform group-hover:scale-100 scale-95">
              <div className="p-4">
                <div className="space-y-3">
                  {[
                    {
                      name: "Brandix Spark Plug",
                      price: "$19.00",
                      qty: 1,
                      image: "https://via.placeholder.com/60",
                    },
                    {
                      name: "Brake Kit",
                      price: "$224.00",
                      qty: 1,
                      image: "https://via.placeholder.com/60",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{item.name}</div>
                        <div className="text-sm text-gray-500">Qty: {item.qty}</div>
                      </div>
                      <div className="font-semibold text-gray-800">{item.price}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 border-t pt-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>Total:</span>
                    <span className="font-semibold text-gray-800">$243.00</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <Link
                      to="/cart"
                      className="flex-1 bg-gray-200 text-sm px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors text-center font-medium"
                    >
                      View Cart
                    </Link>
                    <Link
                      to="/checkout"
                      className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-3 py-2 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 text-center font-medium shadow-lg"
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

      {/* Main Navigation */}
      <div
        className={`hidden lg:flex items-center justify-center space-x-8 py-3 border-t
           bg-gradient-to-r from-gray-50 to-red-50 transition-all duration-300
            ${isScrolled ? "opacity-0 h-0 py-0 -mt-3 overflow-hidden" : "opacity-100 h-auto"
          }`}
      >
        {mainMenu.map((item, index) => (
          <div key={index} className="relative group">
            <motion.button
              className="flex items-center space-x-1 py-2 font-semibold text-gray-800 hover:text-red-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              <span>{item.name}</span>
              <FaChevronDown className="text-xs" />

            </motion.button>

            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl z-40 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2">
                {item.submenu.map((subItem, subIndex) => (
                  <div key={subIndex} className="relative group/sub">
                    <Link
                      to={subItem.href || "#"}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-purple-50 transition-all duration-200"
                    >
                      <span className="font-medium">{subItem.name}</span>
                      {subItem.submenu && (
                        <FaChevronRight className="text-xs text-gray-400 group-hover/sub:text-red-600" />
                      )}
                    </Link>

                    {subItem.submenu && (
                      <div className="absolute top-0 left-full ml-1 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 min-w-48 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                        <div className="py-2">
                          {subItem.submenu.map((nestedItem, nestedIndex) => (
                            <Link
                              key={nestedIndex}
                              to={nestedItem.href}
                              className="block px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-purple-50 transition-all duration-200 font-medium"
                            >
                              {nestedItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <Sider isOpen={isSidebarOpen} onClose={( ) => setIsSidebarOpen(false)} />
    </motion.header>
  );
};

export default Header;