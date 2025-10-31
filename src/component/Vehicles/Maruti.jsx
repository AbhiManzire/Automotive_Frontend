import React, { useState } from "react";
import VehicleBreadcrumbs from "./VehicleBreadcrumbs";

export const Maruti = () => {
  const link =
    "https://oriparts.com/7?back_url_id=https%3A%2F%2Fboodmo.com%2Fcatalog%2Fpart-p-%7Bitem_id%7D%2F&back_url_pn=https%3A%2F%2Fboodmo.com%2Fsearch%2F%7Bpn%7D%2F";

  const [filter, setFilter] = useState("");

  // 🔹 Example model data (replace or expand as needed)
  const models = [
    {
      id: 1,
      name: "MARUTI 1000",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/72b0977.webp",
      years: "10.1990 - 05.2000",
      link: "/vehicles/maruti-286/maruti_1000-12276/",
      modifications: ["1.0L / Petrol"],
    },
    {
      id: 2,
      name: "MARUTI 800",
      image:   "https://boodmo.com/media/cache/vehicle_model/images/model/237031b.webp",
      years: "12.1983 - 01.2014",
      link: "/vehicles/maruti-286/maruti_800-11226/",
      modifications:  [// 1ST GEN
    "800 1ST GEN SS80 12.1983 - 06.1986: 0.8L DX MT/Petrol",
    "800 1ST GEN SS80 12.1983 - 06.1986: 0.8L STD MT/Petrol",

    // 2ND GEN TYPE 1
    "800 2ND GEN TYPE 1 06.1986 - 09.1997: 0.8L A/C MT/Petrol",
    "800 2ND GEN TYPE 1 06.1986 - 09.1997: 0.8L AT/Petrol",
    "800 2ND GEN TYPE 1 06.1986 - 09.1997: 0.8L STD MT/Petrol",

    // 2ND GEN TYPE 2
    "800 2ND GEN TYPE 2 10.1997 - 03.2005: 0.8L A/C (CARB) MT/Petrol",
    "800 2ND GEN TYPE 2 10.1997 - 03.2005: 0.8L A/C (MPFI) MT/Petrol",
    "800 2ND GEN TYPE 2 10.1997 - 03.2005: 0.8L EX & DX 5-SPEED MT/Petrol",
    "800 2ND GEN TYPE 2 10.1997 - 03.2005: 0.8L STD (CARB) MT/Petrol",
    "800 2ND GEN TYPE 2 10.1997 - 03.2005: 0.8L STD (MPFI) MT/Petrol",

    // 2ND GEN TYPE 3
    "800 2ND GEN TYPE 3 04.2005 - 01.2014: 0.8L A/C MT/Petrol/BS3",
    "800 2ND GEN TYPE 3 04.2005 - 01.2014: 0.8L STD MT/Petrol/BS3",
  ],
    },
    {
      id: 3,
      name: "MARUTI SWIFT",
      image:
        "https://boodmo.com/media/cache/vehicle_model/images/model/52b0977.webp",
      years: "05.2005 - Present",
      link: "/vehicles/maruti-286/maruti_swift-14523/",
      modifications: ["1.2L / Petrol", "1.3L / Diesel"],
    },
    {
      id: 4,
      name: "MARUTI BALENO",
      image:
        "https://boodmo.com/media/cache/vehicle_model/images/model/32b0977.webp",
      years: "10.2015 - Present",
      link: "/vehicles/maruti-286/maruti_baleno-15645/",
      modifications: ["1.2L / Petrol", "1.3L / Diesel"],
    },
    {
      id: 5,
      name: "MARUTI CELERIO",
      image:
        "https://boodmo.com/media/cache/vehicle_model/images/model/12b0977.webp",
      years: "03.2014 - Present",
      link: "/vehicles/maruti-286/maruti_celerio-17856/",
      modifications: ["1.0L / Petrol", "CNG / Petrol"],
    },
  ];

  // 🔹 Filter models by name
  const filteredModels = models.filter((m) =>
    m.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="min-h-screen py-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Breadcrumbs */}
      <div className="w-full mb-8 px-4">
        <VehicleBreadcrumbs />

        <h1 className="text-3xl px-2 font-bold text-gray-800 dark:text-white uppercase mb-6">
          MARUTI
        </h1>

        {/* OEM Catalogue Button */}
        <a
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="border border-gray-600 mb-2 inline-block text-black dark:text-white text-sm rounded-md p-2 transition-all duration-300 hover:bg-red-500 hover:text-white"
        >
          View OEM Catalogue
        </a>
      </div>

      {/* Brand Info Section */}
      <div className="heading-filters flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-300 dark:border-gray-700 pb-3 px-4 mb-6">
        {/* Left Section - Heading */}
        <div className="h2-section text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
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
            className="w-64 sm:w-72 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 transition duration-200"
          />
        </div>
      </div>

      {/* 🔹 Vehicle Model Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {filteredModels.map((model) => (
          <li
            key={model.id}
            className="bg-white dark:bg-gray-800 rounded-md shadow-md hover:shadow-red-500/30 transform hover:-translate-y-1 transition duration-110 overflow-hidden"
          >
            {/* Image */}
            <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center h-40">
              <img
                src={model.image}
                alt={model.name}
                className="object-contain h-full w-full p-3"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <a
                href={model.link}
                className="text-lg font-semibold text-gray-900 dark:text-white transition"
              >
                {model.name}
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {model.years}
              </p>

              {/* Dropdown */}
              <select className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-md px-3 py-2 outline-none transition">
                <option value="">SELECT YOUR CAR</option>
                {model.modifications.map((mod, idx) => (
                  <option key={idx}>{mod}</option>
                ))}
              </select>
            </div>
          </li>
        ))}

        {/* If no models found */}
        {filteredModels.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
            No models found.
          </p>
        )}
      </ul>
    </section>
  );
};
