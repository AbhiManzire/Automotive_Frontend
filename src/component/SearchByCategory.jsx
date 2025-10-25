"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // 🌀 for smooth animations

const categories = [
  { title: "Maintenance Service Parts", 
    href: "/catalog/maintenance_service_parts/", 
    img: "https://boodmo.com/media/images/categories/ebba234.svg" 
  },
  { title: "Filters", 
    href: "/catalog/filters/", 
    img: "https://boodmo.com/media/images/categories/fab8332.svg" 
  },
  { title: "Windscreen Cleaning System", 
    href: "/catalog/windscreen_cleaning_system/", 
    img: "https://boodmo.com/media/images/categories/d36974e.svg" 
  },
  { title: "Car Accessories", 
    href: "/catalog/accessories/", 
    img: "https://boodmo.com/media/images/categories/4372565.svg" 
  },
  { title: "Lighting", 
    href: "/catalog/lighting/", 
    img: "https://boodmo.com/media/images/categories/c009512.svg" 
  },
  { title: "Control Cables", 
    href: "/catalog/control_cables/", 
    img: "https://boodmo.com/media/images/categories/64b9f40.svg" 
  },
  { title: "Brake System", 
    href: "/catalog/brake_system/", 
    img: "https://boodmo.com/media/images/categories/5c30d1d.svg" 
  },
  { title: "Bearings", 
    href: "/catalog/bearings/", 
    img: "https://boodmo.com/media/images/categories/d5dd6ce.svg" 
  },
  { title: "Clutch System", 
    href: "/catalog/clutch_system/", 
    img: "https://boodmo.com/media/images/categories/bc1a73f.svg" 
  },
  { title: "Electric Components", 
    href: "/catalog/electric_components/", 
    img: "https://boodmo.com/media/images/categories/e1aba2b.svg" 
  },
  { title: "Engine", 
    href: "/catalog/engine/", 
    img: "https://boodmo.com/media/images/categories/f6afc8e.svg" 
  },
  { title: "Suspension and Arms", 
    href: "/catalog/suspension_arms/", 
    img: "https://boodmo.com/media/images/categories/9bcc0da.svg" 
  },
  { title: "Transmission", 
    href: "/catalog/transmission/", 
    img: "https://boodmo.com/media/images/categories/5924137.svg" 
  },
  { title: "Body", 
    href: "/catalog/body/", 
    img: "https://boodmo.com/media/images/categories/50008e4.svg" 
  },
  { title: "Wheels", 
    href: "/catalog/wheels/", 
    img: "https://boodmo.com/media/images/categories/1bb7d48.svg" 
  },
  { title: "Fuel Supply System", 
    href: "/catalog/fuel_supply_system/", 
    img: "https://boodmo.com/media/images/categories/457f4a4.svg" 
  },
  { title: "Oils and Fluids", 
    href: "/catalog/oils_and_fluids/", 
    img: "https://boodmo.com/media/images/categories/de978f4.svg" 
  },
  { title: "Exhaust System", 
    href: "/catalog/exhaust_system/", 
    img: "https://boodmo.com/media/images/categories/83cd783.svg" 
  },
  { title: "Trims", 
    href: "/catalog/trims/", 
    img: "https://boodmo.com/media/images/categories/ecd08bd.svg" 
  },
  { title: "Universal", 
    href: "/catalog/universal/", 
    img: "https://boodmo.com/media/images/categories/8c5ddeb.svg" 
  },
  { title: "Air Conditioning", 
    href: "/catalog/air_conditioning/", 
    img: "https://boodmo.com/media/images/categories/10f1952.svg" 
  },
  { title: "Interior and Comfort", 
    href: "/catalog/interior_and_comfort/", 
    img: "https://boodmo.com/media/images/categories/7e1a432.svg" 
  },
  { title: "Sensors Relays and Control Units", 
    href: "/catalog/sensors_relays_control_units/", 
    img: "https://boodmo.com/media/images/categories/878a84e.svg" 
  },
  { title: "Towbar Parts", 
    href: "/catalog/towbar_parts/", 
    img: "https://boodmo.com/media/images/categories/95660dc.svg" 
    },
];

export default function SearchByCategory() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 10);

  return (
    <section className="py-10 px-6 bg-gradient-to-br from-sky-50 via-white to-sky-100 rounded-3xl shadow-inner relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-sky-200 opacity-30 rounded-full blur-3xl -translate-x-20 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 opacity-30 rounded-full blur-3xl translate-x-10 translate-y-10"></div>

      {/* Header */}
      <div className="flex flex-col items-center mb-14 relative z-10">
        <h3 className="text-4xl font-bold text-gray-800 text-center tracking-tight">
          Search by <span className="bg-red-600 text-transparent bg-clip-text">Category</span>
        </h3>
        <p className="text-gray-600 text-center max-w-2xl mt-3 text-lg">
          Discover high-quality car parts and accessories organized into convenient categories for your vehicle.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
        {visibleCategories.map((cat, index) => (
          <motion.a
            key={cat.title}
            href={cat.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group flex flex-col items-center p-6 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:bg-white"
          >
            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gradient-to-br from-sky-100 to-pink-100 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <img src={cat.img} alt={cat.title} className="w-12 h-12 object-contain" />
            </div>
            <span className="text-center font-semibold text-gray-700 group-hover:text-sky-600 transition text-sm">
              {cat.title}
            </span>
          </motion.a>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-14 relative z-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}
