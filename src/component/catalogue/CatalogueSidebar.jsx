import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CatalogueSidebar = () => {
  const [selectedMaker, setSelectedMaker] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const popularCarmakers = [
    "CHEVROLET", "FIAT", "FORD", "HONDA", "HYUNDAI", "KIA",
    "MAHINDRA", "MARUTI", "NISSAN", "RENAULT", "SKODA", "TATA", "TOYOTA", "VW",
  ];

  const alphabeticalCarmakers = [
    "ASHOK LEYLAND", "AUDI", "BMW", "CHEVROLET", "CITROEN", "DAEWOO",
    "DATSUN", "FIAT", "FORCE", "FORD", "HINDUSTAN MOTORS", "HONDA",
    "HYUNDAI", "ICML", "ISUZU", "JAGUAR", "JEEP", "KIA", "LAND ROVER",
    "LEXUS", "MAHINDRA", "MARUTI", "MERCEDES-BENZ", "MINI", "MITSUBISHI",
    "MORRIS GARAGES", "NISSAN", "OPEL", "PORSCHE", "RENAULT", "SKODA",
    "TATA", "TATA COMMERCIAL", "TOYOTA", "VOLVO", "VW",
  ];

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

  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden md:block w-full md:w-64 flex-shrink-0">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">Filters</h3>
          {/* <button className="text-sm text-red-600 hover:text-red-700 dark:text-red-400">
            Clear All
          </button> */}
        </div>

        {/* Garage Section */}
        <div
          className={`filters__item  rounded-lg overflow-hidden mb-2 ${
            isOpen ? "bg-white dark:bg-gray-900" : "bg-white dark:bg-gray-800"
          }`}
        >
          <div
            className="flex items-center justify-between px-4 py-2 cursor-pointer border-b dark:border-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              Garage
            </span>
            <span className="text-sm text-blue-600 dark:text-blue-400">
              {isOpen ? "−" : "+"}
            </span>
          </div>

          {isOpen && (
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <a
                  href="/catalog/4389-belt_chain_and_roller/74268-maruti_eeco-1_2l/"
                  className="flex items-center space-x-3"
                >
                  <img
                    src="https://boodmo.com/media/images/model/83d0afb.webp"
                    alt="MARUTI EECO 1.2L 5S STD MT"
                    className="w-6 h-6 object-cover rounded-md " 
                  />
                  <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">
                    EECO
                  </span>
                </a>
              </div>

              <form className="space-y-2">
                <label
                  htmlFor="carMaker"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Choose car maker
                </label>
                <select
                  id="carMaker"
                  value={selectedMaker}
                  onChange={(e) => setSelectedMaker(e.target.value)}
                  className="form-select w-full p-2 border rounded-md text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
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
                    {alphabeticalCarmakers.map((maker) => (
                      <option key={maker} value={maker}>
                        {maker}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </form>
            </div>
          )}
        </div>

        {/* Category Section */}
        <div className="mb-6 bg-blue-50 dark:bg-gray-800 p-3 rounded">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
            Category
          </h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className={`block text-sm px-2 py-1 rounded transition-all duration-200 ${
                  isActive(category.link)
                    ? "font-semibold text-blue-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Brand</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to={brand.link}
                className={`block text-sm px-2 py-1 rounded transition-all duration-200 ${
                  isActive(brand.link)
                    ? "font-semibold text-white bg-blue-600"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700"
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
