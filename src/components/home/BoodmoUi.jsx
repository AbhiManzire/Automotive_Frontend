import React, { useState, useEffect } from "react";
import { FaSearch, FaCar } from "react-icons/fa";

// 🔹 Car Search Section (Modal Content)
const SearchSection = () => {
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [modifications, setModifications] = useState([]);

  const carData = {
    CHEVROLET: {
    AVEO: { 2022: ["Base", "Mid"], 2023: ["Top", "RS"] },
    BEAT: { 2022: ["LS", "LT"], 2023: ["LTZ", "Diesel"] },
    CRUZE: { 2021: ["LT", "LTZ"], 2022: ["LTZ"] },
  },
  HONDA: {
    City: { 2021: ["SV", "V"], 2022: ["VX", "ZX"], 2023: ["ZX+", "Sport"] },
    Civic: { 2021: ["V", "VX"], 2022: ["ZX"], 2023: ["ZX+", "Type R"] },
    Amaze: { 2022: ["E", "S"], 2023: ["VX", "ZX"] },
  },
  MARUTI: {
    Swift: { 2021: ["LXI", "VXI"], 2022: ["ZXI", "ZXI+"], 2023: ["ZXI+", "Sport"] },
    Alto: { 2021: ["Std", "LXI"], 2022: ["VXI", "VXI+"], 2023: ["VXI+"] },
    Dzire: { 2022: ["LXI", "VXI"], 2023: ["ZXI", "ZXI+"] },
    Baleno: { 2022: ["Sigma", "Delta"], 2023: ["Zeta", "Alpha"] },
  },
  HYUNDAI: {
    Creta: { 2021: ["E", "S"], 2022: ["SX", "SX+"], 2023: ["SX+", "SX(O)"] },
    Venue: { 2022: ["E", "S"], 2023: ["SX", "SX(O)"] },
    i20: { 2021: ["Magna", "Sportz"], 2022: ["Asta", "Asta(O)"] },
  },
  KIA: {
    Seltos: { 2021: ["HTK+", "HTX"], 2022: ["HTX+", "GT Line"] },
    Sonet: { 2022: ["HTE", "HTK"], 2023: ["HTX", "HTX+"] },
  },
  TATA: {
    Nexon: { 2021: ["XE", "XM"], 2022: ["XZ", "XZ+"] },
    Harrier: { 2022: ["XE", "XZ"], 2023: ["XZ+", "XZA"] },
    Altroz: { 2022: ["XE", "XT"], 2023: ["XZ", "XZ+"] },
  },
  TOYOTA: {
    Fortuner: { 2021: ["GX", "VX"], 2022: ["ZX", "ZX(O)"] },
    Innova: { 2022: ["E", "G"], 2023: ["V", "Z"] },
  },
  FORD: {
    EcoSport: { 2021: ["Ambiente", "Trend"], 2022: ["Titanium", "Titanium+"] },
    Figo: { 2021: ["Trend", "Titanium"], 2022: ["Titanium+", "Sports"] },
  },
  NISSAN: {
    Magnite: { 2022: ["XE", "XL"], 2023: ["XV", "XV Premium"] },
    Kicks: { 2022: ["XL", "XV"], 2023: ["XV Premium", "XV Premium (O)"] },
  },
  RENAULT: {
    Kwid: { 2021: ["RXT", "RXL"], 2022: ["RXZ", "RXZ Opt"] },
    Duster: { 2021: ["RxE", "RxL"], 2022: ["RxZ", "RxZ Opt"] },
  },
  };

  const handleMakerChange = (e) => {
    const maker = e.target.value;
    setSelectedMaker(maker);
    setModels(maker ? Object.keys(carData[maker]) : []);
    setSelectedModel("");
    setSelectedYear("");
    setYears([]);
    setModifications([]);
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    setYears(model ? Object.keys(carData[selectedMaker][model]) : []);
    setSelectedYear("");
    setModifications([]);
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setModifications(year ? carData[selectedMaker][selectedModel][year] : []);
  };

  return (
    <div className="text-left">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Add new <span className="text-sky-500">Car</span>
      </h2>
      <h2 className="text-lg mb-4">Find your car by Number Plate:</h2>

      <div className="flex items-center border rounded-lg px-3 py-2 shadow-md mb-4">
        <span className="bg-gray-200 px-3 py-2 rounded-l">IND</span>
        <input
          type="text"
          placeholder="DL1AA2345"
          className="flex-1 px-3 py-2 outline-none text-gray-700"
        />
        <FaSearch className="text-gray-500 text-xl cursor-pointer" />
      </div>

      <p className="text-gray-500 my-4">OR</p>

      {/* Dropdowns */}
      <div className="flex flex-col gap-3 mb-4">
        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          value={selectedMaker}
          onChange={handleMakerChange}
        >
          <option value="">Select Car Maker</option>
          {Object.keys(carData).map((maker) => (
            <option key={maker} value={maker}>
              {maker}
            </option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          value={selectedModel}
          onChange={handleModelChange}
          disabled={!selectedMaker}
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          value={selectedYear}
          onChange={handleYearChange}
          disabled={!selectedModel}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          disabled={!selectedYear}
        >
          <option value="">Select Modification</option>
          {modifications.map((mod) => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter VIN"
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <button className="bg-sky-500 font-bold hover:bg-sky-600 text-white px-8 py-3 shadow rounded w-full">
        Save
      </button>
    </div>
  );
};

// 🔹 Main Component with Slideshow + Modal
export const BoodmoUi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://boodmo.com/assets/images/board/min/engine-1-v2.png",
    "https://boodmo.com/assets/images/board/min/engine-2-v2.png",
    "https://boodmo.com/assets/images/board/min/engine-3-v2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-sky-300 px-20 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col gap-6 px-4 w-full md:w-1/2">
        <div className="flex bg-white rounded-lg overflow-hidden shadow-md text-lg w-full">
          <input
            type="text"
            placeholder='Search: "Maruti Alto Oil Filter"'
            className="flex-1 px-4 py-4 outline-none text-gray-700"
          />
          <button className="bg-blue-900 text-white px-6 flex items-center justify-center">
            <FaSearch className="text-lg" />
          </button>
        </div>

        <button
          className="bg-blue-900 text-sm font-semibold text-white flex items-center justify-center gap-3 px-4 py-4 rounded-lg shadow-md hover:bg-blue-700 transition w-fit"
          onClick={() => setIsModalOpen(true)}
        >
          <FaCar className="text-2xl" />
          ADD CAR TO MY GARAGE
        </button>
      </div>

      <div className="w-full flex justify-center items-center">
        <img
          src={images[currentImage]}
          alt="Engine"
          className="h-80 md:h-96 object-contain transition-all duration-700"
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] lg:w-[30%] shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <SearchSection />
          </div>
        </div>
      )}
    </section>
  );
};
