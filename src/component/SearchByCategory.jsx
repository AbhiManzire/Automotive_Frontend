import React from "react";

const categories = [
  {
    title: "Maintenance Service Parts",
    href: "/catalog/3403-maintenance_service_parts/",
    img: "https://boodmo.com/media/images/categories/ebba234.svg",
  },
  {
    title: "Filters",
    href: "/catalog/4328-filters/",
    img: "https://boodmo.com/media/images/categories/fab8332.svg",
  },
  {
    title: "Windscreen Cleaning System",
    href: "/catalog/4193-windscreen_cleaning_system/",
    img: "https://boodmo.com/media/images/categories/d36974e.svg",
  },
  {
    title: "Car Accessories",
    href: "/catalog/4037-accessories/",
    img: "https://boodmo.com/media/images/categories/4372565.svg",
  },
  {
    title: "Lighting",
    href: "/catalog/4638-lighting/",
    img: "https://boodmo.com/media/images/categories/c009512.svg",
  },
];

export default function SearchByCategory() {
  return (
    <section className="py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-4xl px-4 font-bold">
          Search by{" "}
          <span className="text-red-500 font-bold">Category</span>
        </h3>
        <a
          href="/catalog/"
          className="text-sm text-blue-500 hover:underline"
        >
          View all
        </a>
      </div>

      {/* Category list */}
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href={cat.href}
            className="flex flex-col items-center border rounded-xl shadow-sm hover:shadow-md transition p-4 bg-white"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-16 h-16 object-contain mb-3"
            />
            <span className="text-center text-sm font-medium">
              {cat.title}
            </span>
          </a>
        ))}
      </div>

      {/* Load more button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100 transition">
          Load more
        </button>
      </div>
    </section>
  );
}
