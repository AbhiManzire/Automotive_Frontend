import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CurrentOffers = () => {
  // Array of images in the public folder
  const images = [
    "/fd1.jpeg",
    "/fd2.png",
    "/fd1.jpeg",
    "/fd2.png",
    "/fd1.jpeg",
  ];

  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Current <span className="text-red-500">Offers</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Offer ${index + 1}`}
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CurrentOffers;
