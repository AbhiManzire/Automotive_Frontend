import requests from "./httpService";

const LuckyDrawServices = {
  // Get all lucky draw configs
  getAllConfigs: async () => {
    return requests.get("/luckydraw/configs");
  },

  // Create or update a lucky draw config
  createOrUpdateConfig: async (body) => {
    return requests.post("/luckydraw/configs", body);
  },

  // Manual coupon generation
  manualGenerateCoupons: async (body) => {
    return requests.post("/luckydraw/manual-generate", body);
  },

  // Auto coupon generation
  autoGenerateCoupons: async (body) => {
    return requests.post("/luckydraw/auto-generate", body);
  },

  // Get coupons for a user
  getUserCoupons: async (userId) => {
    return requests.get(`/luckydraw/user/${userId}`);
  },

  // Redeem coupon by ID
  redeemCoupon: async (id) => {
    return requests.post(`/luckydraw/redeem/${id}`);
  },
};

export default LuckyDrawServices;
