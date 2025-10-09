// import React from 'react';
// import { MdShoppingCart } from 'react-icons/md';
// import { FaLocationDot, FaSackDollar } from 'react-icons/fa6';
// import { PiNotepadFill } from 'react-icons/pi';

// const Cart = () => {
//   const steps = [
//     { name: 'Cart', icon: <MdShoppingCart /> },
//     { name: 'Address', icon: <FaLocationDot /> },
//     { name: 'Review', icon: <PiNotepadFill /> },
//     { name: 'Pay', icon: <FaSackDollar /> },
//   ];

//   return (
//     <div className="flex flex-col bg-white">

//       <div className="relative bg-blue-50 py-10">
//         <div className="relative z-10 flex justify-center gap-12">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center text-blue-600 w-24 relative">
//               {/* Line between icons */}
//               {index < steps.length - 1 && (
//                 <div className="absolute top-1/2 left-full w-12 h-0.5 bg-blue-300 z-0"></div>
//               )}

//               <div className="w-14 h-14 flex items-center justify-center bg-gray-200 border-2 border-gray-300 rounded-full text-3xl z-10">
//                 {step.icon}
//               </div>

//               {/* Label */}
//               <span className="mt-2 text-sm text-center">{step.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>


//       <div className=" font-semibold my-12">
//         <p className="text-lg border-b-2 py-2 text-gray-600 mb-4">Shopping cart is empty</p>
//         <button className="border border-black hover:border-white text-black-600 px-4 py-3 rounded hover:bg-red-400 hover:text-white transition">
//           Continue shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;














import React from "react";
import { MdShoppingCart, MdLocalShipping, MdDone, MdOutlineHome } from "react-icons/md";

const shippingSteps = [
  { name: "Order Placed", icon: <MdShoppingCart /> },
  { name: "Processing", icon: <MdDone /> },
  { name: "Shipped", icon: <MdLocalShipping /> },
  { name: "Out for Delivery", icon: <MdOutlineHome /> },
  { name: "Delivered", icon: <MdDone /> },
];

export default function ShippingStatus({ currentStep = 2 }) {
  // currentStep: 0-based index for progress
  return (
    <div className="flex flex-col items-center p-6 py-20 bg-white rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Shipping Status</h2>

      <div className="relative flex justify-between items-center w-full">
        {shippingSteps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center relative w-1/5">
              {/* Connector line */}
              {index < shippingSteps.length - 1 && (
                <div
                  className={`absolute top-1/2 left-full h-1 w-full transform -translate-y-1/2 ${index < currentStep ? "bg-green-500" : "bg-gray-300"
                    }`}
                />
              )}

              {/* Step icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl mb-2
                  ${isCompleted ? "bg-green-500" : isActive ? "bg-blue-500 scale-110 shadow-lg" : "bg-gray-300"}`}
              >
                {step.icon}
              </div>

              {/* Step label */}
              <span
                className={`text-xs text-center font-medium ${isCompleted ? "text-green-500" : isActive ? "text-blue-500" : "text-gray-500"
                  }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Optional Message */}
      {/* <p className="mt-6 text-gray-600 text-center">
        Your package is currently <span className="font-semibold text-blue-500">{shippingSteps[currentStep].name}</span>.
      </p> */}

     
      <div className=" font-semibold my-12">
        <p className="text-lg border-b-2 py-2 text-gray-600 mb-4">Shopping cart is empty</p>
        <button className="border border-black hover:border-white text-black-600 px-4 py-3 rounded hover:bg-red-400 hover:text-white transition">
          Continue shopping
        </button>
      </div> 

    </div>
  );
}
