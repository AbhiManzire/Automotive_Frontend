import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { title: "Air Conditioning", href: "/catalog/air_conditioning/", img: "https://boodmo.com/media/images/categories/10f1952.svg" },
  { title: "Bearings", href: "/catalog/bearings/", img: "https://boodmo.com/media/images/categories/d5dd6ce.svg" },
  { title: "Belts Chains And Rollers", href: "/catalog/drive_belts/", img: "https://boodmo.com/media/images/categories/ebba234.svg" },
  { title: "Body", href: "/catalog/body/", img: "https://boodmo.com/media/images/categories/50008e4.svg" },
  { title: "Brake System", href: "/catalog/brakes/", img: "https://boodmo.com/media/images/categories/5c30d1d.svg" },
  { title: "Car Accessories", href: "/catalog/car_accessories/", img: "https://boodmo.com/media/images/categories/4372565.svg" },
  { title: "Clutch System", href: "/catalog/clutch/", img: "https://boodmo.com/media/images/categories/bc1a73f.svg" },
  { title: "Control Cables", href: "/catalog/control_cables/", img: "https://boodmo.com/media/images/categories/64b9f40.svg" },
  { title: "Electrical Components", href: "/catalog/electric_components/", img: "https://boodmo.com/media/images/categories/e1aba2b.svg" },
  { title: "Engine", href: "/catalog/engine/", img: "https://boodmo.com/media/images/categories/f6afc8e.svg" },
  { title: "Engine Cooling System", href: "/catalog/cooling_system/", img: "https://boodmo.com/media/images/categories/878a84e.svg" },
  { title: "Exhaust System", href: "/catalog/exhaust/", img: "https://boodmo.com/media/images/categories/83cd783.svg" },
  { title: "Filters", href: "/catalog/filters/", img: "https://boodmo.com/media/images/categories/fab8332.svg" },
  { title: "Fuel Supply System", href: "/catalog/fuelsystem/", img: "https://boodmo.com/media/images/categories/457f4a4.svg" },
  { title: "Gaskets & Seals", href: "/catalog/Gasket_SealingRings/", img: "https://boodmo.com/media/images/categories/de978f4.svg" },
  { title: "Interior and Comfort", href: "/catalog/interior_comfort/", img: "https://boodmo.com/media/images/categories/7e1a432.svg" },
  { title: "Lighting", href: "/catalog/lighting/", img: "https://boodmo.com/media/images/categories/c009512.svg" },
  { title: "Maintenance Service Parts", href: "/catalog/maintenance_service_parts/", img: "https://boodmo.com/media/images/categories/ebba234.svg" },
  { title: "Oils and Fluids", href: "/catalog/oilsfluids/", img: "https://boodmo.com/media/images/categories/de978f4.svg" },
  { title: "Pipes & Hoses", href: "/catalog/pipes_hoses/", img: "https://boodmo.com/media/images/categories/457f4a4.svg" },
  { title: "Sensors Relays and Control Units", href: "/catalog/sensors_control_units/", img: "https://boodmo.com/media/images/categories/878a84e.svg" },
  { title: "Steering", href: "/catalog/steering/", img: "https://boodmo.com/media/images/categories/e1aba2b.svg" },
  { title: "Suspension and Arms", href: "/catalog/suspension/", img: "https://boodmo.com/media/images/categories/9bcc0da.svg" },
  { title: "Towbar Parts", href: "/catalog/towbar/", img: "https://boodmo.com/media/images/categories/95660dc.svg" },
  { title: "Transmission", href: "/catalog/transmission/", img: "https://boodmo.com/media/images/categories/5924137.svg" },
  { title: "Trims", href: "/catalog/trims/", img: "https://boodmo.com/media/images/categories/ecd08bd.svg" },
  { title: "Universal", href: "/catalog/universal/", img: "https://boodmo.com/media/images/categories/8c5ddeb.svg" },
  { title: "Wheels", href: "/catalog/wheels/", img: "https://boodmo.com/media/images/categories/1bb7d48.svg" },
  { title: "Windscreen Cleaning System", href: "/catalog/windscreen_cleaning_system/", img: "https://boodmo.com/media/images/categories/d36974e.svg" },
];

export default function SearchByCategory() {
  const swiperRef = useRef(null);

  return (
    <section className="relative bg-white py-4 sm:py-6 md:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Red Accent Line */}
        <div className="w-16 h-0.5 bg-red-600 mb-4 md:mb-5"></div>

        {/* Header Section */}
        <div className="mb-5 md:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Search by <span className="text-red-600">Category</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
            Discover high-quality car parts and accessories organized into convenient categories
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={12}
            slidesPerView={2}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.category-prev',
              nextEl: '.category-next',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (swiper.autoplay) {
                swiper.autoplay.start();
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 12
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 14
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 14
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 16
              }
            }}
            className="category-swiper"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={cat.title}>
                <motion.a
                  href={cat.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 flex items-center justify-center">
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/80x80?text=' + cat.title.substring(0, 2);
                      }}
                    />
                  </div>
                  <span className="text-center font-semibold text-gray-700 text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">
                    {cat.title}
                  </span>
                </motion.a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="category-prev absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Previous slide"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="category-next absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Next slide"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .category-swiper .swiper-slide {
          height: auto;
        }
        .category-prev,
        .category-next {
          display: flex;
        }
        .category-prev.swiper-button-disabled,
        .category-next.swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}



// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Link } from "react-router-dom";

// // Category data with real product images from boodmo.com
// const categories = [
//   { 
//     title: "AIR CONDITIONING", 
//     href: "/catalog/air_conditioning/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/db9dad4.jpg" // Receiver Drier
//   },
//   { 
//     title: "BEARINGS", 
//     href: "/catalog/bearings/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/40e95ca.jpg" // Big End Bearing
//   },
//   { 
//     title: "BELTS CHAINS ROLLERS", 
//     href: "/catalog/drive_belts/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/ddbeb81.jpg" // Belt
//   },
//   { 
//     title: "BODY PARTS", 
//     href: "/catalog/body/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/40e6a4c.jpg" // Bumper
//   },
//   { 
//     title: "BRAKE SYSTEM", 
//     href: "/catalog/brakes/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/5301830.jpg" // Brake Pads
//   },
//   { 
//     title: "CAR ACCESSORIES", 
//     href: "/catalog/car_accessories/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/ab143a7.webp" // Body Accessories
//   },
//   { 
//     title: "CLUTCH SYSTEM", 
//     href: "/catalog/clutch/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/e8cb288.jpg" // Clutch
//   },
//   { 
//     title: "CONTROL CABLES", 
//     href: "/catalog/control_cables/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/7455b44.jpg" // Cable Strap
//   },
//   { 
//     title: "ELECTRICAL COMPONENTS", 
//     href: "/catalog/electric_components/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/d5b3ac7.jpg" // Horn
//   },
//   { 
//     title: "ENGINE", 
//     href: "/catalog/engine/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/8fea232.jpg" // Air Supply
//   },
//   { 
//     title: "ENGINE COOLING", 
//     href: "/catalog/cooling_system/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/e215fcc.jpg" // Radiator Mounting
//   },
//   { 
//     title: "EXHAUST SYSTEM", 
//     href: "/catalog/exhaust/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/d1e33d6.jpg" // Cooler EGR
//   },
//   { 
//     title: "FILTERS", 
//     href: "/catalog/filters/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/a16bbf6.jpg" // Air Filter
//   },
//   { 
//     title: "FUEL SUPPLY SYSTEM", 
//     href: "/catalog/fuelsystem/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/49ed220.jpg" // Fuel Tank
//   },
//   { 
//     title: "GASKETS & SEALS", 
//     href: "/catalog/Gasket_SealingRings/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/14b8753.jpg" // O-Ring
//   },
//   { 
//     title: "INTERIOR & COMFORT", 
//     href: "/catalog/interior_comfort/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/05a2b84.jpg" // Interior Mirror
//   },
//   { 
//     title: "LIGHTING", 
//     href: "/catalog/lighting/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/53380d3.webp" // Light
//   },
//   { 
//     title: "MAINTENANCE PARTS", 
//     href: "/catalog/maintenance_service_parts/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/4614ecf.webp" // Engine Oil
//   },
//   { 
//     title: "OILS & FLUIDS", 
//     href: "/catalog/oilsfluids/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/4614ecf.webp" // Engine Oil
//   },
//   { 
//     title: "PIPES & HOSES", 
//     href: "/catalog/pipes_hoses/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/e0b2a63.jpg" // Sunroof Drain Hose
//   },
//   { 
//     title: "SENSORS & CONTROL", 
//     href: "/catalog/sensors_control_units/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/2676bd2.jpg" // Control Unit
//   },
//   { 
//     title: "STEERING", 
//     href: "/catalog/steering/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/15cfbae.svg" // Steering (keeping SVG as fallback)
//   },
//   { 
//     title: "SUSPENSION & ARMS", 
//     href: "/catalog/suspension/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/f26073e.jpg" // Shock Absorber
//   },
//   { 
//     title: "TOWBAR PARTS", 
//     href: "/catalog/towbar/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/98b48d2.jpg" // Towhook Cover
//   },
//   { 
//     title: "TRANSMISSION", 
//     href: "/catalog/transmission/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/21ce121.jpg" // Automatic Transmission Filter
//   },
//   { 
//     title: "TRIMS", 
//     href: "/catalog/trims/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/beccd06.jpg" // Bumper Trim
//   },
//   { 
//     title: "UNIVERSAL", 
//     href: "/catalog/universal/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/af8d099.jpg" // Bolt
//   },
//   { 
//     title: "WHEELS", 
//     href: "/catalog/wheels/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/430177a.jpg" // Spare Wheel Carrier
//   },
//   { 
//     title: "WINDScreen CLEANING", 
//     href: "/catalog/windscreen_cleaning_system/", 
//     bgImg: "https://boodmo.com/media/cache/catalog_image/images/categories/1053d82.jpg" // Wiper Blade
//   },
// ];

