import React, { useEffect, useState } from "react";
import LuckyDrawServices from "@/services/LuckyDrawServices";
const LuckyDrawConfigForm = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [state, setState] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [isEligible, setIsEligible] = useState(true);
  const [configs, setConfigs] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { vehicleType, state, couponValue, isEligible };
    await LuckyDrawServices.createOrUpdateConfig(body);
    alert("Config saved");
    fetchConfigs();
  };
  const fetchConfigs = async () => {
    const res = await LuckyDrawServices.getAllConfigs();
    setConfigs(res.data);
  };
  useEffect(() => {
    fetchConfigs();
  }, []);
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Lucky Draw Config</h2>
      <form onSubmit={handleSubmit}>
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
          value={couponValue}
          onChange={(e) => setCouponValue(e.target.value)}
          placeholder="Coupon Value"
          type="number"
          className="border p-2 mb-2 w-full"
          required
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isEligible}
            onChange={() => setIsEligible(!isEligible)}
            className="mr-2"
          />
          <label>Is Eligible</label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Config
        </button>
      </form>
      <h3 className="mt-6 text-lg font-semibold">Existing Configs</h3>
      <ul className="mt-2">
        {configs.map((config) => (
          <li key={config._id} className="border p-2 mb-2">
            {config.vehicleType} - {config.state} - ₹{config.couponValue} -{" "}
            {config.isEligible ? "Eligible" : "Not Eligible"}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LuckyDrawConfigForm;
