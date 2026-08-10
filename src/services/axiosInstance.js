import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // cookie automatically jayegi
});

// Response Interceptor
api.interceptors.response.use(
  (response) => response, // success → kuch mat karo

  async (error) => {
    const originalRequest = error.config;

    // 401 aaya + pehle retry nahi ki
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // infinite loop rokne ke liye

      try {
        // Refresh token se naya access token lo
        const { data } = await api.post("/auth/refresh");

        // LocalStorage mein save karo
        localStorage.setItem("access_token", data.access_token);

        // Original request mein naya token lagao
        originalRequest.headers["Authorization"] = `Bearer ${data.access_token}`;

        // Original request retry karo
        return api(originalRequest);

      } catch (refreshError) {
        // Refresh token bhi expire — logout karo
        localStorage.removeItem("access_token");
        window.location.href = "/profilePage";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;