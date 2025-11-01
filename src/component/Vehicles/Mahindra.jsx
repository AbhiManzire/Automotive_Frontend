import React, { useState } from "react";
import VehicleBreadcrumbs from "./VehicleBreadcrumbs";

export const Mahindra = () => {
  const link =
    "https://oriparts.com/4?back_url_id=https%3A%2F%2Fboodmo.com%2Fcatalog%2Fpart-p-%7Bitem_id%7D%2F&back_url_pn=https%3A%2F%2Fboodmo.com%2Fsearch%2F%7Bpn%7D%2F";

  const [filter, setFilter] = useState("");

  // 🔹 Models Data
  const models = [
    {
      id: 1,
      name: "MODEL NAME",
      image: "IMAGE_URL",
      years: "YYYY - YYYY",
      link: "/vehicles/brand-slug/model-slug/",
      modifications: [
        {
          generation: "GENERATION NAME",
          options: ["1.2L Petrol", "1.5L Diesel"],
        },
      ],
    },
  ];

  // 🔹 Filtering Logic
  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="min-h-screen py-6">
      {/* Breadcrumbs */}
      <div className="w-full mb-8 px-4">
        <VehicleBreadcrumbs />

        <h1 className="text-3xl px-2 font-bold text-gray-800 uppercase mb-6">
          Mahindra
        </h1>

        {/* OEM Catalogue Button */}
        <a
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="border border-gray-600 mb-2 text-black text-sm rounded-md p-2 transition-all duration-300 hover:bg-red-400"
        >
          View OEM Catalogue
        </a>
      </div>

      {/* Brand Info Section */}
      <section className="brand-info__desc mb-6 px-6">
        <div className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
          <p>
            Mahindra is a leading automobile manufacturer known for its
            reliability and innovation. Established in YEAR, it continues to
            produce a diverse range of models suitable for Indian conditions.
          </p>
          <p>
            The company is recognized for its strong after-sales network and
            commitment to customer satisfaction.
          </p>
          <p>
            Spare parts for Mahindra cars are available at{" "}
            <a
              href="https://boodmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              sparelo
            </a>
            .
          </p>
        </div>
      </section>

      {/* Model Filter Section */}
      <div className="heading-filters flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-3 px-4 mb-6">
        <div className="h2-section text-2xl sm:text-3xl font-semibold text-gray-800">
          Choose Your{" "}
          <span className="h2-section__name text-red-500 font-bold">
            Model
          </span>
        </div>

        {/* Search Input */}
        <div className="heading-filters__action">
          <input
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter Model"
            className="form-control form-control--search w-64 sm:w-72 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition duration-200"
          />
        </div>
      </div>

      {/* Models Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {filteredModels.map((model) => (
          <li
            key={model.id}
            className="bg-white dark:bg-gray-800 rounded-md shadow-md hover:shadow-red-500/30 transform hover:-translate-y-1 transition duration-110 overflow-hidden"
          >
            {/* Image */}
            <div className="bg-white dark:bg-gray-700 flex items-center justify-center h-48">
              <img
                src={model.image}
                alt={model.name}
                className="object-contain h-full w-full p-6"
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
                <option className="font-semibold" value="">
                  SELECT YOUR CAR
                </option>

                {model.modifications.map((group, i) => (
                  <optgroup
                    key={i}
                    label={group.generation}
                    className="font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700"
                  >
                    {group.options.map((opt, j) => (
                      <option key={j} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </li>
        ))}

        {/* No Models Found */}
        {filteredModels.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
            No models found.
          </p>
        )}
      </ul>
    </section>
  );
};
