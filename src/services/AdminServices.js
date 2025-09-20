import requests from "./httpService";

const AdminServices = {
  registerAdmin: async (body) => {
    return requests.post("/admin/register", body);
  },

  loginAdmin: async (body) => {
    return requests.post(`/admin/login`, body);
  },

  forgetPassword: async (body) => {
    return requests.put("/admin/forget-password", body);
  },

  resetPassword: async (body) => {
    return requests.put("/admin/reset-password", body);
  },

  signUpWithProvider: async (body) => {
    return requests.post("/admin/signup", body);
  },

  addStaff: async (body) => {
    return requests.post("/admin/add", body);
  },
  getAllStaff: async (body) => {
    return requests.get("/admin", body);
  },
  getStaffById: async (id, body) => {
    return requests.post(`/admin/${id}`, body);
  },

  updateStaff: async (id, body) => {
    return requests.put(`/admin/${id}`, body);
  },

  updateStaffStatus: async (id, body) => {
    return requests.put(`/admin/update-status/${id}`, body);
  },

  deleteStaff: async (id) => {
    return requests.delete(`/admin/${id}`);
  },
  addVendor: async (body) => {
    return requests.post("/vendors/vendors/", body); // Create Vendor
  },

  getAllVendors: async () => {
    return requests.get("/vendors/vendors"); // Get All Vendors
  },

  getVendorById: async (id) => {
    return requests.get(`/vendors/vendors/${id}`); // Get Single Vendor
  },

  updateVendor: async (id, body) => {
    return requests.put(`/vendors/vendors/${id}`, body); // Update Vendor
  },

  // Update vendor flag/status (red/yellow/green)
  updateVendorFlag: async (id, flagStatus) => {
    return requests.put(`/vendors/vendors/${id}/flag`, { flagStatus });
  },

  deleteVendor: async (id) => {
    return requests.delete(`/vendors/vendors/${id}`); // Delete Vendor
  },
};

export default AdminServices;
