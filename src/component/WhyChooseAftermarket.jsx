import React from "react";

const features = [
  {
    title: "Original Products",
    description: "Only reliable parts from trusted Aftermarket brands.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86 75"
        className="w-16 h-16 mx-auto"
      >
        <circle cx="40" cy="40" r="35" fill="red" />
      </svg>
    ),
  },
  {
    title: "Affordable Rates",
    description:
      "Repairing a damaged vehicle can be expensive. Aftermarket products are a good solution if you're on a budget.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65 80"
        className="w-16 h-16 mx-auto"
      >
        <rect width="50" height="50" fill="red" />
      </svg>
    ),
  },
  {
    title: "Wide Availability",
    description:
      "Aftermarket parts are easily available, ensuring faster repairs and minimal downtime.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 67 67"
        className="w-16 h-16 mx-auto"
      >
        <path d="M33.5 10 L57 55 H10 L33.5 10 Z" fill="red" />
      </svg>
    ),
  },
];

export default function WhyChooseAftermarket() {
  return (
    <section className="py-12  from-blue-100 to-pink-100">
      <div className=" mx-auto px-6 ">
        {/* Section Title */}
        <h3 className="text-4xl font-bold mb-10">
          Why Choose{" "}
          <span className="text-red-500">Aftermarket Products?</span>
        </h3>

        {/* Features Grid */}
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-200 transition transform hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h4>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
