import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { PiNotepadFill } from 'react-icons/pi';

const Cart = () => {
  const steps = [
    { name: 'Cart', icon: <MdShoppingCart /> },
    { name: 'Address', icon: <FaLocationDot /> },
    { name: 'Review', icon: <PiNotepadFill /> },
    { name: 'Pay', icon: <FaSackDollar /> },
  ];

  return (
    <div className="flex flex-col bg-white">
      
      <div className="relative bg-blue-50 py-10">
        <div className="relative z-10 flex justify-center gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-blue-600 w-24 relative">
              {/* Line between icons */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 left-full w-12 h-0.5 bg-blue-300 z-0"></div>
              )}

              <div className="w-14 h-14 flex items-center justify-center bg-gray-200 border-2 border-gray-300 rounded-full text-3xl z-10">
                {step.icon}
              </div>

              {/* Label */}
              <span className="mt-2 text-sm text-center">{step.name}</span>
            </div>
          ))}
        </div>
      </div>


      <div className=" font-semibold my-12">
        <p className="text-lg border-b-2 py-2 text-gray-600 mb-4">Shopping cart is empty</p>
        <button className="border border-black hover:border-white text-black-600 px-4 py-3 rounded hover:bg-sky-400 hover:text-white transition">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
