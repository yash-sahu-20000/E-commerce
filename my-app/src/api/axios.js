import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    let token = null;

    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        token = JSON.parse(userData)?.token;
      } catch (e) {
        console.error("Invalid user data in localStorage");
      }
    }

    if (!token) {
      const adminData = localStorage.getItem("admin");
      if (adminData) {
        try {
          token = JSON.parse(adminData)?.token;
        } catch (e) {
          console.error("Invalid admin data in localStorage");
        }
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
