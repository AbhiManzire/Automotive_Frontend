import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// Sample ProductCard
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border hover:shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-gray-800 font-semibold line-clamp-2 mb-2">
          {product.name}
        </h3>
        <div className="mt-auto">
          {product.discountPrice ? (
            <div className="flex items-baseline space-x-2">
              <span className="text-lg font-bold text-red-600">
                ₹{product.discountPrice}
              </span>
              <span className="text-sm line-through text-gray-500">
                ₹{product.price}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-800">
              ₹{product.price}
            </span>
          )}
          <button
            className="mt-3 w-full bg-blue-600 text-white rounded px-3 py-2 hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Pagination component
const Pagination = ({ page, pageSize, total, onPageChange }) => {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="p-2 bg-gray-200 rounded disabled:opacity-50"
      >
        <FaChevronLeft />
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="p-2 bg-gray-200 rounded disabled:opacity-50"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export const MaintenanceCatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    makers: [],
    categories: [],
    priceMin: null,
    priceMax: null,
  });
  const [sortBy, setSortBy] = useState("relevance");
  const [page, setPage] = useState(1);
  const pageSize = 24;
  const [total, setTotal] = useState(0);
  const [isFilterOpenMobile, setIsFilterOpenMobile] = useState(false);

  // Fetch data from your API
  const fetchCatalog = async () => {
    // Replace with your real API call
    const queryParams = new URLSearchParams();
    queryParams.set("page", page.toString());
    queryParams.set("pageSize", pageSize.toString());
    if (filters.makers.length > 0) {
      queryParams.set("makers", filters.makers.join(","));
    }
    if (filters.priceMin != null) {
      queryParams.set("priceMin", filters.priceMin.toString());
    }
    if (filters.priceMax != null) {
      queryParams.set("priceMax", filters.priceMax.toString());
    }
    queryParams.set("sortBy", sortBy);

    const res = await fetch(`/api/catalog/3403?${queryParams.toString()}`);
    const json = await res.json();
    setProducts(json.products);
    setTotal(json.total);
    // You might also want to store available filter facets etc.
  };

  useEffect(() => {
    fetchCatalog();
  }, [page, filters, sortBy]);

  const toggleMaker = (maker) => {
    setFilters((prev) => {
      const makers = prev.makers.includes(maker)
        ? prev.makers.filter((m) => m !== maker)
        : [...prev.makers, maker];
      return { ...prev, makers };
    });
    setPage(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Maintenance & Service Parts</h1>

        <div className="flex">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-64 pr-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold mb-2">Filter by Maker</h2>
              {["Toyota", "Honda", "Maruti", "Hyundai"].map((maker) => (
                <label key={maker} className="block mb-1">
                  <input
                    type="checkbox"
                    value={maker}
                    checked={filters.makers.includes(maker)}
                    onChange={() => toggleMaker(maker)}
                    className="mr-2"
                  />
                  {maker}
                </label>
              ))}
              <hr className="my-4" />
              <h2 className="font-semibold mb-2">Sort by</h2>
              <select
                className="w-full border px-2 py-1 rounded"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
              >
                <option value="relevance">Relevance</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsFilterOpenMobile(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Filters & Sort
              </button>

              {isFilterOpenMobile && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
                  <div className="bg-white w-2/3 max-w-sm p-4">
                    <button
                      className="mb-4 text-gray-600"
                      onClick={() => setIsFilterOpenMobile(false)}
                    >
                      Close
                    </button>
                    <div className="space-y-4">
                      <div>
                        <h2 className="font-semibold mb-2">Maker</h2>
                        {["Toyota", "Honda", "Maruti", "Hyundai"].map(
                          (maker) => (
                            <label key={maker} className="block mb-1">
                              <input
                                type="checkbox"
                                value={maker}
                                checked={filters.makers.includes(maker)}
                                onChange={() => toggleMaker(maker)}
                                className="mr-2"
                              />
                              {maker}
                            </label>
                          )
                        )}
                      </div>
                      <div>
                        <h2 className="font-semibold mb-2">Sort by</h2>
                        <select
                          className="w-full border px-2 py-1 rounded"
                          value={sortBy}
                          onChange={(e) => {
                            setSortBy(e.target.value);
                            setPage(1);
                          }}
                        >
                          <option value="relevance">Relevance</option>
                          <option value="priceAsc">Price: Low to High</option>
                          <option value="priceDesc">Price: High to Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-1"
                    onClick={() => setIsFilterOpenMobile(false)}
                  ></div>
                </div>
              )}
            </div>

            {/* Grid of products */}
            {products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <p>No products found.</p>
            )}

            <Pagination
              page={page}
              pageSize={pageSize}
              total={total}
              onPageChange={(newPage) => {
                if (newPage >= 1 && newPage <= Math.ceil(total / pageSize)) {
                  setPage(newPage);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
