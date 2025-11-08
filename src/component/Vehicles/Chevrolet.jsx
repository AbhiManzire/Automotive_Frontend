import React, { useState } from "react";
import VehicleBreadcrumbs from "./VehicleBreadcrumbs";
import Article_Review from "../Article_Review";
import { getOriPartsLink } from "../../utils/oripartsBackUrl";

// 🔹 Models Data - Exported for use in other components
export const chevroletModels = [
    {
      id: 1,
      name: "MAHINDRA ALFA",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/db55347.webp",
      years: "03.2017 - now",
      link: "/vehicles/mahindra-278/alfa-11951/",
      modifications: [
        {
          generation: "ALFA LOAD 03.2017 - now",
          options: [
            "0.4L ALFA LOAD/Diesel/BS4",
            "0.4L ALFA LOAD/Petrol/CNG/BS6",
            "0.6L ALFA LOAD/Diesel/BS6",
          ],
        },
        {
          generation: "ALFA PASSENGER 03.2017 - now",
          options: [
            "0.4L/Diesel/BS4",
            "0.4L ALFA PASSANGER/Petrol/CNG/BS6",
            "0.6L ALFA PASSANGER /Diesel/BS6",
          ],
        },
        {
          generation: "ALFA E MINI 09.2017 - now",
          options: [
            "5.67 kWh CARGO/Electric",
            "5.67 kWh MINI/Electric",
          ],
        },
      ],
    },


];