// export default function SearchByCategory() {
//   const swiperRef = useRef(null);
//   const [activeDot, setActiveDot] = useState(0);

//   useEffect(() => {
//     // Initialize first dot as active
//     const dots = document.querySelectorAll('.category-dot');
//     if (dots.length > 0) {
//       dots[0].classList.add('bg-red-600');
//       dots[0].classList.remove('bg-gray-300');
//     }
//   }, []);

//   const updateDots = (realIndex) => {
//     const visibleSlides = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
//     const dotsToShow = Math.min(visibleSlides, 3);
//     const activeIndex = realIndex % dotsToShow;
//     setActiveDot(activeIndex);
    
//     const dots = document.querySelectorAll('.category-dot');
//     dots.forEach((dot, index) => {
//       if (index < dotsToShow) {
//         dot.style.display = 'block';
//         if (index === activeIndex) {
//           dot.classList.add('bg-red-600');
//           dot.classList.remove('bg-gray-300');
//         } else {
//           dot.classList.remove('bg-red-600');
//           dot.classList.add('bg-gray-300');
//         }
//       } else {
//         dot.style.display = 'none';
//       }
//     });
//   };

//   return (
//     <section className="relative bg-white py-8 md:py-12 lg:py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
//           {/* Left Content Area */}
//           <div className="w-full lg:w-2/5 relative">
//             {/* Vertical CATEGORY Label */}
//             {/* <div className="hidden lg:flex absolute -left-8 top-0 bottom-0 items-center">
//               <span className="text-gray-300 text-6xl font-bold uppercase tracking-wider writing-vertical-rl transform rotate-180">
//                 CATEGORY
//               </span>
//             </div> */}

//             {/* Welcome Content */}
//             <div className="pl-0 lg:pl-12">
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 uppercase mb-4 md:mb-6 leading-tight">
//                 WELCOME TO <span className="text-red-600">AUTOPARTS</span>
//               </h2>
//               <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>

//               {/* Carousel Indicators & Navigation */}
//               <div className="flex items-center gap-4">
//                 {/* Custom Pagination Dots */}
//                 <div className="flex gap-2">
//                   {[0, 1, 2].map((index) => (
//                     <div
//                       key={index}
//                       className="w-2 h-2 rounded-full bg-gray-300 category-dot"
//                       data-index={index}
//                     />
//                   ))}
//                 </div>

//                 {/* Navigation Arrows */}
//                 <div className="flex gap-2 ml-auto">
//                   <button
//                     onClick={() => swiperRef.current?.slidePrev()}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-all duration-300"
//                     aria-label="Previous slide"
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => swiperRef.current?.slideNext()}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-all duration-300"
//                     aria-label="Next slide"
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content Area - Swiper Carousel */}
//           <div className="w-full lg:w-3/5">
//             <Swiper
//               modules={[Autoplay, Navigation, Pagination]}
//               spaceBetween={20}
//               slidesPerView={1}
//               loop={true}
//               autoplay={{
//                 delay: 4000,
//                 disableOnInteraction: false,
//                 pauseOnMouseEnter: true
//               }}
//               onSwiper={(swiper) => {
//                 swiperRef.current = swiper;
//               }}
//               onSlideChange={(swiper) => {
//                 updateDots(swiper.realIndex);
//               }}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 2,
//                   spaceBetween: 20
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                   spaceBetween: 20
//                 }
//               }}
//               className="category-swiper"
//             >
//               {categories.map((category, index) => (
//                 <SwiperSlide key={index}>
//                   <Link
//                     to={category.href}
//                     className="group block relative h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-red-500"
//                   >
//                     {/* Product Image */}
//                     <div className="absolute inset-0 flex items-center justify-center p-4 bg-transparent group-hover:bg-gray-50 transition-colors duration-300">
//                       <img
//                         src={category.bgImg}
//                         alt={category.title}
//                         className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
//                         loading="lazy"
//                       />
//                     </div>

//                     {/* Overlay Gradient - Only at bottom */}
//                     <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                     {/* Category Title Overlay */}
//                     <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                       <h3 className="text-gray-800 group-hover:text-white text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide drop-shadow-lg transition-colors duration-300">
//                         {category.title}
//                       </h3>
//                     </div>
//                   </Link>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>

//       {/* Custom Styles */}
//       <style>{`
//         .writing-vertical-rl {
//           writing-mode: vertical-rl;
//         }
//         .category-swiper .swiper-slide {
//           height: auto;
//         }
//         .category-dot {
//           transition: all 0.3s ease;
//         }
//       `}</style>
//     </section>
//   );
// }



