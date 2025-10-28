import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://insure-pocket-back.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      config.headers["X-User-ID"] = userId;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
