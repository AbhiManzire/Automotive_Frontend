import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import SearchFilterBar from "./SearchFilterBar";
import CatalogueSidebar from "./CatalogueSidebar";

const engineCategories = [
  {
    id: 1,
    name: "Air Intake System",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/85c2d4c.jpg",
    link: "/catalog/engine_air_intake_system/",
  },
  {
    id: 2,
    name: "Camshaft & Valve Mechanism",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/33c4b3d.jpg",
    link: "/catalog/engine_camshaft_valve_mechanism/",
  },
  {
    id: 3,
    name: "Cylinder Block",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/91af2b8.jpg",
    link: "/catalog/engine_cylinder_block/",
  },
  {
    id: 4,
    name: "Cylinder Head",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/1a5f02a.jpg",
    link: "/catalog/engine_cylinder_head/",
  },
  {
    id: 5,
    name: "Engine Gaskets",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/dc8dbe9.jpg",
    link: "/catalog/engine_gaskets/",
  },
  {
    id: 6,
    name: "Fuel System",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/4a4f9f0.jpg",
    link: "/catalog/engine_fuel_system/",
  },
  {
    id: 7,
    name: "Lubrication System",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/0cc8c6a.jpg",
    link: "/catalog/engine_lubrication_system/",
  },
  {
    id: 8,
    name: "Mountings",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/5237c0d.jpg",
    link: "/catalog/engine_mountings/",
  },
  {
    id: 9,
    name: "Pistons & Crank Mechanism",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/0dce8b6.jpg",
    link: "/catalog/engine_pistons_crank_mechanism/",
  },
  {
    id: 10,
    name: "Timing System",
    img: "https://boodmo.com/media/cache/catalog_image/images/categories/cc22ef9.jpg",
    link: "/catalog/engine_timing_system/",
  },
];

const Engine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(engineCategories);

  useEffect(() => {
    const filtered = engineCategories.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...filteredProducts];
    if (value === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredProducts(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Engine Parts
          </h1>
          <p className="text-gray-600">
            Explore a complete range of engine components — cylinder heads, gaskets,
            pistons, fuel systems, and more.
          </p>
        </div>

        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          handleSort={handleSort}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          categoryName="Engine"
        />

        <div className="flex gap-6">
          <CatalogueSidebar />

          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={product.link}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md mb-3 mx-auto"
                  />
                  <span className="text-gray-800 font-medium">{product.name}</span>
                </Link>
              ))}
            </div>

            {/* SEO Content Section */}
            <section className="bg-white text-gray-800 py-10 px-6 max-w-5xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-red-700 border-b-2 border-red-300 inline-block pb-2">
                  Engine Parts Overview
                </h2>

                <p className="font-medium leading-relaxed">
                  The engine is the heart of any vehicle. It converts fuel into energy,
                  powering all movement. A healthy engine requires proper maintenance and
                  reliable components.
                </p>

                <p className="font-medium leading-relaxed">
                  From the{" "}
                  <a
                    href="/catalog/engine_cylinder_block/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    cylinder block
                  </a>{" "}
                  and pistons to the{" "}
                  <a
                    href="/catalog/engine_camshaft_valve_mechanism/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    valve mechanism
                  </a>
                  , every part plays a key role in smooth operation and performance.
                </p>

                <p className="font-medium leading-relaxed">
                  Whether you’re replacing a{" "}
                  <a
                    href="/catalog/engine_gaskets/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    gasket
                  </a>{" "}
                  or tuning your{" "}
                  <a
                    href="/catalog/engine_timing_system/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    timing system
                  </a>
                  , quality parts ensure durability, efficiency, and reliability on the road.
                </p>

                <div className="text-center mt-8">
                  <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-md">
                    View Less
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

export default Engine;
