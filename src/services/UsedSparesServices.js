import requests from "./httpService";

const UsedSparePartsServices = {
  // ➡️ Create a new used spare part (POST /used-parts)
  createUsedPart: async (body) => {
    return requests.post("/used-parts", body);
  },

  // ➡️ Get all used spare parts (GET /used-parts)
  getAllUsedParts: async () => {
    return requests.get("/used-parts");
  },

  // ➡️ Get single used spare part by ID (GET /used-parts/:id)
  getUsedPartById: async (id) => {
    return requests.get(`/used-parts/${id}`);
  },

  // ➡️ Update used spare part by ID (PUT /used-parts/:id)
  updateUsedPart: async (id, body) => {
    return requests.put(`/used-parts/${id}`, body);
  },

  // ➡️ Delete used spare part by ID (DELETE /used-parts/:id)
  deleteUsedPart: async (id) => {
    return requests.delete(`/used-parts/${id}`);
  },
};

export default UsedSparePartsServices;
