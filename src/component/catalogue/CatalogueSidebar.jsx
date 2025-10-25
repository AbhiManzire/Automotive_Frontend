import React from "react";
import { Link } from "react-router-dom"; // Import Link

const CatalogueSidebar = () => {



  const categories = [
    { name: "Maintenance Service Parts", link: "/catalog/maintenance_service_parts/" },
    { name: "Filters", link: "/catalog/filters/" },
    { name: "Windscreen Cleaning System", link: "/catalog/windscreen_cleaning_system/" },
    { name: "Brakes", link: "/catalog/brakes/" },
    { name: "Lighting", link: "/catalog/lighting/" },
    { name: "Engine Parts", link: "/catalog/engine_parts/" },
    { name: "Suspension", link: "/catalog/suspension/" },
    { name: "Transmission", link: "/catalog/transmission/" },
    { name: "Exhaust", link: "/catalog/exhaust/" },
    { name: "Steering", link: "/catalog/steering/" },
    { name: "Cooling System", link: "/catalog/cooling_system/" },
    { name: "Fuel System", link: "/catalog/fuel_system/" },
    { name: "Clutch", link: "/catalog/clutch/" },
    { name: "Drive Belts", link: "/catalog/drive_belts/" },
    { name: "Battery", link: "/catalog/battery/" },
    { name: "Wipers & Washers", link: "/catalog/wipers_washers/" },
    { name: "Electrical Components", link: "/catalog/electrical_components/" },
    { name: "Sensors & Modules", link: "/catalog/sensors_modules/" },
    { name: "Gaskets & Seals", link: "/catalog/gaskets_seals/" },
    { name: "Timing Parts", link: "/catalog/timing_parts/" },
    { name: "Turbochargers", link: "/catalog/turbochargers/" },
    { name: "Differential", link: "/catalog/differential/" },
    { name: "Axles & CV Joints", link: "/catalog/axles_cv_joints/" },
    { name: "Shock Absorbers", link: "/catalog/shock_absorbers/" },
    { name: "Bearings", link: "/catalog/bearings/" },
    { name: "Hoses & Pipes", link: "/catalog/hoses_pipes/" },
    { name: "Air Intake", link: "/catalog/air_intake/" },
    { name: "Exhaust Manifold", link: "/catalog/exhaust_manifold/" },
  ];

  const brands = [
    { name: "Bosch", link: "/catalog/brand/bosch/" },
    { name: "Mann Filter", link: "/catalog/brand/mann_filter/" },
    { name: "Mahle", link: "/catalog/brand/mahle/" },
    { name: "Fram", link: "/catalog/brand/fram/" },
    { name: "Wix", link: "/catalog/brand/wix/" },
    { name: "Hengst", link: "/catalog/brand/hengst/" },
  ];

  return (
    <div className="hidden md:block w-full md:w-64 flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Filters</h3>
          <button className="text-sm text-red-600 hover:text-red-700">Clear All</button>
        </div>

        {/* price-range */}
        {/* <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
          <div className="space-y-2">
            {["Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "Above ₹2000"].map((price) => (
              <label key={price} className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                {price}
              </label>
            ))}
          </div>
        </div> */}
        
        {/* Category */}
        <div className="mb-6 bg-blue-50 p-3 rounded">
          <h4 className="font-medium text-gray-700 mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">Brand</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to={brand.link}
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueSidebar;
