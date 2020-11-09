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

export const getBooks = () => {
  return async (dispatch) => {
    dispatch(booksFetchStarted());
    try {
      const response = await axios.get("http://localhost:4000/books");
      console.log(response);
      dispatch(booksFetchSuccess(response.data));
    } catch (err) {
      dispatch(booksFetchFailure(err.message));
    }
  };
};

export const booksFetchSuccess = (books) => ({
  type: "BOOKS_FETCH_SUCCESS",
  books: books,
});

export const booksFetchStarted = () => ({
  type: "BOOKS_FETCH_STARTED",
});

export const booksFetchFailure = (error) => ({
  type: "BOOKS_FETCH_FAILURE",
  error,
});

export const getSortBooks = (filter) => {
  return async (dispatch) => {
    dispatch(sortBooksFetchStarted());
    try {
      const response = await axios.post("http://localhost:4000/books/filter", {
        filter,
      });
      console.log(response);

      dispatch(sortBooksFetchSuccess(response.data));
    } catch (err) {
      dispatch(sortBooksFetchFailure(err.message));
    }
  };
};

export const sortBooksFetchSuccess = (books) => ({
  type: "BOOKS_SORT_FETCH_SUCCESS",
  books: books,
});

export const sortBooksFetchStarted = () => ({
  type: "BOOKS_SORT_FETCH_STARTED",
});

export const sortBooksFetchFailure = (error) => ({
  type: "BOOKS_SORT_FETCH_FAILURE",
  error,
});

export const getOneBook = (id) => {
  return async (dispatch) => {
    dispatch(bookFetchStarted());
    try {
      const response = await axios.post("http://localhost:4000/books/one", {
        id,
      });
      console.log(response);

      dispatch(bookFetchSuccess(response.data));
    } catch (err) {
      dispatch(bookFetchFailure(err.message));
    }
  };
};
export const bookFetchSuccess = (book) => ({
  type: "BOOK_FETCH_SUCCESS",
  book: book,
});

export const bookFetchStarted = () => ({
  type: "BOOK_FETCH_STARTED",
});

export const bookFetchFailure = (error) => ({
  type: "BOOK_FETCH_FAILURE",
  error,
});
