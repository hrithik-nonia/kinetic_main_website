import api from "./axiosInstance";

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
    const response = await api.post("/user/auth/sign-up", data);  // ← api use karo
    return response.data;
  }

  async login(data) {
    const response = await api.post("/user/auth/login", data);  // ← api use karo
    return response.data;
  }
}

export default new AuthService();