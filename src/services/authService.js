import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000/user/auth",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async signup(data) {
    const response = await this.api.post("/sign-up", data);
    return response.data;
  }

  // async login(data) {
  //   const response = await this.api.post("/auth/login", data);
  //   return response.data;
  // }

  // async changePassword(data) {
  //   const response = await this.api.post("/auth/change-password", data);
  //   return response.data;
  // }

  // async logout() {
  //   const response = await this.api.post("/auth/logout");
  //   return response.data;
  // }

  // async getProfile() {
  //   const response = await this.api.get("/auth/profile");
  //   return response.data;
  // }
}

export default new AuthService();