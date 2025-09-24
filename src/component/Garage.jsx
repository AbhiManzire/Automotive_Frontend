import React from 'react'
import { Navbar } from './Navbar'

export const Garage = () => {
  return (
    <div className="px-10 py-10">
  
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My <span className="text-sky-500">Garage</span>
        </h1>
        <Navbar />
      </div>

      <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-6">
        <h2 className="text-cyan-800 font-semibold text-3xl mb-4">No Cars Added</h2>
        <p className="text-gray-700 mb-6">
          Save your cars to My Garage and find spare parts for them in the catalogue with just one click!
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white rounded py-3 px-6 font-semibold">
          Add Cars Now
        </button>
      </div>
    </div>
  )
}
