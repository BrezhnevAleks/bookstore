import axios from "axios";
import store from "./app/store";
import { signOutUser } from "./actions/userActions";

const axiosInstance = axios.create({
  baseURL: `http://localhost:4000/`,
  Host: "localhost:4000",
  Origin: "http://localhost:3000",
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = token;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

axiosInstance.interceptors.request.use(
  (req) => {
    req.headers.Authorization = localStorage.getItem("authToken");

    if (axiosInstance.defaults.headers.common["Authorization"]) return req;
    throw { message: "the token is not available" };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;

    if (status === 403) {
      store.dispatch(signOutUser());
      localStorage.clear();
      return Promise.reject(error);
    }
  }
);
export { axiosInstance };
