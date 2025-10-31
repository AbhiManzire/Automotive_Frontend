import React from "react";
import { Link, useLocation } from "react-router-dom";

const VehicleBreadcrumbs = () => {
  const location = useLocation();

  // Extract path parts (e.g. /vehicles/maruti-286/ → ['vehicles', 'maruti-286'])
  const pathParts = location.pathname.split("/").filter(Boolean);
  const vehicleSlug = pathParts[pathParts.length - 1];

  // Format brand name
  const vehicleName = vehicleSlug
    ? vehicleSlug
        .split("-")[0]
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : "Vehicles";

  return (
    <div className="w-full mb-4">
      <nav className="w-full border-b border-gray-200 py-3 px-3 sm:px-6 bg-white shadow-sm">
        <ol className="flex items-center text-gray-700 font-medium text-sm sm:text-base space-x-2">
          {/* Home */}
          <li>
            <Link to="/" className="flex items-center hover:text-blue-700">
              <svg
                fill="#12477a"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path d="M3.012,10.981,3,11H5v9a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11h2a1,1,0,0,0,.555-1.832l-9-6a1,1,0,0,0-1.11,0l-9,6a1,1,0,0,0-.277,1.387A.98.98,0,0,0,3.012,10.981ZM10,14a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v5H10Z"></path>
              </svg>
            </Link>
          </li>

          {/* Divider */}
          <li className="text-gray-500">/</li>

          {/* Vehicles Link */}
          <li>
            <Link
              to="/vehicles"
              className="hover:text-blue-700 transition-colors duration-150"
            >
              Car Makers
            </Link>
          </li>

          {/* Divider + Brand Name */}
          {vehicleSlug && (
            <>
              <li className="text-gray-500">/</li>
              <li>
                <h1 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {vehicleName} spare parts and accessories
                </h1>
              </li>
            </>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default VehicleBreadcrumbs;
