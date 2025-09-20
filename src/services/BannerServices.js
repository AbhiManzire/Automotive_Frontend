import requests from "./httpService";
const BannerServices = {
  // Get all banners
  getAllBanners: async () => {
    return requests.get("/banner-ads");
  },
  // Get banner by ID (optional if route exists)
  getBannerById: async (id) => {
    return requests.get(`/banner-ads/${id}`);
  },
  // Add a new banner
  addBanner: async (body) => {
    return requests.post("/banner-ads", body);
  },
  // Update banner by ID
  updateBanner: async (id, body) => {
    return requests.put(`/banner-ads/${id}`, body);
  },
  // Delete banner by ID
  deleteBanner: async (id) => {
    return requests.delete(`/banner-ads/${id}`);
  },
};
export default BannerServices;
