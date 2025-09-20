import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CurrentOffers = () => {
  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Current <span className="text-sky-500">Offers</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
      >

        <SwiperSlide>
          <img
            src="https://boodmo.com/media/images/slider/dd4ba16.webp"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>


        <SwiperSlide>
          <img
            src="https://boodmo.com/media/images/slider/dd4ba16.webp"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>


        <SwiperSlide>
          <img
            src="https://boodmo.com/media/images/slider/8a7f220.webp"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://boodmo.com/media/images/slider/e86b916.webp"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://boodmo.com/media/images/slider/de458dc.webp"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CurrentOffers;
