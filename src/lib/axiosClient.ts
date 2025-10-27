import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://insure-pocket-back-1.onrender.com", 
  timeout: 10000,
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

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error);
    alert("서버 통신 중 오류가 발생했습니다 ");
    return Promise.reject(error);
  }
);
