import { publicApi, privateApi } from "./axiosInstance";

class AuthService {

  isLoggedIn() {
    const token = localStorage.getItem("access_token");
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const isExpired = payload.exp * 1000 < Date.now();

      if (isExpired) {
        localStorage.removeItem("access_token");
        return false;
      }
      return true;
      // eslint-disable-next-line
    } catch (e) {
      localStorage.removeItem("access_token");
      return false;
    }
  }

  async signup(data) {
    // post sign up data
    const response = await publicApi.post("/user/auth/sign-up", data);
    return response.data;
  }


  async login(data) {
    // post login data
    const response = await publicApi.post("/user/auth/login", data);
    return response.data;
  }


  async getMe() {
    // get user
    const response = await privateApi.get("/user/auth/me"); // ← private
    return response.data;
  }

  async editUser(data) {
    // edit user
    const response = await privateApi.patch("/user/auth/edit-user", data); // ← private
    return response.data;
  }
}

export default new AuthService();