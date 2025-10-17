import React from "react";
import {
  MdShoppingCart,
  MdLocalShipping,
  MdDone,
  MdOutlineHome,
  MdOutlinePayment,
  MdOutlineInventory,
} from "react-icons/md";

const shippingSteps = [
  { name: "Order Placed", icon: <MdShoppingCart /> },
  { name: "Processing", icon: <MdOutlineInventory /> },
  { name: "Payment Confirmed", icon: <MdOutlinePayment /> },
  { name: "Shipped", icon: <MdLocalShipping /> },
  { name: "Out for Delivery", icon: <MdOutlineHome /> },
  { name: "Delivered", icon: <MdDone /> },
];

export default function ShippingStatus({ currentStep = 3 }) {
  return (
    <div className="flex flex-col items-center p-8 md:p-12 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 rounded-2xl shadow-2xl w-full max-w-6xl mx-auto border border-gray-200">
      {/* Header 🚚 */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800 tracking-wide">
         Shipping Progress Tracker
      </h2>

      {/* Steps */}
      <div className="relative flex flex-wrap justify-between items-center w-full px-4 md:px-10">
        {shippingSteps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center relative flex-1 min-w-[80px]">
              {/* Connector line */}
              {index < shippingSteps.length - 1 && (
                <div
                  className={`absolute top-1/2 left-1/2 h-1 w-full transform -translate-y-1/2 z-0 transition-all duration-700 ${
                    index < currentStep ? "bg-gradient-to-r from-green-400 to-blue-500" : "bg-gray-300"
                  }`}
                />
              )}

              {/* Step icon */}
              <div
                className={`z-10 w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl shadow-md transition-all duration-500 transform hover:scale-110 ${
                  isCompleted
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 ring-4 ring-green-200"
                    : isActive
                    ? "bg-gradient-to-br from-blue-500 to-indigo-600 ring-4 ring-blue-200 animate-pulse"
                    : "bg-gray-300"
                }`}
              >
                {step.icon}
              </div>

              {/* Step label */}
              <span
                className={`text-sm mt-2 font-semibold text-center transition-colors ${
                  isCompleted ? "text-green-600" : isActive ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Status Message */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Current Status:{" "}
          <span className="font-semibold text-blue-600">
            {shippingSteps[currentStep]?.name || "Delivered"}
          </span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Your order is being processed. We’ll notify you once it moves to the next stage.
        </p>
      </div>

      {/* Empty Cart Section */}
      <div className="mt-14 w-full text-center">
        <p className="text-lg border-b-2 border-gray-200 py-3 text-gray-600 mb-6 font-medium">
          🛒 Your Shopping Cart is Empty
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition transform hover:scale-105 shadow-lg">
          Continue Shopping
        </button>
      </div>

      {/* Categories Section */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {["Electronics", "Lighting", "Car Accessories", "Filters", "Maintenance Service Parts", "Bearings"].map((cat) => (
          <div
            key={cat}
            className="bg-white shadow-md hover:shadow-xl rounded-xl p-4 text-center cursor-pointer transition transform hover:-translate-y-2"
          >
            <p className="text-gray-700 font-semibold">{cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
