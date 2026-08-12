import { publicApi } from "./axiosInstance";


class ProductService {

  async getAllProduct(page = 1, limit = 12, category, sub_category, min_price,
    max_price, rating, is_on_sale, is_featured, sort) {
    // get all product with pagination
    const response = await publicApi.get("/user/product/all-product", {
      params: {
        page, limit, category, sub_category, min_price,
        max_price, rating, is_on_sale, is_featured, sort
      }
    });
    return response.data;
  }
}

export default new ProductService();