export const Chevrolet = () => {
  const link = getOriPartsLink(51, "CHEVROLET");

  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Use exported models
  const models = chevroletModels;

  const categories = [
    { name: "Maintenance Service Parts", img: "https://boodmo.com/media/images/categories/ebba234.svg", link: "/catalog/maintenance_service_parts/" },
    { name: "Filters", img: "https://boodmo.com/media/images/categories/fab8332.svg", link: "/catalog/filters/" },
    { name: "Windscreen Cleaning System", img: "https://boodmo.com/media/images/categories/d36974e.svg", link: "/catalog/windscreen_cleaning_system/" },
    { name: "Car Accessories", img: "https://boodmo.com/media/images/categories/4372565.svg", link: "/catalog/car_accessories/" },
    { name: "Lighting", img: "https://boodmo.com/media/images/categories/c009512.svg", link: "/catalog/lighting/" },
    { name: "Control Cables", img: "https://boodmo.com/media/images/categories/64b9f40.svg", link: "/catalog/control_cables/" },
    { name: "Brake System", img: "https://boodmo.com/media/images/categories/5c30d1d.svg", link: "/catalog/brakes/" },
    { name: "Bearings", img: "https://boodmo.com/media/images/categories/d5dd6ce.svg", link: "/catalog/bearings/" },
    { name: "Clutch System", img: "https://boodmo.com/media/images/categories/bc1a73f.svg", link: "/catalog/clutch/" },
    { name: "Electric Components", img: "https://boodmo.com/media/images/categories/e1aba2b.svg", link: "/catalog/electric_components/" },
    { name: "Engine", img: "https://boodmo.com/media/images/categories/f6afc8e.svg", link: "/catalog/engine/" },
    { name: "Engine Cooling System", img: "https://boodmo.com/media/images/categories/e39dc1a.svg", link: "/catalog/cooling_system/" },
    { name: "Exhaust System", img: "https://boodmo.com/media/images/categories/83cd783.svg", link: "/catalog/exhaust/" },
    { name: "Air Conditioning", img: "https://boodmo.com/media/images/categories/10f1952.svg", link: "/catalog/air_conditioning/" },
    { name: "Fuel Supply System", img: "https://boodmo.com/media/images/categories/457f4a4.svg", link: "/catalog/fuelsystem/" },
    { name: "Gaskets and Sealing Rings", img: "https://boodmo.com/media/images/categories/38d5de9.svg", link: "/catalog/Gasket_SealingRings/" },
    { name: "Ignition and Glowplug System", img: "https://boodmo.com/media/images/categories/bfcf2c1.svg", link: "/catalog/ignition_glowplug/" },
    { name: "Interior and Comfort", img: "https://boodmo.com/media/images/categories/7e1a432.svg", link: "/catalog/interior_comfort/" },
    { name: "Body", img: "https://boodmo.com/media/images/categories/50008e4.svg", link: "/catalog/body/" },
    { name: "Oils and Fluids", img: "https://boodmo.com/media/images/categories/de978f4.svg", link: "/catalog/oilsfluids/" },
    { name: "Pipes and Hoses", img: "https://boodmo.com/media/images/categories/eeab7a3.svg", link: "/catalog/pipes_hoses/" },
    { name: "Repair Kits", img: "https://boodmo.com/media/images/categories/38427d6.svg", link: "/catalog/repair_kits/" },
    { name: "Sensors Relays and Control Units", img: "https://boodmo.com/media/images/categories/878a84e.svg", link: "/catalog/sensors_control_units/" },
    { name: "Steering", img: "https://boodmo.com/media/images/categories/15cfbae.svg", link: "/catalog/steering/" },
    { name: "Suspension and Arms", img: "https://boodmo.com/media/images/categories/9bcc0da.svg", link: "/catalog/suspension/" },
    { name: "Towbar Parts", img: "https://boodmo.com/media/images/categories/95660dc.svg", link: "/catalog/towbar/" },
    { name: "Transmission", img: "https://boodmo.com/media/images/categories/5924137.svg", link: "/catalog/transmission/" },
    { name: "Trims", img: "https://boodmo.com/media/images/categories/ecd08bd.svg", link: "/catalog/trims/" },
    { name: "Tyres and Alloys", img: "https://boodmo.com/media/images/categories/b1b2c08.svg", link: "/catalog/tyres_and_alloys/" },
    { name: "Universal", img: "https://boodmo.com/media/images/categories/8c5ddeb.svg", link: "/catalog/universal/" },
    { name: "Wheels", img: "https://boodmo.com/media/images/categories/1bb7d48.svg", link: "/catalog/wheels/" },
    { name: "Belts Chains and Rollers", img: "https://boodmo.com/media/images/categories/51eb913.svg", link: "/catalog/drive_belts/" },
  ];
  // 🔹 Filtering Logic
  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(filter.toLowerCase())
  );

  // 🔹 Filter parts/categories by title or name using the categoryFilter state
  const filteredParts = categories.filter((c) =>
    (c.title || c.name || "").toLowerCase().includes(categoryFilter.toLowerCase())
  );


  return (
    <section className="min-h-screen py-6">
      {/* Breadcrumbs */}
      <div className="w-full mb-8 px-4">
        <VehicleBreadcrumbs />

        <h1 className="text-3xl px-2 font-bold text-gray-800 uppercase mb-6">
          CHEVROLET
        </h1>

        {/* OEM Catalogue Button */}
        <a
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="border border-1 border-gray-600 mb-2 text-black text-sm rounded-md p-2 transition-all duration-300 hover:bg-red-400"
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
                 <div className="bg-white dark:bg-gray-700 flex items-center justify-center h-40">
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
     
     
           {/* ---------maruti parts and accssories------------- */}
           <section className="mt-12 px-4">
             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-6">
               {/* Heading (Desktop) */}
               <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 hidden md:block">
                 MAHINDRA Parts and{" "}
                 <span className="text-red-600 dark:text-pink-400">Accessories</span>
               </h2>
     
               {/* Search Filter */}
               <div className="w-full md:w-1/3">
                 <input
                   type="search"
                   placeholder="Filter Category ..."
                   value={categoryFilter}
                   onChange={(e) => setCategoryFilter(e.target.value)}
                   className="w-full rounded-md border border-gray-300 dark:border-gray-600 
                               bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                               px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 
                               transition duration-200"
                 />
               </div>
             </div>
     
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
               {filteredParts.map((part, index) => {
                 const displayName = part.title || part.name || "Category";
                 const href = part.href || part.link || "#";
                 const itemKey = `${displayName.replace(/\s+/g, "_")}-${index}`;
                 return (
                   <a
                     key={itemKey}
                     href={href}
                     title={displayName}
                     aria-label={displayName}
                     className="flex flex-col items-center bg-white shadow hover:shadow-lg rounded-xl p-10  transition-transform transform hover:scale-105"
                   >
                     <div className="w-24 h-24 flex items-center justify-center mb-3">
                       {part.img ? (
                         <img
                           src={part.img}
                           alt={displayName}
                           className="max-w-[90%] max-h-[90%] object-contain"
                           onError={(e) => { e.currentTarget.style.display = 'none'; }}
                         />
                       ) : (
                         <div
                           className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg"
                           aria-hidden
                         />
                       )}
                     </div>
                     <span className="mt-1 text-sm text-gray-700 dark:text-gray-200 text-center font-medium break-words">
                       {displayName}
                     </span>
                   </a>
                 );
               })}
             </div>
           </section>
     
           <Article_Review />
         </section>
  );
};
