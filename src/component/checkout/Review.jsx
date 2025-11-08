import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaMapMarkerAlt, FaFileAlt, FaCreditCard, FaArrowLeft, FaQuestionCircle } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

const Review = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getSubtotal, getTotalItems } = useCart();
  const [shippingAddress, setShippingAddress] = useState(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem('shippingAddress');
    if (savedAddress) {
      setShippingAddress(JSON.parse(savedAddress));
    } else {
      navigate('/checkout/address');
    }
  }, [navigate]);

  // Group items by seller to create packages
  const groupItemsBySeller = () => {
    const packages = {};
    cartItems.forEach((item) => {
      const seller = item.seller || "Default Seller";
      if (!packages[seller]) {
        packages[seller] = [];
      }
      packages[seller].push(item);
    });
    return Object.entries(packages).map(([seller, items], index) => ({
      packageNumber: index + 1,
      seller,
      items,
    }));
  };

  const packages = groupItemsBySeller();

  // Calculate delivery charge per package (free over ₹500, otherwise ₹58)
  const getDeliveryCharge = (packageTotal) => {
    return packageTotal >= 500 ? 0 : 58;
  };

  // Calculate totals
  const totalDeliveryCharge = packages.reduce((total, pkg) => {
    const packageTotal = pkg.items.reduce((sum, item) => {
      return sum + ((item.discountPrice || item.price) * item.quantity);
    }, 0);
    return total + getDeliveryCharge(packageTotal);
  }, 0);

  // Platform fee calculation (₹16 per package, minimum ₹32)
  const platformFee = Math.max(packages.length * 16, 32);
  const grandTotal = getTotalPrice() + totalDeliveryCharge + platformFee;
  const boodmoPoints = Math.floor(getTotalPrice() / 100);

  // Calculate total savings from discounts
  const totalSavings = cartItems.reduce((total, item) => {
    if (item.discountPrice && item.discountPrice < item.price) {
      return total + ((item.price - item.discountPrice) * item.quantity);
    }
    return total;
  }, 0);

  // Count items with savings
  const itemsWithSavings = cartItems.filter(item =>
    item.discountPrice && item.discountPrice < item.price
  ).reduce((count, item) => count + item.quantity, 0);

  // Format date for delivery estimate
  const getDeliveryDate = (packageNum) => {
    const date = new Date();
    // Different packages have different delivery dates
    date.setDate(date.getDate() + (packageNum === 1 ? 10 : 18));
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  const handleBack = () => {
    navigate('/checkout/address');
  };

  const handleContinue = () => {
    navigate('/checkout/payment');
  };

  // Open Google Maps with address
  const handleOpenMap = (address) => {
    const fullAddress = `${address.address}, ${address.cityState}, ${address.postalCode}`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
    window.open(googleMapsUrl, '_blank');
  };

  if (!shippingAddress) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <button
              onClick={() => navigate('/cart')}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <FaShoppingCart className="text-blue-600 text-lg" />
              </div>
              <span className="text-sm text-blue-600 font-medium">Cart</span>
            </button>
            <div className="h-1 w-16 md:w-24 bg-blue-600"></div>
            <button
              onClick={() => navigate('/checkout/address')}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <FaMapMarkerAlt className="text-blue-600 text-lg" />
              </div>
              <span className="text-sm text-blue-600 font-medium">Address</span>
            </button>
            <div className="h-1 w-16 md:w-24 bg-blue-600"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <FaFileAlt className="text-white text-lg" />
              </div>
              <span className="text-sm text-blue-600 font-semibold">Review</span>
            </div>
            <div className="h-1 w-16 md:w-24 bg-blue-200"></div>
            <button
              onClick={() => navigate('/checkout/payment')}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <FaCreditCard className="text-blue-600 text-lg" />
              </div>
              <span className="text-sm text-gray-500">Pay</span>
            </button>
          </div>
        </div>

        {/* Header with Review title and columns */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Review</h1>
         
        </div>

        {/* Order Packages */}
        <div className="space-y-6 mb-8">
          {packages.map((pkg) => {
            const packageTotal = pkg.items.reduce((sum, item) => {
              return sum + ((item.discountPrice || item.price) * item.quantity);
            }, 0);
            const deliveryCharge = getDeliveryCharge(packageTotal);
            const deliveryDate = getDeliveryDate(pkg.packageNumber);

            return (
              <div key={pkg.packageNumber} className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Order Package #{pkg.packageNumber}
                </h2>

                {pkg.items.map((item) => {
                  const unitPrice = item.discountPrice || item.price;
                  const itemTotal = unitPrice * item.quantity;
                  const mrp = item.price; // Original price as MRP
                  const hasDiscount = item.discountPrice && item.discountPrice < item.price;

                  return (
                    <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                      <img
                        src={item.imageUrl || "https://via.placeholder.com/100"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {item.partNumber || item.id}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          Brand: {item.brand || "N/A"} | Sold by: {item.seller || pkg.seller}
                        </p>
                        <div className="mt-2">
                          <p className="text-sm text-gray-700">
                            {item.quantity} × ₹{unitPrice.toFixed(2)}
                          </p>
                          {hasDiscount && (
                            <p className="text-xs text-gray-500 line-through mt-1">
                              MRP: ₹{mrp.toFixed(2)}
                            </p>
                          )}
                          <p className="text-lg font-semibold text-gray-800 mt-1">
                            ₹{itemTotal.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Delivery Method */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">DELIVERY METHOD</h3>
                      <p className="text-sm text-gray-600">Standard Delivery</p>
                      <p className="text-sm text-blue-600 mt-1">
                        Estimated delivery by {deliveryDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-semibold ${deliveryCharge === 0 ? 'text-green-600' : 'text-gray-800'
                        }`}>
                        {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge.toFixed(2)}`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Package Total */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">Package Total</span>
                    <span className="text-xl font-bold text-gray-800">
                      ₹{(packageTotal + deliveryCharge).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Shipping Address Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Shipping Address</h2>
            <button
              onClick={() => handleOpenMap(shippingAddress)}
              className="flex items-center gap-2 hover:opacity-80 transition-colors cursor-pointer"
              title="Open in Google Maps"
              style={{ color: '#EA4335' }}
            >
              <FaMapMarkerAlt className="text-xl" />
              <span className="text-sm font-medium">View on Map</span>
            </button>
          </div>
          <div className="text-gray-700">
            <p className="font-medium">
              {shippingAddress.name} - {shippingAddress.mobile}
            </p>
            <p className="mt-1">
              {shippingAddress.address}, {shippingAddress.cityState}, {shippingAddress.postalCode}
            </p>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            id="disableReplacements"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="disableReplacements" className="text-sm text-gray-700 flex items-center gap-1">
            Disable part replacements
            <FaQuestionCircle className="text-gray-400 text-xs" />
          </label>
        </div>
        {/* Footer with Checkbox, Summary, and Buttons */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Top Section - Checkbox and Order Summary */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
            {/* Left Side - Checkbox */}
            <div className="flex items-center gap-2">

            </div>

            {/* Right Side - Order Summary */}
            <div className="text-right">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-8 mb-2">
                  <span className="text-gray-600">{getTotalItems()} items</span>
                  <span className="text-gray-800 font-medium">₹{getSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-gray-600">Delivery Charge:</span>
                  <span className="text-gray-800 font-medium">₹{totalDeliveryCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-gray-600">Platform Fee:</span>
                  <span className="text-gray-800 font-medium">₹{platformFee.toFixed(2)}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-600">
                      Total Savings ({itemsWithSavings} {itemsWithSavings === 1 ? 'item' : 'items'}):
                    </span>
                    <span className="text-green-600 font-medium">₹{totalSavings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between gap-8 items-center">
                  <span className="text-gray-600">boodmo Points to be earned:</span>
                  <span className="text-blue-600 font-medium flex items-center gap-1">
                    {boodmoPoints}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                </div>
                <div className="flex justify-between gap-8 pt-2 border-t border-gray-200">
                  <span className="text-lg font-semibold text-gray-800">Grand Total:</span>
                  <span className="text-2xl font-bold text-gray-800">₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <FaArrowLeft />
              Back
            </button>

            <button
              onClick={handleContinue}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;