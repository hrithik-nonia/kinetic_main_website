import { publicApi } from "./axiosInstance";

class CategoryService {
  async getAllCategories() {
    const response = await publicApi.get("/categories/all");
    return response.data;
  }
}

export default new CategoryService();
