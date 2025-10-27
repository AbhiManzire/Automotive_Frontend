import React from "react";
import { Link } from "react-router-dom";
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

const categories = [
  { name: "Electronics", link: "/catalog/electric_components" },
  { name: "Lighting", link: "/catalog/lighting" },
  { name: "Car Accessories", link: "/catalog/car_accessories" },
  { name: "Filters", link: "/catalog/filters" },
  { name: "Maintenance Service Parts", link: "/catalog/maintenance_service_parts" },
  { name: "Bearings", link: "/catalog/bearings" },
];

export default function ShippingStatus({ currentStep = 3 }) {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-10 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 rounded-2xl shadow-2xl w-full max-w-6xl mx-auto border border-gray-200">
      <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-800 text-center tracking-wide">
        Shipping Progress Tracker
      </h2>

      {/* Progress Steps */}
      <div className="relative flex flex-wrap justify-center md:justify-between items-center w-full gap-8 sm:gap-4 md:gap-2 px-2 sm:px-4 md:px-8">
        {shippingSteps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          return (
            <div key={index} className="flex flex-col items-center relative flex-1 min-w-[80px] sm:min-w-[100px] text-center">
              {index < shippingSteps.length - 1 && (
                <div
                  className={`hidden md:block absolute top-1/2 left-1/2 h-1 w-full transform -translate-y-1/2 z-0 transition-all duration-700 ${index < currentStep
                      ? "bg-gradient-to-r from-green-400 to-blue-500"
                      : "bg-gray-300"
                    }`}
                />
              )}
              <div
                className={`z-10 w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white text-xl sm:text-2xl shadow-md transition-all duration-500 transform hover:scale-110 ${isCompleted
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 ring-4 ring-green-200"
                    : isActive
                      ? "bg-gradient-to-br from-blue-500 to-indigo-600 ring-4 ring-blue-200 animate-pulse"
                      : "bg-gray-300"
                  }`}
              >
                {step.icon}
              </div>
              <span
                className={`text-xs sm:text-sm mt-2 font-semibold transition-colors ${isCompleted
                    ? "text-green-600"
                    : isActive
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Status Message */}
      <div className="mt-10 sm:mt-12 text-center">
        <p className="text-base sm:text-lg text-gray-700">
          Current Status:{" "}
          <span className="font-semibold text-blue-600">
            {shippingSteps[currentStep]?.name || "Delivered"}
          </span>
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 px-4">
          Your order is being processed. We’ll notify you once it moves to the next stage.
        </p>
      </div>

      {/* Empty Cart */}
      <div className="mt-10 sm:mt-14 w-full text-center px-2">
        <p className="text-base sm:text-lg border-b-2 border-gray-200 py-3 text-gray-600 mb-6 font-medium">
          🛒 Your Shopping Cart is Empty
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Categories with Links */}
      <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 w-full px-2">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.link}
            className="bg-white shadow-md hover:shadow-xl rounded-xl p-3 sm:p-4 text-center cursor-pointer transition transform hover:-translate-y-2"
          >
            <p className="text-gray-700 font-semibold text-sm sm:text-base">{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
