import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaMapMarkerAlt, FaFileAlt, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getSubtotal,
    getTotalDiscount,
  } = useCart();
  const [removingItemId, setRemovingItemId] = useState(null);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = async (productId) => {
    setRemovingItemId(productId);
    // Add a small delay for animation
    setTimeout(() => {
      removeFromCart(productId);
      setRemovingItemId(null);
    }, 300);
  };

  const shippingCharges = getTotalPrice() > 500 ? 0 : 50;
  const finalTotal = getTotalPrice() + shippingCharges;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card max-w-2xl mx-auto text-center"
          >
            <motion.div 
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaShoppingCart className="text-blue-600 text-5xl" />
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3"
            >
              Your cart is empty
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8 text-xs sm:text-sm"
            >
              Looks like you haven't added any items to your cart yet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/catalog"
                className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaShoppingCart />
                Continue Shopping
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Progress Bar with Animations */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 md:mt-4 mb-2 bg-white rounded-xl shadow-xl p-2 sm:p-3 md:p-4 border border-gray-200 backdrop-blur-sm"                 
        >
          <div className="flex items-center justify-between sm:justify-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {/* Cart Step - Active */}
            <motion.div 
              className="flex flex-col items-center flex-shrink-0 min-w-[45px] sm:min-w-[50px] md:min-w-[55px]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-0.5 sm:mb-1 shadow-xl ring-2 ring-blue-100 relative overflow-hidden"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0px rgba(239, 68, 68, 0.4)",
                    "0 0 0 6px rgba(239, 68, 68, 0)",
                    "0 0 0 0px rgba(239, 68, 68, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <FaShoppingCart className="text-white text-xs sm:text-sm md:text-base relative z-10" />
              </motion.div>
              <span className="text-[10px] sm:text-xs text-blue-600 font-bold whitespace-nowrap">Cart</span>
            </motion.div>
            
            {/* Animated Connector Line */}
            <motion.div 
              className="h-0.5 flex-1 sm:flex-none sm:w-6 md:w-8 lg:w-10 xl:w-12 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 rounded-full relative overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Address Step */}
            <motion.button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/address');
                }
              }}
              className="flex flex-col items-center cursor-pointer flex-shrink-0 min-w-[45px] sm:min-w-[50px] md:min-w-[55px] group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-0.5 sm:mb-1 shadow-md group-hover:shadow-xl transition-all group-hover:from-blue-200 group-hover:to-blue-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaMapMarkerAlt className="text-gray-600 group-hover:text-blue-600 text-xs sm:text-sm md:text-base transition-colors" />
              </motion.div>
              <span className="text-[10px] sm:text-xs text-gray-500 group-hover:text-blue-600 font-medium whitespace-nowrap transition-colors">Address</span>
            </motion.button>
            
            {/* Connector Line */}
            <div className="h-0.5 flex-1 sm:flex-none sm:w-6 md:w-8 lg:w-10 xl:w-12 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"></div>
            
            {/* Review Step */}
            <motion.button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/review');
                }
              }}
              className="flex flex-col items-center cursor-pointer flex-shrink-0 min-w-[45px] sm:min-w-[50px] md:min-w-[55px] group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-0.5 sm:mb-1 shadow-md group-hover:shadow-xl transition-all group-hover:from-blue-200 group-hover:to-blue-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaFileAlt className="text-gray-600 group-hover:text-blue-600 text-xs sm:text-sm md:text-base transition-colors" />
              </motion.div>
              <span className="text-[10px] sm:text-xs text-gray-500 group-hover:text-blue-600 font-medium whitespace-nowrap transition-colors">Review</span>
            </motion.button>
            
            {/* Connector Line */}
            <div className="h-0.5 flex-1 sm:flex-none sm:w-6 md:w-8 lg:w-10 xl:w-12 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"></div>
            
            {/* Pay Step */}
            <motion.button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/payment');
                }
              }}
              className="flex flex-col items-center cursor-pointer flex-shrink-0 min-w-[45px] sm:min-w-[50px] md:min-w-[55px] group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-0.5 sm:mb-1 shadow-md group-hover:shadow-xl transition-all group-hover:from-blue-200 group-hover:to-blue-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaCreditCard className="text-gray-600 group-hover:text-blue-600 text-xs sm:text-sm md:text-base transition-colors" />
              </motion.div>
              <span className="text-[10px] sm:text-xs text-gray-500 group-hover:text-blue-600 font-medium whitespace-nowrap transition-colors">Pay</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-3"
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <motion.h1 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Shopping <span className="text-blue-600">Cart</span>
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-[10px] sm:text-xs flex items-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 text-blue-600 rounded-full text-[9px] sm:text-[10px] font-bold">
                  {getTotalItems()}
                </span>
                {getTotalItems() === 1 ? 'item' : 'items'} in your cart
              </motion.p>
            </div>
            {cartItems.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearCart}
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
              >
                <FaTrash />
                Clear All
              </motion.button>
            )}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-2 sm:gap-3">
          {/* Enhanced Cart Items */}
          <div className="flex-1 order-1 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
            >
              <div className="p-2 sm:p-3 md:p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-1 h-4 sm:h-5 bg-blue-600 rounded-full"></span>
                    Cart Items ({getTotalItems()})
                  </h2>
                </div>
              </div>

              <AnimatePresence mode="popLayout">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="divide-y divide-gray-100"
                >
                  {cartItems.map((item, index) => {
                    const itemPrice = item.discountPrice || item.price;
                    const itemTotal = itemPrice * item.quantity;
                    const isRemoving = removingItemId === item.id;
                    
                    return (
                      <motion.div 
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate={isRemoving ? "exit" : "visible"}
                        exit="exit"
                        layout
                        className={`p-2 sm:p-3 md:p-4 hover:bg-gray-50 transition-all border-b border-gray-100 last:border-b-0 ${isRemoving ? 'opacity-50' : ''}`}
                      >
                        <div className="flex gap-2 sm:gap-3">
                          {/* Product Image */}
                          <motion.div 
                            className="flex-shrink-0 relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-100 border border-gray-200">
                              <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/200x200?text=Product';
                                }}
                              />
                            </div>
                          </motion.div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div className="flex-1">
                              {/* Product Name and Remove Button Row */}
                              <div className="flex items-start justify-between gap-1.5 mb-1 sm:mb-1.5">
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-900 mb-0.5 line-clamp-2 hover:text-blue-600 transition-colors">
                                    {item.name}
                                  </h3>
                                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 mb-1.5">
                                    {item.brand}
                                  </p>
                                </div>
                                {/* Remove Button - Top Right */}
                                <motion.button
                                  whileHover={{ scale: 1.1, rotate: 12 }}
                                  whileTap={{ scale: 0.9, rotate: 0 }}
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="p-1.5 sm:p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all flex-shrink-0"
                                  title="Remove item"
                                >
                                  <FaTrash className="text-sm sm:text-base" />
                                </motion.button>
                              </div>

                              {/* Price Section */}
                              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                                <motion.span 
                                  className="text-sm sm:text-base md:text-lg font-bold text-blue-600"
                                  initial={{ scale: 0.9 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  ₹{item.discountPrice ? item.discountPrice.toFixed(2) : item.price.toFixed(2)}
                                </motion.span>
                                {item.discountPrice && (
                                  <>
                                    <span className="text-[10px] sm:text-xs md:text-sm line-through text-gray-400">
                                      ₹{item.price.toFixed(2)}
                                    </span>
                                    <motion.span 
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="text-[9px] sm:text-[10px] md:text-xs bg-green-100 text-green-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold"
                                    >
                                      Save ₹{((item.price - item.discountPrice) * item.quantity).toFixed(2)}
                                    </motion.span>
                                  </>
                                )}
                              </div>

                              {/* Quantity Controls and Item Total Row */}
                              <div className="flex items-center justify-between gap-3 sm:gap-4 pt-2 sm:pt-3 border-t border-gray-100">
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 font-medium hidden sm:inline">
                                    Qty:
                                  </span>
                                  <div className="flex items-center bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                                    <motion.button
                                      whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                      className="bg-white text-gray-700 rounded-lg w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700"
                                      disabled={item.quantity <= 1}
                                    >
                                      <FaMinus className="text-[10px] sm:text-xs" />
                                    </motion.button>
                                    <motion.span 
                                      key={item.quantity}
                                      initial={{ scale: 1.2, color: "#ef4444" }}
                                      animate={{ scale: 1, color: "#111827" }}
                                      transition={{ type: "spring", stiffness: 400 }}
                                      className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-gray-900 font-bold min-w-[2rem] sm:min-w-[2.5rem] md:min-w-[3rem] text-center bg-white text-xs sm:text-sm"
                                    >
                                      {item.quantity}
                                    </motion.span>
                                    <motion.button
                                      whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                      className="bg-white text-gray-700 rounded-lg w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition-all"
                                    >
                                      <FaPlus className="text-[10px] sm:text-xs" />
                                    </motion.button>
                                  </div>
                                </div>

                                {/* Item Total */}
                                <div className="text-right">
                                  <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 block mb-0.5">
                                    Total
                                  </span>
                                  <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                                    ₹{itemTotal.toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Enhanced Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-96 order-2 lg:order-2"
          >
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl border border-gray-200 lg:sticky lg:top-4 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-2 sm:p-3 md:p-4 text-white">
                <h2 className="text-[11px] sm:text-xs md:text-sm font-bold mb-0.5 flex items-center gap-1 sm:gap-1.5">
                  <FaShoppingCart className="text-white/90 text-[10px] sm:text-xs md:text-sm" />
                  Order Summary
                </h2>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-white/90">Review your order details</p>
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 mb-3 sm:mb-4 md:mb-5">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-between items-center py-1 sm:py-1.5 md:py-2"
                >
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-600">Subtotal ({getTotalItems()} items)</span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-900">₹{getSubtotal().toFixed(2)}</span>
                </motion.div>
                
                {getTotalDiscount() > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-between items-center py-1 sm:py-1.5 md:py-2 bg-green-50 rounded-lg px-2 sm:px-3 border border-green-200"
                  >
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-700 font-medium">Discount</span>
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-green-600 font-bold">- ₹{getTotalDiscount().toFixed(2)}</span>
                  </motion.div>
                )}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-between items-center py-1 sm:py-1.5 md:py-2"
                >
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-600">Shipping</span>
                  <span className={`text-[9px] sm:text-[10px] md:text-xs font-semibold ${shippingCharges === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    {shippingCharges === 0 ? (
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <FaCheckCircle className="text-green-600 text-[9px] sm:text-[10px]" />
                        FREE
                      </span>
                    ) : (
                      `₹${shippingCharges.toFixed(2)}`
                    )}
                  </span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="border-t-2 border-gray-300 pt-1.5 sm:pt-2 md:pt-2.5 mt-1.5 sm:mt-2 md:mt-2.5 bg-gradient-to-r from-gray-50 to-white rounded-lg p-1.5 sm:p-2 md:p-2.5"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-900">Total</span>
                    <motion.span 
                      key={finalTotal}
                      initial={{ scale: 1.3, color: "#ef4444" }}
                      animate={{ scale: 1, color: "#dc2626" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-xs sm:text-sm md:text-base font-extrabold text-blue-600"
                    >
                      ₹{finalTotal.toFixed(2)}
                    </motion.span>
                  </div>
                </motion.div>
                </div>

                {getTotalPrice() < 500 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-1.5 sm:p-2 md:p-2.5 mb-2 sm:mb-3 md:mb-4"
                >
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-yellow-800 font-medium">
                    💡 Add ₹{(500 - getTotalPrice()).toFixed(2)} more for <span className="font-bold">FREE shipping!</span>
                  </p>
                </motion.div>
                )}

                <div className="space-y-1.5 sm:space-y-2">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/checkout/address')}
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-bold py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 md:px-4 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <FaShoppingCart className="relative z-10 text-[10px] sm:text-xs" />
                  <span className="relative z-10">Proceed to Checkout</span>
                </motion.button>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/catalog"
                    className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 text-center text-[10px] sm:text-xs hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
                </div>

                {/* Security Badge */}
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-gray-200"
              >
                <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-[8px] sm:text-[9px] md:text-[10px] text-gray-500">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Secure Checkout</span>
                </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;