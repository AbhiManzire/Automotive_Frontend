import React, { useState, useEffect } from "react";
import { FaSearch, FaCar } from "react-icons/fa";

// ✅ Import local images
import engine1 from "../assets/img/engine1.png";
import engine2 from "../assets/img/engine2.jpg";
import engine3 from "../assets/img/engine3.jpg";

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
    AVEO: {
      2021: ["Base", "Mid"],
      2022: ["Base", "Mid"],
      2023: ["Top"],
      2024: ["Premier", "LTZ"],
      2025: ["Hybrid LTZ"],
    },
    BEAT: {
      2021: ["PS", "LS"],
      2022: ["Base", "LS"],
      2023: ["LT", "Diesel"],
      2024: ["LTZ", "Premier Edition"],
      2025: ["EV Prototype"],
    },
    CAPTIVA: {
      2021: ["LT", "LTZ"],
      2022: ["LT"],
      2023: ["LTZ"],
      2024: ["Premier"],
      2025: ["Hybrid AWD"],
    },
    CRUZE: {
      2021: ["LT", "LTZ"],
      2022: ["LT", "LTZ"],
      2023: ["LTZ Plus"],
      2024: ["RS", "Premier Turbo"],
      2025: ["Cruze Hybrid"],
    },
    ENJOY: {
      2021: ["Base", "LS"],
      2022: ["Base"],
      2023: ["Top"],
      2024: ["LTZ", "Premier"],
      2025: ["CNG Variant"],
    },
    FORESTER: {
      2021: ["2.0 Petrol"],
      2022: ["2.0 Petrol"],
      2023: ["AWD"],
      2024: ["AWD XT"],
      2025: ["Hybrid AWD"],
    },
    OPTRA: {
      2021: ["Base"],
      2022: ["Base"],
      2023: ["Top"],
      2024: ["LTZ"],
      2025: ["Premier Edition"],
    },
    SAIL: {
      2021: ["Base", "LS"],
      2022: ["Base"],
      2023: ["Top"],
      2024: ["LTZ"],
      2025: ["EV Concept"],
    },
    SPARK: {
      2021: ["LS"],
      2022: ["LS"],
      2023: ["LT"],
      2024: ["LTZ"],
      2025: ["Spark EV"],
    },
    TAVERA: {
      2021: ["Neo 2", "Base"],
      2022: ["Base"],
      2023: ["Neo 3"],
      2024: ["Neo+"],
      2025: ["CNG Neo+"],
    },
    TRAILBLAZER: {
      2021: ["LT"],
      2022: ["LT"],
      2023: ["LTZ"],
      2024: ["Premier AWD"],
      2025: ["EV RS"],
    },
  },

  FIAT: {
    LINEA: {
      2021: ["Active", "Dynamic"],
      2022: ["Active", "Emotion"],
      2023: ["T-Jet"],
      2024: ["T-Jet Plus"],
      2025: ["Hybrid"],
    },
    PUNTO: {
      2021: ["Active", "Emotion"],
      2022: ["Active", "Sports"],
      2023: ["Evo"],
      2024: ["Abarth Edition"],
      2025: ["Evo Turbo"],
    },
    ABARTH: {
      2021: ["Base"],
      2022: ["Base"],
      2023: ["Competizione"],
      2024: ["Performance Edition"],
      2025: ["Abarth EV Concept"],
    },
  },

  FORD: {
    ECO: {
      2021: ["Trend", "Titanium"],
      2022: ["Trend", "Titanium"],
      2023: ["Thunder"],
      2024: ["S Edition"],
      2025: ["Eco EV"],
    },
    ENDEAVOUR: {
      2021: ["Titanium", "Titanium+"],
      2022: ["Titanium"],
      2023: ["Sport"],
      2024: ["Platinum"],
      2025: ["Everest Hybrid"],
    },
    FIGO: {
      2021: ["Base", "Trend"],
      2022: ["Base", "Titanium"],
      2023: ["Blu"],
      2024: ["Sport Edition"],
      2025: ["Hybrid"],
    },
    ASPIRE: {
      2021: ["Trend", "Titanium"],
      2022: ["Trend"],
      2023: ["Titanium+"],
      2024: ["Blu Edition"],
      2025: ["Hybrid Titanium"],
    },
  },

  HONDA: {
    City: {
      2021: ["SV", "V"],
      2022: ["SV", "V"],
      2023: ["VX", "ZX"],
      2024: ["e:HEV VX", "Hybrid ZX"],
      2025: ["RS Hybrid"],
    },
    Civic: {
      2021: ["V", "VX"],
      2022: ["V", "VX"],
      2023: ["ZX"],
      2024: ["RS Turbo"],
      2025: ["Hybrid ZX+"],
    },
    Amaze: {
      2021: ["E", "S"],
      2022: ["E", "S"],
      2023: ["VX"],
      2024: ["Special Edition"],
      2025: ["e:HEV"],
    },
    Jazz: {
      2021: ["V", "VX"],
      2022: ["V", "VX"],
      2023: ["ZX"],
      2024: ["ZX CVT"],
      2025: ["Hybrid ZX"],
    },
  },

  HYUNDAI: {
    i20: {
      2021: ["Magna", "Sportz"],
      2022: ["Magna", "Sportz"],
      2023: ["Asta"],
      2024: ["N Line"],
      2025: ["Turbo Asta+"],
    },
    Creta: {
      2021: ["E", "EX"],
      2022: ["E", "EX"],
      2023: ["SX", "SX(O)"],
      2024: ["Adventure Edition", "Knight Edition"],
      2025: ["Creta EV"],
    },
    Venue: {
      2021: ["S", "SX"],
      2022: ["S", "SX"],
      2023: ["N Line"],
      2024: ["Knight Edition"],
      2025: ["Venue EV"],
    },
    Verna: {
      2021: ["S", "SX"],
      2022: ["S", "SX"],
      2023: ["SX(O)"],
      2024: ["Turbo DCT"],
      2025: ["Hybrid SX(O)"],
    },
  },

  KIA: {
    Seltos: {
      2021: ["HTE", "HTK"],
      2022: ["HTE", "HTK"],
      2023: ["GTX", "X-Line"],
      2024: ["Facelift HTX+", "Diesel AT"],
      2025: ["EV X-Line"],
    },
    Sonet: {
      2021: ["HTE", "HTK"],
      2022: ["HTE", "HTK"],
      2023: ["GTX+"],
      2024: ["Facelift HTX", "X-Line"],
      2025: ["Sonet EV"],
    },
    Carnival: {
      2021: ["Premium", "Prestige"],
      2022: ["Premium"],
      2023: ["Limousine"],
      2024: ["KA4 Edition"],
      2025: ["Carnival EV"],
    },
  },

  MAHINDRA: {
    XUV300: {
      2021: ["W4", "W6"],
      2022: ["W4", "W6"],
      2023: ["W8", "W8(O)"],
      2024: ["TurboSportz"],
      2025: ["XUV300 EV"],
    },
    Scorpio: {
      2021: ["S3", "S5"],
      2022: ["S3", "S5"],
      2023: ["S11"],
      2024: ["Scorpio N Z8L"],
      2025: ["Scorpio EV"],
    },
    Thar: {
      2021: ["AX", "LX"],
      2022: ["AX", "LX"],
      2023: ["Diesel", "Petrol"],
      2024: ["RWD Variant"],
      2025: ["Thar.e"],
    },
    Bolero: {
      2021: ["B2", "B4"],
      2022: ["B4", "B6"],
      2023: ["B8"],
      2024: ["Neo+"],
      2025: ["Neo EV"],
    },
  },

  MARUTI: {
    Swift: {
      2021: ["LXI", "VXI"],
      2022: ["LXI", "VXI"],
      2023: ["ZXI", "ZXI+"],
      2024: ["CNG ZXI"],
      2025: ["Hybrid ZXI+"],
    },
    Baleno: {
      2021: ["Delta", "Zeta"],
      2022: ["Delta", "Zeta"],
      2023: ["Alpha"],
      2024: ["RS Turbo"],
      2025: ["Hybrid Alpha+"],
    },
    WagonR: {
      2021: ["LXI", "VXI"],
      2022: ["LXI", "VXI"],
      2023: ["ZXI"],
      2024: ["CNG VXI"],
      2025: ["WagonR EV"],
    },
    Alto: {
      2021: ["Std", "LXI"],
      2022: ["Std", "LXI"],
      2023: ["VXI+"],
      2024: ["K10 CNG"],
      2025: ["Alto EV"],
    },
    Dzire: {
      2021: ["LXI", "VXI"],
      2022: ["LXI", "VXI"],
      2023: ["ZXI"],
      2024: ["ZXI+"],
      2025: ["Hybrid ZXI+"],
    },
  },

  NISSAN: {
    Magnite: {
      2021: ["XE", "XL"],
      2022: ["XE", "XL"],
      2023: ["XV Premium"],
      2024: ["Turbo CVT"],
      2025: ["EV Concept"],
    },
    Kicks: {
      2021: ["XL"],
      2022: ["XL"],
      2023: ["XV"],
      2024: ["XV Premium Turbo"],
      2025: ["Hybrid"],
    },
    Sunny: {
      2021: ["XE", "XL"],
      2022: ["XE", "XL"],
      2023: ["XV"],
      2024: ["XV Premium CVT"],
      2025: ["Sunny e-Power"],
    },
  },

  RENAULT: {
    Kwid: {
      2021: ["RXE", "RXL"],
      2022: ["RXE", "RXL"],
      2023: ["Climber"],
      2024: ["AMT Climber"],
      2025: ["EV Concept"],
    },
    Triber: {
      2021: ["RXE", "RXL"],
      2022: ["RXE", "RXL"],
      2023: ["RXZ"],
      2024: ["Urban Night Edition"],
      2025: ["Triber EV"],
    },
    Duster: {
      2021: ["RXE", "RXL"],
      2022: ["RXE", "RXL"],
      2023: ["RXZ AWD"],
      2024: ["Next-Gen AWD"],
      2025: ["Hybrid AWD"],
    },
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
        Add new <span className="text-red-500">Car</span>
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

  // ✅ Local images instead of URLs
  const images = [engine1, engine2, engine3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-red-300 px-20 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* 🔹 Left side = Images */}
      {/* <div className="w-full flex justify-center items-center">
        <img
          src={images[currentImage]}
          alt="Engine"
          className="h-50 md:h-56 py-2 w-full object-contain transition-all duration-700"
        />
      </div> */}

      {/* 🔹 Right side = Search + Add Car */}
      <div className="flex flex-col gap-6 px-4 py-20 w-full md:w-1/2">
        <div className="flex bg-white rounded-lg overflow-hidden shadow-md text-lg w-full">
          <input
            type="text"
            placeholder='Search: "Maruti Alto Oil Filter"'
            className="flex-1 px-4 py-3 outline-none text-gray-700"
          />
          <button className="bg-red-500 text-white px-6 flex items-center justify-center">
            <FaSearch className="text-lg" />
          </button>
        </div>

        <button
          className="bg-gray-500 text-sm font-semibold text-white flex items-center justify-center gap-3 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition w-fit"
          onClick={() => setIsModalOpen(true)}
        >
          <FaCar className="text-2xl" />
          ADD CAR TO MY GARAGE
        </button>
      </div>

      {/* 🔹 Modal */}
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