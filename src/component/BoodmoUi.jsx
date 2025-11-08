import React, { useState, useEffect, useMemo } from "react";
import { FaSearch, FaCar } from "react-icons/fa";
import { useVehicle } from "../contexts/VehicleContext";
import { 
  getVehicleData, 
  getVehicleMakers, 
  getModelsForMaker, 
  getYearsForModel, 
  getModificationsForYear,
  getVehicleImageUrl 
} from "../data/vehicleData";

// ✅ Local images (inside src/assets/img/)
import engine1 from "../assets/img/engine1.png";
import engine2 from "../assets/img/engine2.jpg";
import engine3 from "../assets/img/engine3.jpg";
import bannerui from "../assets/img/bannerui.jpg";

const SearchSection = ({ onClose }) => {
  const { addVehicle } = useVehicle();
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModification, setSelectedModification] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [vin, setVin] = useState("");
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [modifications, setModifications] = useState([]);

  // ✅ Get vehicle data from Vehicles folder
  const vehicleData = useMemo(() => getVehicleData(), []);
  const availableMakers = useMemo(() => getVehicleMakers(), []);

  const handleMakerChange = (e) => {
    const maker = e.target.value;
    setSelectedMaker(maker);
    const makerModels = getModelsForMaker(maker);
    setModels(makerModels);
    setSelectedModel("");
    setSelectedYear("");
    setYears([]);
    setModifications([]);
    setSelectedModification("");
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    const modelYears = getYearsForModel(selectedMaker, model);
    setYears(modelYears);
    setSelectedYear("");
    setModifications([]);
    setSelectedModification("");
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    const yearModifications = getModificationsForYear(selectedMaker, selectedModel, parseInt(year));
    setModifications(yearModifications);
    setSelectedModification("");
  };

  const handleModificationChange = (e) => {
    setSelectedModification(e.target.value);
  };

  const handleSave = () => {
    // Validate required fields
    if (!selectedMaker || !selectedModel || !selectedYear || !selectedModification) {
      alert("Please select Car Maker, Model, Year, and Modification");
      return;
    }

    // Create vehicle object
    const vehicleData = {
      make: selectedMaker,
      model: selectedModel,
      variant: selectedModification,
      year: selectedYear.toString(),
      registrationNumber: numberPlate.trim() || undefined,
      vin: vin.trim() || undefined,
    };

    // Save vehicle using VehicleContext
    addVehicle(vehicleData);

    // Show success message
    alert(`Vehicle saved successfully!\n${selectedMaker} ${selectedModel} ${selectedModification} (${selectedYear})`);

    // Reset form
    setSelectedMaker("");
    setSelectedModel("");
    setSelectedYear("");
    setSelectedModification("");
    setNumberPlate("");
    setVin("");
    setModels([]);
    setYears([]);
    setModifications([]);

    // Close modal
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="text-left">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Add new <span className="text-red-500">Car</span>
      </h2>
      <h2 className="text-lg mb-4">Find your car by Number Plate:</h2>

      {/* Number Plate Input */}
      <div className="flex items-center border rounded-lg px-3 py-2 shadow-md mb-4">
        <span className="bg-gray-200 px-3 py-2 rounded-l">IND</span>
        <input
          type="text"
          placeholder="DL1AA2345"
          value={numberPlate}
          onChange={(e) => setNumberPlate(e.target.value)}
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
          {availableMakers.map((maker) => (
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
          value={selectedModification}
          onChange={handleModificationChange}
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
          placeholder="Enter VIN (Optional)"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <button 
        onClick={handleSave}
        className="bg-sky-500 font-bold hover:bg-sky-600 text-white px-8 py-3 shadow rounded w-full transition-colors"
      >
        Save
      </button>
    </div>
  );
};

// 🔹 Main Component
export const BoodmoUi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [engine1, engine2, engine3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-red-50">
      {/* 🔹 Banner Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
        {/* 🔹 Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bannerui}
            alt="Sparelo Banner"
            className="w-full h-full object-cover opacity-70"
          />
          {/* 🔹 Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* 🔹 Centered Content - No Background */}
        <div className="relative z-10 w-full max-w-6xl px-6 md:px-8 text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl mb-6 text-white font-semibold">
            Find Genuine <span className="text-red-400">OEM</span> & <br />
            <span className="text-blue-400">Aftermarket</span> Auto Parts
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Your one-stop solution for all automotive spare parts
          </p>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-8">
            {/* Search input and button */}
            <div className="flex bg-white rounded-xl overflow-hidden shadow-2xl text-lg mb-4 transform hover:scale-105 transition-transform duration-300">
              <input
                type="text"
                placeholder='Search: "Maruti Alto Oil Filter"'
                className="flex-1 px-6 py-4 text-base outline-none text-gray-800 placeholder-gray-500"
              />
              <button className="bg-red-500 text-white px-8 flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                <FaSearch className="text-xl" />
              </button>
            </div>

            {/* Add Car button */}
            <button
              className=" text-lg font-semibold text-white flex items-center justify-center gap-3 px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mx-auto"
              onClick={() => setIsModalOpen(true)}
            >
              <FaCar className="text-2xl" />
              ADD CAR TO MY GARAGE
            </button>
          </div>
         
        </div>
      </div>

      {/* 🔹 Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] lg:w-[30%] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <SearchSection onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
};