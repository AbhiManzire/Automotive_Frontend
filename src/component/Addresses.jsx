import React from 'react'
import { Navbar } from './Navbar'

export const Addresses = () => {
  return (
    <div className="px-10 py-10">
   
         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
           <h1 className="text-3xl font-bold text-gray-800">
             My <span className="text-sky-500">Wishlist</span>
           </h1>
           <Navbar />
         </div>
   
         <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-6">
           <h2 className="text-cyan-800 font-semibold text-2xl mb-4">
             No Address Added
           </h2>
           <p className="text-gray-700 mb-6">
         Save delivery address here and select it during Checkout
           </p>
           <button className="bg-sky-400 hover:bg-sky-500 text-white rounded py-4 px-6 font-semibold">
            Add Address now
           </button>
         </div>
       </div>
  )
}
