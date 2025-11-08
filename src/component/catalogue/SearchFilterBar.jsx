import React from "react";
import { FaFilter, FaSort, FaSearch } from "react-icons/fa";

const SearchFilterBar = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  handleSort,
  showFilters,
  setShowFilters,
  categoryName = "parts", // default fallback
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${categoryName.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

      </div>
    </div>
  );
};

export default SearchFilterBar;
