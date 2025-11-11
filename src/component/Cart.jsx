import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaMapMarkerAlt, FaFileAlt, FaCreditCard } from "react-icons/fa";
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

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const shippingCharges = getTotalPrice() > 500 ? 0 : 50;
  const finalTotal = getTotalPrice() + shippingCharges;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
        <div className="section-container">
          <div className="card max-w-2xl mx-auto text-center animate-fade-in">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShoppingCart className="text-primary-500 text-5xl" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 text-base">Looks like you haven't added any items to your cart yet.</p>
            <Link
              to="/catalog"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaShoppingCart />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8">
      <div className="section-container">
        {/* Progress Bar */}
        <div className="mt-8 md:mt-12 mb-8 bg-white rounded-xl shadow-soft p-4 sm:p-5 md:p-6">
          <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {/* Cart Step - Active */}
            <div className="flex flex-col items-center flex-shrink-0 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mb-1 sm:mb-2 shadow-lg ring-2 sm:ring-4 ring-primary-100">
                <FaShoppingCart className="text-white text-sm sm:text-base md:text-lg" />
              </div>
              <span className="text-xs sm:text-sm text-primary-600 font-semibold whitespace-nowrap">Cart</span>
            </div>
            
            {/* Connector Line */}
            <div className="h-1 flex-1 sm:flex-none sm:w-8 md:w-12 lg:w-16 xl:w-24 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
            
            {/* Address Step */}
            <button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/address');
                }
              }}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-all transform hover:scale-105 flex-shrink-0 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-1 sm:mb-2 shadow-md hover:shadow-lg transition-all">
                <FaMapMarkerAlt className="text-gray-600 text-sm sm:text-base md:text-lg" />
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">Address</span>
            </button>
            
            {/* Connector Line */}
            <div className="h-1 flex-1 sm:flex-none sm:w-8 md:w-12 lg:w-16 xl:w-24 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"></div>
            
            {/* Review Step */}
            <button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/review');
                }
              }}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-all transform hover:scale-105 flex-shrink-0 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-1 sm:mb-2 shadow-md hover:shadow-lg transition-all">
                <FaFileAlt className="text-gray-600 text-sm sm:text-base md:text-lg" />
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">Review</span>
            </button>
            
            {/* Connector Line */}
            <div className="h-1 flex-1 sm:flex-none sm:w-8 md:w-12 lg:w-16 xl:w-24 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"></div>
            
            {/* Pay Step */}
            <button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/payment');
                }
              }}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-all transform hover:scale-105 flex-shrink-0 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-1 sm:mb-2 shadow-md hover:shadow-lg transition-all">
                <FaCreditCard className="text-gray-600 text-sm sm:text-base md:text-lg" />
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">Pay</span>
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600 text-base">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="card">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-primary-600 hover:text-primary-700 text-xs font-semibold flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-50 transition-all"
                  >
                    <FaTrash /> Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => {
                  const itemPrice = item.discountPrice || item.price;
                  const itemTotal = itemPrice * item.quantity;
                  
                  return (
                    <div key={item.id} className="p-6 hover:bg-gray-50 transition-all">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-xl shadow-sm"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-xs text-gray-600 mb-3">{item.brand}</p>
                          
                          {/* Price */}
                          <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <span className="text-lg font-bold text-primary-600">
                              ₹{item.discountPrice ? item.discountPrice.toFixed(2) : item.price.toFixed(2)}
                            </span>
                            {item.discountPrice && (
                              <>
                                <span className="text-xs line-through text-gray-500">
                                  ₹{item.price.toFixed(2)}
                                </span>
                                <span className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full font-semibold">
                                  Save ₹{((item.price - item.discountPrice) * item.quantity).toFixed(2)}
                                </span>
                              </>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-600 font-medium">Quantity:</span>
                            <div className="flex items-center bg-gray-100 rounded-lg p-1">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="bg-white text-gray-700 rounded-lg w-8 h-8 flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={item.quantity <= 1}
                              >
                                <FaMinus className="text-xs" />
                              </button>
                              <span className="px-4 py-2 text-gray-900 font-semibold min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="bg-white text-gray-700 rounded-lg w-8 h-8 flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm"
                              >
                                <FaPlus className="text-xs" />
                              </button>
                            </div>
                          </div>

                          {/* Item Total */}
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <span className="text-xs text-gray-600">Item Total: </span>
                            <span className="text-base font-bold text-gray-900">
                              ₹{itemTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <div className="flex items-start">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-3 text-primary-500 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all"
                            title="Remove item"
                          >
                            <FaTrash className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="card sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Subtotal ({getTotalItems()} items)</span>
                  <span className="text-sm font-semibold text-gray-900">₹{getSubtotal().toFixed(2)}</span>
                </div>
                
                {getTotalDiscount() > 0 && (
                  <div className="flex justify-between items-center py-2 bg-accent-50 rounded-lg px-3">
                    <span className="text-sm text-gray-600">Discount</span>
                    <span className="text-sm text-accent-600 font-bold">- ₹{getTotalDiscount().toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className={`text-sm font-semibold ${shippingCharges === 0 ? 'text-accent-600' : 'text-gray-900'}`}>
                    {shippingCharges === 0 ? 'FREE' : `₹${shippingCharges.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-primary-600">₹{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {getTotalPrice() < 500 && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-xs text-yellow-800 font-medium">
                    💡 Add ₹{(500 - getTotalPrice()).toFixed(2)} more for <span className="font-bold">FREE shipping!</span>
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <button
                  onClick={() => navigate('/checkout/address')}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-base"
                >
                  <FaShoppingCart />
                  Proceed to Checkout
                </button>
                
                <Link
                  to="/catalog"
                  className="btn-outline w-full flex items-center justify-center gap-2 text-center"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;