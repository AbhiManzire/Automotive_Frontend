import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { FaMapMarkerAlt, FaCreditCard, FaBox, FaTruck, FaCheckCircle, FaTimesCircle, FaUndo } from 'react-icons/fa';

export const MyOrder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("In-Progress");
  const [orders, setOrders] = useState([]);

  const tabs = ["In-Progress", "Delivered", "Returned", "Cancelled"];

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  // Filter orders by status
  const filteredOrders = orders.filter(order => {
    if (activeTab === "In-Progress") return order.status === "In-Progress";
    if (activeTab === "Delivered") return order.status === "Delivered";
    if (activeTab === "Returned") return order.status === "Returned";
    if (activeTab === "Cancelled") return order.status === "Cancelled";
    return false;
  });

  // Count orders by status
  const getOrderCount = (status) => {
    return orders.filter(order => order.status === status).length;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'In-Progress':
        return <FaBox className="text-blue-500" />;
      case 'Delivered':
        return <FaCheckCircle className="text-green-500" />;
      case 'Returned':
        return <FaUndo className="text-orange-500" />;
      case 'Cancelled':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaBox className="text-gray-500" />;
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'In-Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Returned':
        return 'bg-orange-100 text-orange-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Open Google Maps with address
  const handleOpenMap = (address) => {
    const fullAddress = `${address.address}, ${address.cityState}, ${address.postalCode}`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            My <span className="text-red-500">Orders</span>
          </h1>
          <Navbar />
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 md:space-x-10 border-b border-gray-300 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-sky-500 border-b-2 border-sky-500"
                  : "text-gray-500 hover:text-sky-500"
              }`}
            >
              {tab} ({getOrderCount(tab)})
            </button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl shadow-sm">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-gray-600 text-lg mb-4">
              No {activeTab} orders
            </p>
            <Link
              to="/"
              className="bg-red-400 hover:bg-red-500 text-white px-6 py-4 rounded-md transition"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">
                        {getStatusIcon(order.status)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Order #{order.id}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Placed on {formatDate(order.date)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="text-xl font-bold text-gray-800">
                          ₹{order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0"
                      >
                        <img
                          src={item.imageUrl || "https://via.placeholder.com/100"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {item.partNumber || item.id}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            Brand: {item.brand || "N/A"} | Sold by: {item.seller}
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </span>
                            <span className="text-lg font-semibold text-gray-800">
                              ₹
                              {(
                                (item.discountPrice || item.price) *
                                item.quantity
                              ).toFixed(2)}
                            </span>
                            {item.discountPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Shipping Address */}
                    {order.shippingAddress && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-gray-600" />
                            <h4 className="font-semibold text-gray-800">
                              Shipping Address
                            </h4>
                          </div>
                          <button
                            onClick={() => handleOpenMap(order.shippingAddress)}
                            className="flex items-center gap-1 hover:opacity-80 transition-colors cursor-pointer text-sm"
                            title="Open in Google Maps"
                            style={{ color: '#EA4335' }}
                          >
                            <FaMapMarkerAlt className="text-sm" />
                            <span>View Map</span>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">
                          {order.shippingAddress.name} - {order.shippingAddress.mobile}
                        </p>
                        <p className="text-sm text-gray-600">
                          {order.shippingAddress.address}, {order.shippingAddress.cityState}, {order.shippingAddress.postalCode}
                        </p>
                      </div>
                    )}

                    {/* Payment Method */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaCreditCard className="text-gray-600" />
                        <h4 className="font-semibold text-gray-800">
                          Payment Method
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        {order.paymentMethod}
                      </p>
                    </div>
                  </div>

                  {/* Order Totals */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Subtotal ({order.totalItems} items)</span>
                      <span>₹{order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Delivery Charge</span>
                      <span>₹{order.deliveryCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Platform Fee</span>
                      <span>₹{order.platformFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹{order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
