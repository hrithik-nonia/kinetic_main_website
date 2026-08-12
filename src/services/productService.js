import { publicApi, privateApi } from "./axiosInstance";


class ProductService {

  async getAllProduct(page = 1, limit = 12) {
    // get all product with pagination
    const response = await publicApi.get("/user/product/all-product", {
      params: { page, limit }
    });
    return response.data;
  }
}

export default new ProductService();