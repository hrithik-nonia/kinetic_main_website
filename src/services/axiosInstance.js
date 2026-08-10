import axios from "axios";

// ✅ Public — bina token ke (login, signup, otp)
export const publicApi = axios.create({
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// ✅ Private — token automatic lagega
export const privateApi = axios.create({
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Private pe request interceptor
privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Private pe response interceptor (refresh token)
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await publicApi.post("/auth/refresh");
        localStorage.setItem("access_token", data.access_token);
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        return privateApi(originalRequest);
      } catch {
        localStorage.removeItem("access_token");
        window.location.href = "/profilePage";
      }
    }
    return Promise.reject(error);
  }
);