import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import SearchFilterBar from "./SearchFilterBar";
import CatalogueSidebar from "./CatalogueSidebar";

// Catalog Categories
const catalogCategories = [
  { id: 1, name: "Belt", img: "https://boodmo.com/media/cache/catalog_image/images/categories/ddbeb81.jpg", link: "/catalog/4032-belts/" },
  { id: 2, name: "Brake", img: "https://boodmo.com/media/cache/catalog_image/images/categories/437bfd0.jpg", link: "/catalog/3713-brakes/" },
  { id: 3, name: "Catalogue Service Manual", img: "https://boodmo.com/media/cache/catalog_image/images/categories/140c4a2.jpg", link: "/catalog/4054-catalogues_service_manuals/" },
  { id: 4, name: "Clutch", img: "https://boodmo.com/media/cache/catalog_image/images/categories/e8cb288.jpg", link: "/catalog/4027-clutch/" },
  { id: 5, name: "Engine Oil", img: "https://boodmo.com/media/cache/catalog_image/images/categories/4614ecf.webp", link: "/catalog/5193-engine_oil/" },
  { id: 6, name: "Filter", img: "https://boodmo.com/media/cache/catalog_image/images/categories/33d30ef.jpg", link: "/catalog/3625-filters/" },
  { id: 7, name: "Glow Plug", img: "https://boodmo.com/media/cache/catalog_image/images/categories/d6d71f0.jpg", link: "/catalog/4385-glow_plug/" },
  { id: 8, name: "Horn", img: "https://boodmo.com/media/cache/catalog_image/images/categories/d5b3ac7.jpg", link: "/catalog/4064-horns/" },
  { id: 9, name: "Light", img: "https://boodmo.com/media/cache/catalog_image/images/categories/53380d3.webp", link: "/catalog/4028-light/" },
  { id: 10, name: "Repair Service Kit", img: "https://boodmo.com/media/cache/catalog_image/images/categories/5f75a07.jpg", link: "/catalog/4058-repair_service_kits/" },
  { id: 11, name: "Shock Absorber and Strut", img: "https://boodmo.com/media/cache/catalog_image/images/categories/f26073e.jpg", link: "/catalog/3629-shock_absorber/" },
  { id: 12, name: "Spark Plug", img: "https://boodmo.com/media/cache/catalog_image/images/categories/acd0058.jpg", link: "/catalog/4384-spark_glow_plug/" },
  { id: 13, name: "Wiper Blade and Sets", img: "https://boodmo.com/media/cache/catalog_image/images/categories/1053d82.jpg", link: "/catalog/4055-windscreen_cleaning_part/" },
];

const MaintenanceServiceParts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState(catalogCategories);

  // Filter categories by search
  useEffect(() => {
    const filtered = catalogCategories.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchTerm]);

  // Sort categories by name
  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...filteredCategories];
    if (value === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredCategories(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Maintenance Service Parts</h1>
          <p className="text-gray-600">High-quality maintenance parts for your vehicle</p>
        </div>

        {/* Search & Filter Bar */}
        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          handleSort={handleSort}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          categoryName="Maintenance Parts"
        />

        <div className="flex gap-6">
          {/* Sidebar */}
          <CatalogueSidebar />

          {/* Categories Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-8">
              {filteredCategories.map((category) => (
                <Link
                  key={category.id}
                  to={category.link}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center"
                >
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-28 object-cover mb-2 rounded"
                  />
                  <span className="text-gray-800 font-medium">{category.name}</span>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No categories found matching your criteria.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-red-600 hover:text-red-700"
                >
                  Clear search
                </button>
              </div>
            )}

            {/* Content Section */}
            <section class="bg-white text-gray-800 py-10 px-6 max-w-5xl mx-auto">
              <div class="space-y-6">
                {/* <!-- Section Title --> */}
                <h2 class="text-2xl md:text-3xl font-bold text-red-700 border-b-2 border-red-300 inline-block pb-2">
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
                <h3 class="text-xl font-semibold text-red-700 mt-8">
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
                <h3 class="text-xl font-semibold text-red-700 mt-8">Our Advantages</h3>
                <p class="font-medium leading-relaxed">
                  When you choose <span class="text-red-600 font-semibold">Sparelo</span> — India's largest online marketplace
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
                  <span class="text-red-600 font-semibold">Sparelo’s</span> unmatched catalogue with the widest range
                  of car spare parts — even without registration. We are sure you will find the replacement you need!
                </p>

                {/* <!-- View More Button --> */}
                <div class="text-center mt-8">
                  <button
                    class="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-md"
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

export default MaintenanceServiceParts;
