import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchSection = () => {
    const [selectedMaker, setSelectedMaker] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [models, setModels] = useState([]);
    const [years, setYears] = useState([]);
    const [modifications, setModifications] = useState([]);

    // ✅ Full Car Data (Maker → Model → Year → Modifications)
    const carData = {
        CHEVROLET: {
            AVEO: { 2022: ["Base", "Mid"], 2023: ["Top"] },
            BEAT: { 2022: ["Base", "LS"], 2023: ["LT", "Diesel"] },
            CAPTIVA: { 2022: ["LT"], 2023: ["LTZ"] },
            CRUZE: { 2022: ["LT", "LTZ"], 2023: ["LTZ Plus"] },
            ENJOY: { 2022: ["Base"], 2023: ["Top"] },
            FORESTER: { 2022: ["2.0 Petrol"], 2023: ["AWD"] },
            OPTRA: { 2022: ["Base"], 2023: ["Top"] },
            SAIL: { 2022: ["Base"], 2023: ["Top"] },
            SPARK: { 2022: ["LS"], 2023: ["LT"] },
            TAVERA: { 2022: ["Base"], 2023: ["Neo 3"] },
            TRAILBLAZER: { 2022: ["LT"], 2023: ["LTZ"] },
        },
        FIAT: {
            Linea: { 2022: ["Active", "Emotion"], 2023: ["T-Jet"] },
            Punto: { 2022: ["Active", "Sports"], 2023: ["Evo"] },
            Abarth: { 2022: ["Base"], 2023: ["Competizione"] },
        },
        FORD: {
            EcoSport: { 2022: ["Trend", "Titanium"], 2023: ["Thunder"] },
            Endeavour: { 2022: ["Titanium"], 2023: ["Sport"] },
            Figo: { 2022: ["Base", "Titanium"], 2023: ["Blu"] },
            Aspire: { 2022: ["Trend"], 2023: ["Titanium+"] },
        },
        HONDA: {
            City: { 2022: ["SV", "V"], 2023: ["VX", "ZX"] },
            Civic: { 2022: ["V", "VX"], 2023: ["ZX"] },
            Amaze: { 2022: ["E", "S"], 2023: ["VX"] },
            Jazz: { 2022: ["V", "VX"], 2023: ["ZX"] },
        },
        HYUNDAI: {
            i20: { 2022: ["Magna", "Sportz"], 2023: ["Asta"] },
            Creta: { 2022: ["E", "EX"], 2023: ["SX", "SX(O)"] },
            Venue: { 2022: ["S", "SX"], 2023: ["N Line"] },
            Verna: { 2022: ["S", "SX"], 2023: ["SX(O)"] },
        },
        KIA: {
            Seltos: { 2022: ["HTE", "HTK"], 2023: ["GTX", "X-Line"] },
            Sonet: { 2022: ["HTE", "HTK"], 2023: ["GTX+"] },
            Carnival: { 2022: ["Premium"], 2023: ["Limousine"] },
        },
        MAHINDRA: {
            XUV300: { 2022: ["W4", "W6"], 2023: ["W8", "W8(O)"] },
            Scorpio: { 2022: ["S3", "S5"], 2023: ["S11"] },
            Thar: { 2022: ["AX", "LX"], 2023: ["Diesel", "Petrol"] },
            Bolero: { 2022: ["B4", "B6"], 2023: ["B8"] },
        },
        MARUTI: {
            Swift: {
                2022: ["LXI", "VXI"],
                2023: ["ZXI", "ZXI+"]
            },
            Baleno: {
                2022: ["Delta", "Zeta"],
                2023: ["Alpha"]
            },
            WagonR: {
                2022: ["LXI", "VXI"],
                2023: ["ZXI"]
            },
            Alto: {
                2022: ["Std", "LXI"],
                2023: ["VXI+"]
            },
            Dzire: {
                2022: ["LXI", "VXI"],
                2023: ["ZXI"]
            },
        },
        NISSAN: {
            Magnite: { 2022: ["XE", "XL"], 2023: ["XV Premium"] },
            Kicks: { 2022: ["XL"], 2023: ["XV"] },
            Sunny: { 2022: ["XE", "XL"], 2023: ["XV"] },
        },
        RENAULT: {
            Kwid: { 2022: ["RXE", "RXL"], 2023: ["Climber"] },
            Triber: { 2022: ["RXE", "RXL"], 2023: ["RXZ"] },
            Duster: { 2022: ["RXE", "RXL"], 2023: ["RXZ AWD"] },
        },
        SKODA: {
            Octavia: { 2022: ["Style"], 2023: ["L&K"] },
            Rapid: { 2022: ["Active"], 2023: ["Monte Carlo"] },
            Kushaq: { 2022: ["Ambition"], 2023: ["Style"] },
        },
        TATA: {
            Nexon: { 2022: ["XE", "XM"], 2023: ["XZ", "XZ+"] },
            Harrier: { 2022: ["XT", "XZ"], 2023: ["XZ+"] },
            Safari: { 2022: ["XE", "XM"], 2023: ["XZ+"] },
            Tiago: { 2022: ["XE", "XM"], 2023: ["XZ+"] },
        },
        TOYOTA: {
            Innova: { 2022: ["GX", "VX"], 2023: ["Crysta", "ZX"] },
            Fortuner: { 2022: ["2.7 Petrol"], 2023: ["Legender"] },
            Corolla: { 2022: ["Altis"], 2023: ["Hybrid"] },
            Glanza: { 2022: ["G"], 2023: ["V"] },
        },
        VW: {
            Polo: { 2022: ["Trendline", "Highline"], 2023: ["GT"] },
            Vento: { 2022: ["Comfortline"], 2023: ["Highline+"] },
            Tiguan: { 2022: ["Elegance"], 2023: ["R-Line"] },
        },
        AUDI: {
            A3: { 2022: ["Premium"], 2023: ["Technology"] },
            A4: { 2022: ["Premium", "Technology"], 2023: ["S Line"] },
            A5: { 2022: ["Sportback"], 2023: ["S Line"] },
            A6: { 2022: ["Premium"], 2023: ["Technology"] },
            A7: { 2022: ["Sportback"], 2023: ["S Line"] },
            A8: { 2022: ["L"], 2023: ["L Technology"] },
            Q2: { 2022: ["Premium"], 2023: ["Technology"] },
            Q3: { 2022: ["Premium Plus"], 2023: ["Technology"] },
            Q5: { 2022: ["Premium Plus"], 2023: ["Technology"] },
            Q7: { 2022: ["Premium Plus"], 2023: ["Technology"] },
            Q8: { 2022: ["Standard"], 2023: ["Technology"] },
            R8: { 2022: ["V10"], 2023: ["V10 Plus"] },
            S4: { 2022: ["Standard"], 2023: ["Performance"] },
            S5: { 2022: ["Sportback"], 2023: ["S Line"] },
            TT: { 2022: ["Coupe"], 2023: ["Roadster"] },
        },
    };

    // ✅ Handle Maker change
    const handleMakerChange = (e) => {
        const maker = e.target.value;
        setSelectedMaker(maker);
        setModels(maker ? Object.keys(carData[maker]) : []);
        setSelectedModel("");
        setSelectedYear("");
        setYears([]);
        setModifications([]);
    };

    // ✅ Handle Model change
    const handleModelChange = (e) => {
        const model = e.target.value;
        setSelectedModel(model);
        setYears(model ? Object.keys(carData[selectedMaker][model]) : []);
        setSelectedYear("");
        setModifications([]);
    };

    // ✅ Handle Year change
    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year);
        setModifications(
            year ? carData[selectedMaker][selectedModel][year] : []
        );
    };

    return (
        <section className="px-6 py-12 bg-gray-50">
            {/* Title */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold text-gray-800">
                    Search by <span className="text-sky-500">Vehicle</span>
                </h2>

                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search by number plate..."
                        className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-4 rounded-lg shadow">
                        <FaSearch />
                    </button>
                </div>
            </div>

            {/* Dropdowns */}
            <div className="flex flex-col md:flex-row items-center gap-4 bg-blue-900 p-4 rounded-lg shadow-md">
                {/* Car Maker */}
                <select
                    className="border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
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

                {/* Model */}
                <select
                    className={`border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-sky-500 ${!selectedMaker ? "text-gray-300 cursor-not-allowed" : ""
                        }`}
                    value={selectedModel}
                    onChange={handleModelChange}
                    disabled={!selectedMaker}
                >
                    <option value="">Select Model Line</option>
                    {models.map((model) => (
                        <option key={model} value={model}>
                            {model}
                        </option>
                    ))}
                </select>

                {/* Year */}
                <select
                    className={`border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-sky-500 ${!selectedModel ? "text-gray-300 cursor-not-allowed" : ""
                        }`}
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

                {/* Modification */}
                <select
                    className={`border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-sky-500 ${!selectedYear ? "text-gray-300 cursor-not-allowed" : ""
                        }`}
                    disabled={!selectedYear}
                >
                    <option value="">Select Modification</option>
                    {modifications.map((mod) => (
                        <option key={mod} value={mod}>
                            {mod}
                        </option>
                    ))}
                </select>

                {/* Search Button */}
                <button className="bg-sky-500 font-bold hover:bg-sky-600 text-white px-6 py-2 shadow rounded">
                    Search Parts
                </button>
            </div>
        </section>
    );
};

export default SearchSection;

