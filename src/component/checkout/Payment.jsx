import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaMapMarkerAlt, FaFileAlt, FaCreditCard, FaArrowLeft, FaCheck, FaLock, FaTimes } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getSubtotal, getTotalItems, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);
  
  // Payment form data
  const [paymentData, setPaymentData] = useState({
    upiId: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    bankName: '',
    paytmPhone: '',
  });

  useEffect(() => {
    const savedAddress = localStorage.getItem('shippingAddress');
    if (savedAddress) {
      setShippingAddress(JSON.parse(savedAddress));
    } else {
      navigate('/checkout/address');
    }
  }, [navigate]);

  // Calculate totals
  const deliveryCharge = getSubtotal() >= 500 ? 0 : 84;
  const platformFee = 120;
  const grandTotal = getTotalPrice() + deliveryCharge + platformFee;

  const paymentOptions = [
    {
      id: 'paytm',
      name: 'Paytm',
      icon: '💳',
      description: 'Pay using Paytm Wallet or UPI',
    },
    {
      id: 'razorpay',
      name: 'Razorpay',
      icon: '💳',
      description: 'Pay using Razorpay Gateway',
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: '📱',
      description: 'Pay using UPI (Google Pay, PhonePe, etc.)',
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Pay using Credit or Debit Card',
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: '🏦',
      description: 'Pay using Net Banking',
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: '💰',
      description: 'Pay when you receive the order',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setPaymentData(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setPaymentData(prev => ({ ...prev, expiryDate: formatted }));
  };

  const validatePaymentData = () => {
    switch (selectedPayment) {
      case 'upi':
        if (!paymentData.upiId || !paymentData.upiId.includes('@')) {
          alert('Please enter a valid UPI ID (e.g., yourname@paytm)');
          return false;
        }
        break;
      case 'card':
        if (!paymentData.cardNumber || paymentData.cardNumber.replace(/\s/g, '').length < 16) {
          alert('Please enter a valid 16-digit card number');
          return false;
        }
        if (!paymentData.cardName) {
          alert('Please enter name on card');
          return false;
        }
        if (!paymentData.expiryDate || paymentData.expiryDate.length < 5) {
          alert('Please enter valid expiry date (MM/YY)');
          return false;
        }
        if (!paymentData.cvv || paymentData.cvv.length < 3) {
          alert('Please enter valid CVV');
          return false;
        }
        break;
      case 'netbanking':
        if (!paymentData.bankName) {
          alert('Please select a bank');
          return false;
        }
        break;
      case 'paytm':
        if (!paymentData.paytmPhone || paymentData.paytmPhone.length < 10) {
          alert('Please enter a valid Paytm phone number');
          return false;
        }
        break;
      case 'cod':
        return true; // No validation needed for COD
      case 'razorpay':
        return true; // Will redirect to Razorpay gateway
      default:
        return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }
    
    // Skip validation for COD and Razorpay
    if (selectedPayment !== 'cod' && selectedPayment !== 'razorpay') {
      if (!validatePaymentData()) {
        return;
      }
    }

    // Create order object
    const orderId = `ORD-${Date.now()}`;
    const orderDate = new Date().toISOString();
    
    // Group items by seller for packages
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
    const getDeliveryCharge = (packageTotal) => {
      return packageTotal >= 500 ? 0 : 58;
    };
    const totalDeliveryCharge = packages.reduce((total, pkg) => {
      const packageTotal = pkg.items.reduce((sum, item) => {
        return sum + ((item.discountPrice || item.price) * item.quantity);
      }, 0);
      return total + getDeliveryCharge(packageTotal);
    }, 0);
    const platformFee = Math.max(packages.length * 16, 32);

    const order = {
      id: orderId,
      date: orderDate,
      status: 'In-Progress', // Default status
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        brand: item.brand,
        imageUrl: item.imageUrl,
        price: item.price,
        discountPrice: item.discountPrice,
        quantity: item.quantity,
        seller: item.seller || "Default Seller",
        partNumber: item.partNumber || item.id,
      })),
      packages: packages,
      shippingAddress: shippingAddress,
      paymentMethod: paymentOptions.find(p => p.id === selectedPayment)?.name || selectedPayment,
      paymentDetails: selectedPayment === 'cod' || selectedPayment === 'razorpay' 
        ? null 
        : { ...paymentData, method: selectedPayment },
      subtotal: getSubtotal(),
      deliveryCharge: totalDeliveryCharge,
      platformFee: platformFee,
      total: grandTotal,
      totalItems: getTotalItems(),
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.unshift(order); // Add new order at the beginning
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Clear cart
    clearCart();

    // Clear shipping address (optional - you might want to keep it)
    // localStorage.removeItem('shippingAddress');

    // Show success message and navigate
    alert(`Order placed successfully! Order ID: ${orderId}`);
    navigate('/myorder');
  };

  const banks = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Kotak Mahindra Bank',
    'Punjab National Bank',
    'Bank of Baroda',
    'Canara Bank',
    'Union Bank of India',
    'Indian Bank',
  ];

  // Render payment form based on selected method
  const renderPaymentForm = () => {
    if (!selectedPayment) return null;

    switch (selectedPayment) {
      case 'upi':
        return (
          <div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                UPI ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="upiId"
                value={paymentData.upiId}
                onChange={handleInputChange}
                placeholder="yourname@paytm or yourname@ybl"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Enter your UPI ID (e.g., yourname@paytm, yourname@ybl, yourname@okaxis)
              </p>
            </div>
          </div>
        );

      case 'card':
        return (
          <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Name on Card <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    CVV <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <FaLock className="text-gray-400" />
                <span>Your payment information is secure and encrypted</span>
              </div>
          </div>
        );

      case 'netbanking':
        return (
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Bank Name <span className="text-red-500">*</span>
            </label>
            <select
              name="bankName"
              value={paymentData.bankName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            >
              <option value="">Select your bank</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        );

      case 'paytm':
        return (
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Paytm Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="w-20">
                <input
                  type="text"
                  value="+91"
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-center font-medium"
                />
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  name="paytmPhone"
                  value={paymentData.paytmPhone}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Enter the mobile number linked to your Paytm account
            </p>
          </div>
        );

      case 'razorpay':
        return (
          <div>
            <p className="text-xs text-gray-600 mb-4">
              You will be redirected to Razorpay's secure payment gateway to complete your transaction.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-blue-800">
                <strong>Secure Payment:</strong> Your payment will be processed securely by Razorpay. 
                We do not store your payment information.
              </p>
            </div>
          </div>
        );

      case 'cod':
        return (
          <div>
            <p className="text-xs text-gray-600 mb-4">
              You will pay the order amount (₹{grandTotal.toFixed(2)}) when you receive your order.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> Please keep exact change ready for delivery.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!shippingAddress) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mt-12 md:mt-16 mb-8">
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
            <button
              onClick={() => navigate('/checkout/review')}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <FaFileAlt className="text-blue-600 text-lg" />
              </div>
              <span className="text-sm text-blue-600 font-medium">Review</span>
            </button>
            <div className="h-1 w-16 md:w-24 bg-blue-600"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <FaCreditCard className="text-white text-lg" />
              </div>
              <span className="text-sm text-blue-600 font-semibold">Pay</span>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-blue-900">Payment</span>{" "}
          <span className="text-blue-500">Method</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Options */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Select Payment Method</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedPayment(option.id);
                      setShowPaymentModal(true);
                    }}
                    className={`relative p-4 border-2 rounded-lg text-left transition-all ${
                      selectedPayment === option.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    {selectedPayment === option.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs" />
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{option.icon}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">{option.name}</h3>
                        <p className="text-xs text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Payment Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm text-gray-700">
                  <span>{getTotalItems()} items</span>
                  <span>₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Delivery Charge</span>
                  <span>₹{deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Platform Fee</span>
                  <span>₹{platformFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-gray-800">Grand Total</span>
                  <span className="text-xl font-bold text-gray-800">₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 flex items-center justify-between bg-white rounded-lg shadow-sm p-6">
          <button
            onClick={() => navigate('/checkout/review')}
            className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold"
          >
            <FaArrowLeft />
            Back
          </button>
          
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-gray-600">Payment Amount</p>
              <p className="text-xl font-bold text-blue-900">₹{grandTotal.toFixed(2)}</p>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={!selectedPayment}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-colors ${
                selectedPayment
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Place order
            </button>
          </div>
        </div>
      </div>

      {/* Payment Details Modal */}
      {showPaymentModal && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
              <h2 className="text-xl font-semibold text-gray-800">
                {paymentOptions.find(p => p.id === selectedPayment)?.name} Payment Details
              </h2>
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  // Reset form data if user cancels
                  if (selectedPayment !== 'cod' && selectedPayment !== 'razorpay') {
                    setPaymentData({
                      upiId: '',
                      cardNumber: '',
                      cardName: '',
                      expiryDate: '',
                      cvv: '',
                      bankName: '',
                      paytmPhone: '',
                    });
                  }
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Modal Body - Payment Form */}
            <div className="p-6">
              {renderPaymentForm()}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-4 p-6 border-t border-gray-200 sticky bottom-0 bg-white">
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  if (selectedPayment !== 'cod' && selectedPayment !== 'razorpay') {
                    setPaymentData({
                      upiId: '',
                      cardNumber: '',
                      cardName: '',
                      expiryDate: '',
                      cvv: '',
                      bankName: '',
                      paytmPhone: '',
                    });
                  }
                }}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // For COD and Razorpay, no validation needed
                  if (selectedPayment === 'cod' || selectedPayment === 'razorpay') {
                    setShowPaymentModal(false);
                    return;
                  }
                  // For other methods, validate before closing
                  if (validatePaymentData()) {
                    setShowPaymentModal(false);
                  }
                }}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;