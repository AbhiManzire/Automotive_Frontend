import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

// Workshop images data
const workshops = [
  {
    id: 1,
    name: "RT Workshop",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    location: "Delhi"
  },
  {
    id: 2,
    name: "Auto Service Center",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    location: "Mumbai"
  },
  {
    id: 3,
    name: "Mobil Workshop",
    image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=800&q=80",
    location: "Bangalore"
  },
  {
    id: 4,
    name: "Premium Auto Care",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    location: "Chennai"
  },
  {
    id: 5,
    name: "Express Service",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    location: "Kolkata"
  },
  {
    id: 6,
    name: "Quick Fix Garage",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    location: "Hyderabad"
  }
];

export default function ChooseWorkshop() {
  const swiperRef = useRef(null);

  return (
    <section className="relative bg-white py-4 sm:py-6 md:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Red Accent Line */}
        <div className="w-16 h-0.5 bg-red-600 mb-4 md:mb-5"></div>

        {/* Header Section */}
        <div className="mb-5 md:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Choose the Workshop Near You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
            Schedule a Pickup Today!
          </p>
        </div>

        {/* Main Content: Carousel + Map */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6">
          {/* Left Side - Workshop Carousel */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={12}
                slidesPerView={1}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                navigation={{
                  prevEl: '.workshop-prev',
                  nextEl: '.workshop-next',
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  if (swiper.autoplay) {
                    swiper.autoplay.start();
                  }
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 12
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 14
                  },
                  1280: {
                    slidesPerView: 2,
                    spaceBetween: 16
                  }
                }}
                className="workshop-swiper"
              >
                {workshops.map((workshop) => (
                  <SwiperSlide key={workshop.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={workshop.image}
                        alt={workshop.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/800x450?text=' + workshop.name;
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-2 md:p-3">
                        <h3 className="text-white text-sm md:text-base font-bold mb-0.5">
                          {workshop.name}
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm">
                          {workshop.location}
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <button
                className="workshop-prev absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Previous slide"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="workshop-next absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Next slide"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full lg:w-1/3 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px] rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border border-gray-200"
            >
              {/* Stylized Map Background */}
              <div className="absolute inset-0">
                {/* Roads */}
                <svg className="w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="none">
                  {/* Horizontal Roads */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#fef3c7" strokeWidth="6" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#fef3c7" strokeWidth="6" />
                  <line x1="0" y1="300" x2="400" y2="300" stroke="#fef3c7" strokeWidth="6" />
                  <line x1="0" y1="400" x2="400" y2="400" stroke="#fef3c7" strokeWidth="6" />
                  
                  {/* Vertical Roads */}
                  <line x1="100" y1="0" x2="100" y2="500" stroke="#fef3c7" strokeWidth="6" />
                  <line x1="200" y1="0" x2="200" y2="500" stroke="#fef3c7" strokeWidth="6" />
                  <line x1="300" y1="0" x2="300" y2="500" stroke="#fef3c7" strokeWidth="6" />
                  
                  {/* Roundabout/Circle */}
                  <circle cx="200" cy="250" r="30" fill="#d1fae5" stroke="#a7f3d0" strokeWidth="3" />
                </svg>
              </div>

              {/* Location Markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Marker 1 - Top Left */}
                <div className="absolute top-[15%] left-[20%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-7 bg-red-600 rounded-t-full rounded-b-sm transform rotate-45 shadow-md">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold transform -rotate-45">
                        🚗
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0.5 text-[7px] text-gray-700 font-semibold whitespace-nowrap">
                      GoMechanic
                    </div>
                  </div>
                </div>

                {/* Marker 2 - Top Right */}
                <div className="absolute top-[20%] right-[25%] transform translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-7 bg-red-600 rounded-t-full rounded-b-sm transform rotate-45 shadow-md">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold transform -rotate-45">
                        🚗
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0.5 text-[7px] text-gray-700 font-semibold whitespace-nowrap">
                      GoMechanic
                    </div>
                  </div>
                </div>

                {/* Marker 3 - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-7 bg-red-600 rounded-t-full rounded-b-sm transform rotate-45 shadow-md">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold transform -rotate-45">
                        🚗
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0.5 text-[7px] text-gray-700 font-semibold whitespace-nowrap">
                      GoMechanic
                    </div>
                  </div>
                </div>

                {/* Marker 4 - Bottom Left */}
                <div className="absolute bottom-[20%] left-[30%] transform -translate-x-1/2 translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-7 bg-red-600 rounded-t-full rounded-b-sm transform rotate-45 shadow-md">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold transform -rotate-45">
                        🚗
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0.5 text-[7px] text-gray-700 font-semibold whitespace-nowrap">
                      GoMechanic
                    </div>
                  </div>
                </div>

                {/* Marker 5 - Bottom Right */}
                <div className="absolute bottom-[15%] right-[20%] transform translate-x-1/2 translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-7 bg-red-600 rounded-t-full rounded-b-sm transform rotate-45 shadow-md">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold transform -rotate-45">
                        🚗
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0.5 text-[7px] text-gray-700 font-semibold whitespace-nowrap">
                      GoMechanic
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay Text */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  +43 more
                </p>
              </div>

              {/* LOCATE US Button */}
              <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm">
                  LOCATE US
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .workshop-swiper .swiper-slide {
          height: auto;
        }
        .workshop-prev,
        .workshop-next {
          display: flex;
        }
        .workshop-prev.swiper-button-disabled,
        .workshop-next.swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

