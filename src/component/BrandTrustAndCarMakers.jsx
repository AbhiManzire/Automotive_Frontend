

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brands = [
  { name: "PHC", logo: "https://boodmo.com/media/images/brand/4f106b0.webp", link: "/brands/3529-phc/" },
  { name: "DKMAX", logo: "https://boodmo.com/media/images/brand/ff1cc61.webp", link: "/brands/6341-dkmax/" },
  { name: "Elofic", logo: "https://boodmo.com/media/images/brand/6d1831f.webp", link: "/brands/5935-elofic/" },
  { name: "Lemforder", logo: "https://boodmo.com/media/images/brand/987fd20.webp", link: "/brands/1550-lemforder/" },
  { name: "Sachs", logo: "https://boodmo.com/media/images/brand/1586c06.webp", link: "/brands/2232-sachs/" },
  { name: "Spark Minda", logo: "https://boodmo.com/media/images/brand/6b0985f.webp", link: "/brands/5931-sparkminda/" },
  { name: "EuroMac", logo: "https://boodmo.com/media/images/brand/7fab5d4.webp", link: "/brands/6261-euromac/" },
  { name: "Shinshine", logo: "https://boodmo.com/media/images/brand/551a859.webp", link: "/brands/6374-sheen/" },
  { name: "IGB", logo: "https://boodmo.com/media/images/brand/3408b8a.webp", link: "/brands/6360-indo_german_brakes/" },
  { name: "UNO Mind", logo: "https://boodmo.com/media/images/brand/e5b18f5.webp", link: "/brands/2818-unominda/" },
  { name: "Technix", logo: "https://boodmo.com/media/images/brand/52704b7.webp", link: "/brands/6326-technix/" },
  { name: "Valeo", logo: "https://boodmo.com/media/images/brand/af34236.webp", link: "/brands/2622-valeo/" },
  { name: "Macklite", logo: "https://boodmo.com/media/images/brand/af34236.webp", link: "/brands/6367-maclite/" },
  { name: "SC", logo: "https://boodmo.com/media/images/brand/a2c58ac.webp", link: "/brands/6377-super_circle/" },
  { name: "MGT", logo: "https://boodmo.com/media/images/brand/f50f113.webp", link: "/brands/6381-mgt/" },
];

const carMakers = [
  "MARUTI", "HYUNDAI", "MAHINDRA", "TATA", "CHEVROLET", "HONDA",
  "SKODA", "VW", "TOYOTA", "NISSAN", "RENAULT", "FORD", "FIAT", "KIA",
];

export default function BrandTrustAndCarMakers() {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Brands Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center mb-8 gap-2">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Brands we <span className="text-red-500">Trust</span>
          </h2>
          <div className="w-full  text-right flex justify-end px-4">
            <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
              VIEW ALL
            </a>
          </div>
        </div>

        {/* Swiper for Brands */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 6 },
            640: { slidesPerView: 3, spaceBetween: 8 },
            1024: { slidesPerView: 6, spaceBetween: 12 },
          }}
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={brand.link}
                className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img src={brand.logo} alt={brand.name} className="h-14 object-contain" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Car Makers Section */}
      <section>
        <div className="flex flex-col items-center mb-8 gap-2">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Popular <span className="text-red-500">Car Makers</span>
          </h2>

          <div className="w-full  text-right flex justify-end px-4">
            <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
              VIEW ALL
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {carMakers.map((maker) => (
            <button
              key={maker}
              className="bg-white border border-gray-200 shadow-sm py-4 px-3 rounded-lg font-medium text-gray-700 
                         hover:bg-sky-50 hover:shadow-md hover:border-sky-300 hover:scale-105 transition-transform duration-300"
            >
              {maker}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

