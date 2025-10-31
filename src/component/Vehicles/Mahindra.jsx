import React, { useState } from "react";
import VehicleBreadcrumbs from "./VehicleBreadcrumbs";

export const Mahindra = () => {
  const link =
    "https://oriparts.com/4?back_url_id=https%3A%2F%2Fboodmo.com%2Fcatalog%2Fpart-p-%7Bitem_id%7D%2F&back_url_pn=https%3A%2F%2Fboodmo.com%2Fsearch%2F%7Bpn%7D%2F";

    const [filter, setFilter] = useState("");
  return (
    <section className="min-h-screen py-6">
      {/* Breadcrumbs */}
      <div className="w-full mb-8 px-4">
        <VehicleBreadcrumbs />

        <h1 className="text-3xl px-2 font-bold text-gray-800 uppercase mb-6">
            MAHINDRA
        </h1>

        {/* OEM Catalogue Button */}
        <a
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="border border-1 border-gray-600 mb-2 text-black text-sm rounded-md p-2 transition-all duration-300 hover:bg-red-400"
        >
          View OEM Catalogue
        </a>
      </div>

      {/* Brand Info Section */}
       <div className="heading-filters flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-3 px-4 mb-6">
        {/* Left Section - Heading */}
        <div className="h2-section text-2xl sm:text-3xl font-semibold text-gray-800">
          Choose Your{" "}
          <span className="h2-section__name text-red-500 font-bold">Model</span>
        </div>

        {/* Right Section - Search Input */}
        <div className="heading-filters__action">
          <input
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter Model"
            className="form-control form-control--search w-64 sm:w-72 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition duration-200"
          />
        </div>
      </div>
    </section>
  );
};
