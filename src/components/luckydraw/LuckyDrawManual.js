import React from "react";
import LuckyDrawServices from "@/services/LuckyDrawServices";
const GenerateCouponButton = ({ vehicleId, vehicleType, vehicleValue, state, region }) => {
  const handleGenerate = async () => {
    try {
      const res = await LuckyDrawServices.manualGenerateCoupons({
        vehicleId,
        vehicleType,
        vehicleValue,
        state,
        region,
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to generate coupons");
    }
  };
  return (
    <button
      onClick={handleGenerate}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Generate Coupons
    </button>
  );
};
export default GenerateCouponButton;
