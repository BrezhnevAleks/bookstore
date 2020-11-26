import axios from "axios";
//import axiosInstance from "../axios";

export const addUser = (data) => ({
  type: "ADD_USER",
  data: data,
});

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
      dispatch(createSuccess(response.data.user));
      dispatch(addUser(response.data.user));
    } catch (err) {
      dispatch(createFailure(err.message));
    }
  };
};

export const createSuccess = (data) => ({
  type: "USER_CREATE_SUCCESS",
  data: data,
  isLogged: true,
});

export const createStarted = () => ({
  type: "USER_CREATE_STARTED",
});

export const createFailure = (error) => ({
  type: "USER_CREATE_FAILURE",
  error,
});

export const updateUser = (id, login, email, password) => {
  return async (dispatch) => {
    dispatch(updateStarted());
    try {
      const response = await axios.post("http://localhost:4000/users/update", {
        id,
        login,
        email,
        password,
      });
      dispatch(updateSuccess(response.data.user));
      dispatch(addUser(response.data.user));
    } catch (err) {
      dispatch(updateFailure(err.message));
    }
  };
};

export const updateSuccess = (data) => ({
  type: "USER_UPDATE_SUCCESS",
  data: data,
});

export const updateStarted = () => ({
  type: "USER_UPDATE_STARTED",
});

export const updateFailure = (error) => ({
  type: "USER_UPDATE_FAILURE",
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

      dispatch(loginSuccess(response.data.user));
      dispatch(addUser(response.data.user));
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

export const toFavorites = (userID, bookID) => {
  return async (dispatch) => {
    dispatch(toFavoritesStarted());
    try {
      const response = await axios.post(
        "http://localhost:4000/users/addtofavorites",
        {
          userID,
          bookID,
        }
      );

      dispatch(addUser(response.data.user));
      dispatch(toFavoritesSuccess(response.data.user));
    } catch (err) {
      dispatch(toFavoritesFailure(err.message));
    }
  };
};

export const toFavoritesSuccess = (data) => ({
  type: "ADD_FAVORITES_SUCCESS",
  data: data,
});

export const toFavoritesStarted = () => ({
  type: "ADD_FAVORITES_STARTED",
});

export const toFavoritesFailure = (error) => ({
  type: "ADD_FAVORITES_FAILURE",
  error,
});

export const toShopList = (userID, bookID) => {
  return async (dispatch) => {
    dispatch(toShopListStarted());
    try {
      const response = await axios.post(
        "http://localhost:4000/users/addtoshoplist",
        {
          userID,
          bookID,
        }
      );
      //dispatch(addUser(response.data.user));
      dispatch(toShopListSuccess(response.data.user.shoplist));
    } catch (err) {
      dispatch(toShopListFailure(err.message));
    }
  };
};

export const toShopListSuccess = (data) => ({
  type: "ADD_SHOPLIST_SUCCESS",
  data: data,
});

export const toShopListStarted = () => ({
  type: "ADD_SHOPLIST_STARTED",
});

export const toShopListFailure = (error) => ({
  type: "ADD_SHOPLIST_FAILURE",
  error,
});

export const getShoplist = (userID) => {
  return async (dispatch) => {
    dispatch(shoplistFetchStarted());
    try {
      const response = await axios.post(
        "http://localhost:4000/users/shoplist",
        { userID }
      );
      console.log(response);
      dispatch(shoplistFetchSuccess(response.data));
    } catch (err) {
      dispatch(shoplistFetchFailure(err.message));
    }
  };
};

export const shoplistFetchSuccess = (data) => ({
  type: "SHOPLIST_FETCH_SUCCESS",
  data: data,
});

export const shoplistFetchStarted = () => ({
  type: "SHOPLIST_FETCH_STARTED",
});

export const shoplistFetchFailure = (error) => ({
  type: "SHOPLIST_FETCH_FAILURE",
  error,
});

export const getFavoritesList = (userID) => {
  return async (dispatch) => {
    dispatch(favoritesListFetchStarted());
    try {
      const response = await axios.post(
        "http://localhost:4000/users/favorites",
        { userID }
      );
      console.log(response);
      dispatch(favoritesListFetchSuccess(response.data));
    } catch (err) {
      dispatch(favoritesListFetchFailure(err.message));
    }
  };
};

export const favoritesListFetchSuccess = (data) => ({
  type: "FAVORITES_FETCH_SUCCESS",
  data: data,
});

export const favoritesListFetchStarted = () => ({
  type: "FAVORITES_FETCH_STARTED",
});

export const favoritesListFetchFailure = (error) => ({
  type: "FAVORITES_FETCH_FAILURE",
  error,
});
