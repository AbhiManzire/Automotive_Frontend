import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const articles = [
    {
        id: 1,
        title: "Engine Types: Overview of Car Engines by Cylinder Configuration",
        date: "27 Apr, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/111b7cf.webp",
        desc: "Understanding these different engines enhances appreciation for automotive engineering and informs choices in car ownership.",
        tags: ["DIESEL", "ELECTRIC CARS", "ENGINE", "PETROL"],
        link: "/pages/article/engine_types_overview/",
    },
    {
        id: 2,
        title: "Unveiling the Secrets of Your Car's Exhaust System",
        date: "19 Apr, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/863c2e3.webp",
        desc: "A deep dive into the critical component of a car's performance and environmental impact.",
        tags: ["CATALYST", "ENGINE", "EXHAUST"],
        link: "/pages/article/exhaust_system/",
    },
    {
        id: 3,
        title: "Investment or Loss: A Guide to Buying a Car in India",
        date: "15 Apr, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/d894ef0.webp",
        desc: "Insights into navigating the complexities of the vibrant Indian car market.",
        tags: ["INDIAN AUTOMOBILE INDUSTRY"],
        link: "/pages/article/investment_or_loss_a_guide_to_buying_a_car_in_india/",
    },
    {
        id: 4,
        title: "The Importance of Regular Car Maintenance",
        date: "10 Apr, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/maintenance_image.webp",
        desc: "Tips and best practices for keeping your vehicle in top condition.",
        tags: ["MAINTENANCE", "VEHICLE CARE"],
        link: "/pages/article/importance_of_regular_car_maintenance/",
    },
    {
        id: 5,
        title: "Understanding Car Insurance: What You Need to Know",
        date: "5 Apr, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/insurance_image.webp",
        desc: "A comprehensive guide to car insurance policies and coverage options.",
        tags: ["INSURANCE", "VEHICLE PROTECTION"],
        link: "/pages/article/understanding_car_insurance/",
    },
    {
        id: 6,
        title: "Electric Vehicles: The Future of Transportation",
        date: "1 Apr, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/ev_image.webp",
        desc: "Exploring the rise of electric vehicles and their impact on the automotive industry.",
        tags: ["ELECTRIC VEHICLES", "SUSTAINABILITY"],
        link: "/pages/article/electric_vehicles_future/",
    },
    {
        id: 7,
        title: "How to Choose the Right Car for Your Needs",
        date: "28 Mar, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/choose_car_image.webp",
        desc: "Factors to consider when selecting a car that fits your lifestyle and requirements.",
        tags: ["CAR SELECTION", "BUYING GUIDE"],
        link: "/pages/article/choose_right_car/",
    },
    {
        id: 8,
        title: "The Evolution of Car Safety Features",
        date: "20 Mar, 2024",
        img: "https://boodmo.com/media/cache/articles_image_medium/images/articles/safety_features_image.webp",
        desc: "A look at how car safety technologies have advanced over the years.",
        tags: ["SAFETY", "TECHNOLOGY"],
        link: "/pages/article/evolution_car_safety/",
    },
];

const ArticleReview = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleArticles = showAll ? articles.length : 3;

    return (
        <section>
            <div class ="px-6">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                    Article & <span className="text-red-500">Review</span>
                </h2>
            </div>

            <div className="px-4 py-8">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {articles.slice(0, visibleArticles).map((article) => (
                        <SwiperSlide key={article.id}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={article.img}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex flex-col gap-2">
                                    <a
                                        href={article.link}
                                        className="text-lg font-semibold text-blue-700 hover:underline"
                                    >
                                        {article.title}
                                    </a>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="#59d8fd"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 1a9 9 0 100 18 9 9 0 000-18zm1 12h-2v-5h2v5zm0 4h-2v-2h2v2z" />
                                        </svg>
                                        {article.date}
                                    </p>
                                    <p className="text-gray-700 text-sm">{article.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {article.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-red-700 px-2 py-1 text-xs rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {!showAll && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(true)}
                            className="bg-sky-400 text-white px-4 py-2 rounded-full hover:bg-sky-500 transition-colors"
                        >
                            View All 
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ArticleReview;
