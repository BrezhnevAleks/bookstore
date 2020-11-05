import axios from "axios";
//import axiosInstance from "../axios";

export const createUser = (login, email, password) => {
  return async (dispatch) => {
    dispatch(createStarted());
    try {
      const response = await axios.post("http://localhost:4000/users/create", {
        login,
        email,
        password,
        completed: false,
      });
      console.log("HELOOOOO" + response.data);
      dispatch(createSuccess(response.data));
    } catch (err) {
      dispatch(createFailure(err.message));
    }
  };
};

export const createSuccess = (data) => ({
  type: "USER_CREATE_SUCCESS",
  data: data,
});

export const createStarted = () => ({
  type: "USER_CREATE_STARTED",
});

export const createFailure = (error) => ({
  type: "USER_CREATE_FAILURE",
  error,
});

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStarted());
    try {
      const response = await axios.post("http://localhost:4000/users/login", {
        email,
        password,
        completed: false,
      });
      console.log(response.data.user);
      dispatch(loginSuccess(response.data.user));
      localStorage.setItem("authToken", response.data.token);
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };
};

export const loginSuccess = (data) => ({
  type: "USER_LOGIN_SUCCESS",
  data: data,
  isLogged: true,
});

export const loginStarted = () => ({
  type: "USER_LOGIN_STARTED",
});

export const loginFailure = (error) => ({
  type: "USER_LOGIN_FAILURE",
  error,
});
