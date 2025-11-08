import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaCar,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
  FaBars,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTruck,
  FaShieldAlt,
  FaStore,
  FaSignOutAlt,
  FaCamera,
  FaVideo,
  FaTimes,
  FaUpload,
} from "react-icons/fa";
import { MdAccountCircle, MdCompare, MdLanguage, MdOutlineInventory } from "react-icons/md";
import { IoReorderThreeOutline, IoSparkles } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import logo3 from "./logo3.png";
import { Sider } from "./Sider";
import { useCart } from '../contexts/CartContext';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerPN, setHeaderPN] = useState("");
  const { getTotalItems, cartItems, getTotalPrice } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showDepartmentsMenu, setShowDepartmentsMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [show360UploadModal, setShow360UploadModal] = useState(false);
  const [uploadType, setUploadType] = useState('photo'); // 'photo' or 'video'

  // Mock user state - replace with your actual auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://via.placeholder.com/40",
    role: "Customer"
  };

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          
          ]
        },
        {
          name: 'Shop Grid',
          submenu: [
            { name: '6 Columns Full', href: '/shop-grid-6-full' },
            { name: '5 Columns Full', href: '/shop-grid-5-full' },
            { name: '4 Columns Full', href: '/shop-grid-4-full' },
         
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
        { name: 'Edit Profile', href: '/myprofile' },
        { name: 'Dashboard', href: '/account/dashboard' },
        { name: 'Garage', href: '/garage' },
        { name: 'Order Details', href: '/cart' },
        { name: 'Address Book', href: '/addresses' },
        { name: 'Edit Address', href: '/myaddresses' },
        
      ]
    },
    {
      name: 'Pages',
      submenu: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us ', href: '/contact' },
        { name: 'Terms And Conditions', href: '/terms' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Components', href: '/components' },
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
      className={`w-full bg-white shadow-sm sticky top-0 z-50 transition-all duration-300
         ${isScrolled ? "shadow-xl bg-white/95 backdrop-blur-sm" : "shadow-sm"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
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

                  </div>

        {/* 360 Degree Upload Button */}
        <motion.button
          onClick={() => setShow360UploadModal(true)}
          className="relative px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center gap-2 text-gray-700"
                        whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          title="Upload  Image/Video"
        >
          <div className="relative">
            <FaCamera className="text-lg text-gray-700" />
            <span className="absolute -top-1 -right-1 text-xs font-bold text-gray-700">+</span>
                        </div>
          <span className="text-sm font-medium">Upload Image/Video</span>
                    </motion.button>

        {/* User Actions */}
        <div className="flex items-center gap-4">
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
                <div className="text-xs text-gray-500"> Hello </div>
                <div className="text-sm font-semibold"> My Account</div>
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
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 pb-3 border-b">
                        <img
                          src={mockUser.avatar}
                          alt={mockUser.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-semibold text-gray-800">{mockUser.name}</div>
                          <div className="text-sm text-gray-500">{mockUser.email}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Link
                          to="/myprofile"
                          className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors py-2"
                        >
                          <FaUser className="text-sm" />
                          <span>My Profile</span>
                        </Link>

                        <Link
                          to="/myorder"
                          className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors py-2"
                        >
                          <MdOutlineInventory className="text-sm" />
                          <span>My Orders</span>
                        </Link>

                        <Link
                          to="/mywishlist"
                          className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors py-2"
                        >
                          <FaHeart className="text-sm" />
                          <span>My Wishlist</span>
                        </Link>

                        <Link
                          to="/garage"
                          className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors py-2"
                        >
                          <FaCar className="text-sm" />
                          <span>My Garage</span>
                        </Link>
                      </div>

                      <motion.button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setShowAccountMenu(false);
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaSignOutAlt className="text-sm" />
                        <span>Sign Out</span>
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart */}
            <motion.button
              onClick={goToCart}
            className="relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaShoppingCart className="text-2xl text-red-900" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {getTotalItems()}
                </span>
              )}
            </motion.button>

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

      {/* 360 Degree Upload Modal */}
      <AnimatePresence>
        {show360UploadModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setShow360UploadModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Upload 360° Content</h2>
                    <button
                      onClick={() => setShow360UploadModal(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
            >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>

                  {/* Type Selection */}
                  <div className="flex gap-4 mb-6">
                    <button
                      onClick={() => setUploadType('photo')}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                        uploadType === 'photo'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaCamera className="inline-block mr-2" />
                       Image
                    </button>
                    <button
                      onClick={() => setUploadType('video')}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                        uploadType === 'video'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaVideo className="inline-block mr-2" />
                      360° Video
                    </button>
                  </div>

                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors mb-6">
                    <div className="flex flex-col items-center">
                      {uploadType === 'photo' ? (
                        <FaCamera className="text-5xl text-gray-400 mb-4" />
                      ) : (
                        <FaVideo className="text-5xl text-gray-400 mb-4" />
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Upload {uploadType === 'photo' ? ' Image' : '360° Video'}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Drag and drop your {uploadType === 'photo' ? 'photo' : 'video'} here, or click to browse
                      </p>
                      <input
                        type="file"
                        accept={uploadType === 'photo' ? 'image/*' : 'video/*'}
                        className="hidden"
                        id="360-upload-input"
                        multiple
                      />
                      <label
                        htmlFor="360-upload-input"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer"
                            >
                        <FaUpload />
                        <span>Choose File</span>
                      </label>
                      <p className="text-xs text-gray-500 mt-3">
                        Supported formats: {uploadType === 'photo' ? 'JPG, PNG, HEIC' : 'MP4, MOV, AVI'} (Max 100MB)
                      </p>
                        </div>
                      </div>

                  {/* Additional Options */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder={`Enter ${uploadType === 'photo' ? 'photo' : 'video'} title...`}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description (Optional)
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Add a description..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., car, parts, review"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShow360UploadModal(false)}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        // Handle upload logic here
                        alert(`${uploadType === 'photo' ? 'Photo' : 'Video'} upload functionality will be implemented`);
                        setShow360UploadModal(false);
                      }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium shadow-lg"
                    >
                      Upload {uploadType === 'photo' ? 'Photo' : 'Video'}
                    </button>
              </div>
            </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
