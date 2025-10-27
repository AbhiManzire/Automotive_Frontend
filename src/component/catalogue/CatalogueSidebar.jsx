import React from "react";
import { Link, useLocation } from "react-router-dom";

const CatalogueSidebar = () => {
  const location = useLocation(); // ✅ Get current path

  const categories = [
    { name: "Air Conditioning", link: "/catalog/air_conditioning/" },
    { name: "Body", link: "/catalog/body/" },
    { name: "Bearings", link: "/catalog/bearings/" },
    { name: "Belts Chains And Rollers", link: "/catalog/drive_belts/" },
    { name: "Break System", link: "/catalog/brakes/" },
    { name: "Car Accessories", link: "/catalog/car_accessories/" },
    { name: "Clutch", link: "/catalog/clutch/" },
    { name: "Control Cables", link: "/catalog/control_cables/" },
    { name: "Electrical Components", link: "/catalog/electric_components/" },
    { name: "Engine", link: "/catalog/engine/" },
    { name: "Engine Cooling System", link: "/catalog/cooling_system/" },
    { name: "Exhaust System", link: "/catalog/exhaust/" },
    { name: "Filters", link: "/catalog/filters/" },
    { name: "Fuel Supply System", link: "/catalog/fuelsystem/" },
    { name: "Gaskets & Seals", link: "/catalog/Gasket_SealingRings/" },
    { name: "Ignition & Glowplug System", link: "/catalog/ignition_glowplug/" },
    { name: "Interior Comfort", link: "/catalog/interior_comfort/" },
    { name: "Lighting", link: "/catalog/lighting/" },
    { name: "Maintenance Service Parts", link: "/catalog/maintenance_service_parts/" },
    { name: "Oils & Fluids", link: "/catalog/oilsfluids/" },
    { name: "Pipes & Hoses", link: "/catalog/pipes_hoses/" },
    { name: "Repair Kits", link: "/catalog/repair_kits/" },
    { name: "Sensors Relay and Control Units", link: "/catalog/sensors_control_units/" },
    { name: "Steering", link: "/catalog/steering/" },
    { name: "Suspension and Arms", link: "/catalog/suspension/" },
    { name: "Towbar Parts", link: "/catalog/towbar/" },
    { name: "Trims", link: "/catalog/trims/" },
    { name: "Tyres and Alloys", link: "/catalog/tyres_and_alloys/" },
    { name: "Transmission", link: "/catalog/transmission/" },
    { name: "Universal", link: "/catalog/universal/" },
    { name: "Wheels", link: "/catalog/wheels/" },
    { name: "Windscreen Cleaning System", link: "/catalog/windscreen_cleaning_system/" },
  ];

  const brands = [
    { name: "Bosch", link: "/catalog/brands/bosch/" },
    { name: "Fram", link: "/catalog/brands/fram/" },
    { name: "Hengst", link: "/catalog/brands/hengst/" },
    { name: "Mahle", link: "/catalog/brands/mahle/" },
    { name: "Mann Filter", link: "/catalog/brands/mann_filter/" },
    { name: "Wix", link: "/catalog/brands/wix/" },
  ];

  // 🔥 Active link check helper
  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden md:block w-full md:w-64 flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Filters</h3>
          <button className="text-sm text-red-600 hover:text-red-700">Clear All</button>
        </div>

        {/* Category Section */}
        <div className="mb-6 bg-blue-50 p-3 rounded">
          <h4 className="font-medium text-gray-700 mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className={`block text-sm px-2 py-1 rounded transition-all duration-200 ${
                  isActive(category.link)
                    ? "font-semibold text-blue-500 "
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">Brand</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to={brand.link}
                className={`block text-sm px-2 py-1 rounded transition-all duration-200 ${
                  isActive(brand.link)
                    ? "font-semibold text-white bg-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                }`}
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
