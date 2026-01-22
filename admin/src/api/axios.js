import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  headers: { "Content-Type": "application/json" },
  withCredentials: true 
});

api.interceptors.request.use((config) => {
  const adminData = localStorage.getItem("admin");
  let token = null;
  
  if (adminData) {
    try {
      const parsed = JSON.parse(adminData);
      token = parsed.token;
    } catch (e) {
      console.error('Invalid admin data in localStorage');
    }
  }
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});


export default api;
