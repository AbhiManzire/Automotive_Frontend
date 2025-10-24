import React, { useState } from "react";

const carBrands = [
  "AUDI","BMW","CHEVROLET","DATSUN","FIAT","FORD","HONDA","HYUNDAI","ISUZU",
  "JEEP","KIA","LEXUS","MAHINDRA","MARUTI","MERCEDES-BENZ","NISSAN","RENAULT",
  "SKODA","TATA","TATA COMMERCIAL","TOYOTA","VOLVO","VW"
];

const OEMCatalogue = () => {
  const [filter, setFilter] = useState("");

  const filteredBrands = carBrands.filter((brand) =>
    brand.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="bg-white shadow-md rounded-2xl p-6 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h3 className="text-3xl font-semibold text-gray-800">
          OEM <span className="text-red-600">Catalogue</span>
        </h3>
        <input
          type="search"
          placeholder="Filter Car Maker"
          className="mt-4 md:mt-0 border border-gray-300 rounded-full px-4 py-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {filteredBrands.map((brand) => (
          <a
            key={brand}
            href="#"
            className="block text-center py-4 bg-white hover:bg-gray-50 hover:shadow-md rounded-xl font-medium text-gray-700 shadow-sm transition"
          >
            {brand}
          </a>
        ))}
      </div>
    </section>
  );
};

export default OEMCatalogue;
