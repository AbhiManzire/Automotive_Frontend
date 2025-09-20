import React, { useState } from 'react'
import { Navbar } from './Navbar'

export const MyOrder = () => {
  const [activeTab, setActiveTab] = useState("Cancelled");

  const tabs = ["In-Progress", "Delivered", "Returned", "Cancelled"];

  return (<div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-5 py-5 pb-3">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
        My <span className="text-sky-500">Orders</span>
      </h1>
      <Navbar />
    </div>

    {/* Tabs */}
    <div className="flex space-x-10 border-b border-gray-300 px-10 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab} 
          onClick={() => setActiveTab(tab)}
          className={`pb-2 px-1 font-medium ${activeTab === tab
            ? "text-sky-500 border-b-2 border-sky-500"
            : "text-gray-500 hover:text-sky-500"
            }`}
        >
          {tab} (0)
        </button>
      ))}
    </div>

    {/* Content */}
    <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl shadow-sm">
      <p className="text-gray-600 text-lg mb-4">
        No {activeTab} orders
      </p>
      <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-4 rounded-md transition">
        Continue shopping
      </button>
    </div>
  </div >
  )

}
