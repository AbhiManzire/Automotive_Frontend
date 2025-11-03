import React from "react";
import { useNavigate } from "react-router-dom";
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
  { name: "MARUTI", link: "/vehicles/maruti/" },
  { name: "HYUNDAI", link: "/vehicles/hyundai/" },
  { name: "MAHINDRA", link: "/vehicles/mahindra/" },
  { name: "TATA", link: "/vehicles/tata/" },
  { name: "CHEVROLET", link: "/vehicles/chevrolet/" },
  { name: "HONDA", link: "/vehicles/honda/" },
  { name: "SKODA", link: "/vehicles/skoda/" },
  { name: "VW", link: "/vehicles/vw/" },
  { name: "TOYOTA", link: "/vehicles/toyota/" },
  { name: "NISSAN", link: "/vehicles/nissan/" },
  { name: "RENAULT", link: "/vehicles/renault/" },
  { name: "FORD", link: "/vehicles/ford/" },
  { name: "FIAT", link: "/vehicles/fiat/" },
  { name: "KIA", link: "/vehicles/kia/" },
];

export default function BrandTrustAndCarMakers() {
  const navigate = useNavigate();

  const handleBrandViewAll = () => navigate("/brands");
  const handleCarMakerViewAll = () => navigate("/vehicles");

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 text-gray-800">
      {/* ===================== BRANDS SECTION ===================== */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Brands we <span className="text-red-500">Trust</span>
          </h2>
          <button
            onClick={handleBrandViewAll}
            className="mt-4 md:mt-0 text-sm text-blue-600 hover:underline font-semibold transition-colors"
          >
            VIEW ALL
          </button>
        </div>

        {/* Swiper for Brands */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={2}
          slidesPerView={6}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 8 },
            640: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 16 },
          }}
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={brand.link}
                className="flex items-center justify-center p-6 rounded-md 
                           shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-18 w-auto object-contain transition"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===================== CAR MAKERS SECTION ===================== */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Popular <span className="text-red-500">Car Makers</span>
          </h2>
          <button
            onClick={handleCarMakerViewAll}
            className="mt-4 md:mt-0 text-sm text-blue-600 hover:underline font-semibold transition-colors"
          >
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {carMakers.map((maker) => (
            <button
              key={maker.name}
              onClick={() => navigate(maker.link)}
              className="bg-white border border-gray-200 rounded-xl py-4 px-3 text-base font-medium text-gray-700
                         shadow-sm hover:shadow-md hover:border-sky-300 hover:bg-sky-50 hover:scale-105 transition-all duration-300"
            >
              {maker.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
