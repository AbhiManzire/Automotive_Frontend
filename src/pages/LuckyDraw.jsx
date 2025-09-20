import React, { useEffect, useState } from "react";
import LuckyDrawServices from "@/services/LuckyDrawServices";

const LuckyDrawPage = () => {
  const [configs, setConfigs] = useState([]);
  const [vehicleId, setVehicleId] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [mode, setMode] = useState("manual"); // manual or auto

  useEffect(() => {
    const fetchConfigs = async () => {
      const res = await LuckyDrawServices.getAllConfigs();
      setConfigs(res.data);
    };
    fetchConfigs();
  }, []);

  const handleConfigSubmit = async (e) => {
    e.preventDefault();
    const body = {
      vehicleType,
      state,
      couponValue: vehicleValue, // or separate input for coupon value
      isEligible: true,
    };
    await LuckyDrawServices.createOrUpdateConfig(body);
    alert("Config saved");
  };

  const handleGenerateCoupons = async () => {
    try {
      let res;
      const payload = {
        vehicleId,
        vehicleType,
        vehicleValue,
        state,
        region,
      };
      if (mode === "manual") {
        res = await LuckyDrawServices.manualGenerateCoupons(payload);
      } else {
        res = await LuckyDrawServices.autoGenerateCoupons(payload);
      }
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to generate coupons");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lucky Draw Management</h2>

      {/* Config Form */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Add / Update Config</h3>
        <form onSubmit={handleConfigSubmit}>
          <input
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            placeholder="Vehicle Type"
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            value={vehicleValue}
            onChange={(e) => setVehicleValue(e.target.value)}
            placeholder="Coupon Value"
            type="number"
            className="border p-2 mb-2 w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Config
          </button>
        </form>
      </div>

      {/* Coupon Generator */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Generate Coupons</h3>

        {/* Mode Switch */}
        <div className="mb-4">
          <label className="mr-4 font-medium">Select Mode:</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="border p-2"
          >
            <option value="manual">Manual</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <input
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          placeholder="Vehicle ID"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          placeholder="Vehicle Type"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          value={vehicleValue}
          onChange={(e) => setVehicleValue(e.target.value)}
          placeholder="Vehicle Value"
          type="number"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="Region"
          className="border p-2 mb-2 w-full"
          required
        />

        <button
          onClick={handleGenerateCoupons}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Generate Coupons ({mode})
        </button>
      </div>

      {/* Config List */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Existing Configs</h3>
        <ul>
          {configs.map((c) => (
            <li key={c._id} className="border p-2 mb-2">
              {c.vehicleType} - {c.state} - ₹{c.couponValue} -{" "}
              {c.isEligible ? "Eligible" : "Not Eligible"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LuckyDrawPage;
