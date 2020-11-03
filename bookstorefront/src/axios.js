import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 60000,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token != null) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
export default axiosInstance;
