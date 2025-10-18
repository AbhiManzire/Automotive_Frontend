import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ProductCard component
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
          <button className="mt-3 w-full bg-blue-600 text-white rounded px-3 py-2 hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Pagination Component
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

// VehicleFilter component
const VehicleFilter = ({ onSelectMaker }) => {
  const [selectedMaker, setSelectedMaker] = useState("");

  const popularCarmakers = [
    "CHEVROLET",
    "FIAT",
    "FORD",
    "HONDA",
    "HYUNDAI",
    "KIA",
    "MAHINDRA",
    "MARUTI",
    "NISSAN",
    "RENAULT",
    "SKODA",
    "TATA",
    "TOYOTA",
    "VW",
  ];

  const allCarmakers = [
    "ASHOK LEYLAND",
    "AUDI",
    "BMW",
    "BYD",
    "CHEVROLET",
    "CITROEN",
    "DAEWOO",
    "DATSUN",
    "FIAT",
    "FORCE",
    "FORD",
    "HINDUSTAN MOTORS",
    "HONDA",
    "HYUNDAI",
    "ICML",
    "ISUZU",
    "JAGUAR",
    "JEEP",
    "KIA",
    "LAND ROVER",
    "LEXUS",
    "MAHINDRA",
    "MARUTI",
    "MERCEDES-BENZ",
    "MINI",
    "MITSUBISHI",
    "MORRIS GARAGES",
    "NISSAN",
    "OPEL",
    "PORSCHE",
    "PREMIER",
    "RENAULT",
    "SKODA",
    "TATA",
    "TOYOTA",
    "VOLVO",
    "VW",
  ];

  return (
    <div className="mb-4">
      <label
        htmlFor="vehicleMaker"
        className="block text-gray-700 font-medium mb-2"
      >
        Choose Car Maker
      </label>
      <select
        id="vehicleMaker"
        value={selectedMaker}
        onChange={(e) => {
          setSelectedMaker(e.target.value);
          onSelectMaker(e.target.value);
        }}
        className="w-full border border-gray-300 text-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Choose car maker</option>
        <optgroup label="Popular carmakers">
          {popularCarmakers.map((maker) => (
            <option key={maker} value={maker}>
              {maker}
            </option>
          ))}
        </optgroup>
        <optgroup label="Carmakers in alphabetical order">
          {allCarmakers.map((maker) => (
            <option key={maker} value={maker}>
              {maker}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

// Main Page Component
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
  const [total, setTotal] = useState(0);
  const [isFilterOpenMobile, setIsFilterOpenMobile] = useState(false);
  const pageSize = 24;

  // Fetch Data
  const fetchCatalog = async () => {
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
  };

  useEffect(() => {
    fetchCatalog();
  }, [page, filters, sortBy]);

  // Handle maker selection
  const toggleMaker = (maker) => {
    setFilters((prev) => {
      const makers = prev.makers.includes(maker)
        ? prev.makers.filter((m) => m !== maker)
        : [...prev.makers, maker];
      return { ...prev, makers };
    });
    setPage(1);
  };

  const handleMakerSelect = (maker) => {
    if (!maker) return;
    setFilters((prev) => ({ ...prev, makers: [maker] }));
    setPage(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">
          Maintenance & Service Parts
        </h1>

        <div className="flex">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-64 pr-4">
            <div className="bg-white p-4 rounded shadow">
              {/* New Vehicle Filter */}
              <VehicleFilter onSelectMaker={handleMakerSelect} />

              <hr className="my-4" />
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
                      <VehicleFilter onSelectMaker={handleMakerSelect} />
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

            {/* Product Grid */}
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


            <section class="bg-white text-gray-800 py-10 px-6 max-w-5xl mx-auto">
              <div class="space-y-6">
                {/* <!-- Section Title --> */}
                <h2 class="text-2xl md:text-3xl font-bold text-blue-700 border-b-2 border-blue-300 inline-block pb-2">
                  About Car Maintenance Parts
                </h2>

                {/* <!-- Intro Paragraphs --> */}
                <p class="font-medium leading-relaxed">
                  There are regular maintenance parts like oil and air filters, headlights, drive belts, brake pads,
                  wheel speed, humidity and temperature sensors, joints, and others. They may last longer, though, of
                  course, the result depends on driving habits and environment conditions.
                </p>

                <p class="font-medium leading-relaxed">
                  It is vital to take preventative measures with maintenance to avoid paying to the mechanics. If you
                  inspect a car regularly, it will run in a smooth and safe manner longer. Thus you should look through
                  an owner’s manual for your car covering all its components and suggested maintenance schedule. It will
                  tell you how often you should change fluids or replace parts.
                </p>

                {/* <!-- Replacement Timing --> */}
                <h3 class="text-xl font-semibold text-blue-700 mt-8">
                  When should car maintenance part be replaced?
                </h3>
                <p class="font-medium leading-relaxed">
                  The car makers usually determine the time when maintenance should be performed. The timing difference
                  is associated with mileage. Some maintenance service parts should be replaced already after 30,000 miles.
                  The others will last until the car runs 90,000 miles. Anyway, when getting every service, you should
                  take care of:
                </p>

                {/* <!-- List --> */}
                <ul class="list-disc list-inside space-y-2 ml-4 text-gray-700 font-medium">
                  <li>Engine oil and other fluids which should not look muddy and dark.</li>
                  <li>Battery which provides a car with power making it run smoothly.</li>
                  <li>Tires which should have enough air inside and do not go too low.</li>
                  <li>
                    Filters, including the air and cabin ones protecting an engine and cabin from dirt and various contaminants.
                  </li>
                  <li>Belts which may lose tension, crack or fray and other parts.</li>
                </ul>

                {/* <!-- Advantages --> */}
                <h3 class="text-xl font-semibold text-blue-700 mt-8">Our Advantages</h3>
                <p class="font-medium leading-relaxed">
                  When you choose <span class="text-blue-600 font-semibold">Sparelo</span> — India's largest online marketplace
                  for car spare parts and accessories, you get access to the best services and the richest database of
                  products in the national market. You can count to:
                </p>

                {/* <!-- Ordered List --> */}
                <ol class="list-decimal list-inside space-y-2 ml-4 text-gray-700 font-medium">
                  <li>
                    Get a limited, revocable license to use our online platform to benefit from all options and services
                    for your own personal purpose.
                  </li>
                  <li>
                    Choose from a large number of quality aftermarket and OEM items provided by reputable manufacturers
                    and suppliers.
                  </li>
                  <li>
                    Get updated and accurate information about the products and services including their prices, pictures,
                    and specifications.
                  </li>
                  <li>
                    Pay for goods from international cards though they can be delivered only within the territory of India.
                  </li>
                </ol>

                {/* <!-- Closing Paragraph --> */}
                <p class="font-medium leading-relaxed">
                  Do you have any problems with your car? Fix it by signing in on our platform or exploring
                  <span class="text-blue-600 font-semibold">Sparelo’s</span> unmatched catalogue with the widest range
                  of car spare parts — even without registration. We are sure you will find the replacement you need!
                </p>

                {/* <!-- View More Button --> */}
                <div class="text-center mt-8">
                  <button
                    class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-md"
                  >
                    View More
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
