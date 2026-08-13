import { publicApi } from "./axiosInstance";


class OtherServices {
  async getSellers(page = 1, limit = 4) {
    // get sellers data
    const response = await publicApi.get("/user/get-sellers", {
      params: {
        page, limit
      }
    });
    return response.data;
  }

}
export default new OtherServices()