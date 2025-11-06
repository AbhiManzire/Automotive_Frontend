import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaTag, FaClock, FaFire, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CurrentOffers = () => {
  // Array of offers with images and details
  const offers = [
    {
      id: 1,
      image: "/fd1.jpeg",
      title: "Summer Special",
      discount: "50% OFF",
      description: "On all engine parts",
      timeLeft: "2 days left",
      tag: "HOT",
      bgGradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      image: "/fd2.png",
      title: "Winter Ready",
      discount: "30% OFF",
      description: "Brake systems & tires",
      timeLeft: "5 days left",
      tag: "NEW",
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      image: "/fd1.jpeg",
      title: "Flash Sale",
      discount: "60% OFF",
      description: "Limited time only",
      timeLeft: "1 day left",
      tag: "FLASH",
      bgGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      image: "/fd2.png",
      title: "Member Exclusive",
      discount: "BUY 2 GET 1",
      description: "For premium members",
      timeLeft: "7 days left",
      tag: "EXCLUSIVE",
      bgGradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      image: "/fd1.jpeg",
      title: "Clearance Sale",
      discount: "UP TO 70%",
      description: "Last chance offers",
      timeLeft: "3 days left",
      tag: "CLEARANCE",
      bgGradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            <FaFire className="text-red-500" />
            LIMITED TIME OFFERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Current <span className="text-red-500">Hot Deals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these exclusive offers! Limited time only with huge discounts on premium auto parts.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active'
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            className="w-full pb-16"
            breakpoints={{
              640: { 
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 25
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 30
              },
              1280: { 
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Tag Badge */}
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${offer.bgGradient} shadow-lg`}>
                    {offer.tag}
                  </div>
                  
                  {/* Time Left Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-black/80 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                    <FaClock className="text-yellow-400" />
                    {offer.timeLeft}
                  </div>

                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {offer.description}
                    </p>
                    
                    {/* Discount Badge */}
                    <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-xl font-bold text-lg mb-4 shadow-lg">
                      {offer.discount}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn">
                      Shop Now
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${offer.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                    <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-8"></div>

          {/* Custom Navigation */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all duration-300 border border-gray-200">
            <FaArrowLeft />
          </button>
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all duration-300 border border-gray-200">
            <FaArrowRight />
          </button>
        </div>
        
      </div>

      <style jsx>{`
        .custom-bullet {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: linear-gradient(135deg, #ef4444, #f97316);
          transform: scale(1.2);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CurrentOffers;