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
      dispatch(createSuccess(response.data.user));
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

export const createBook = (data) => {
  return async (dispatch) => {
    dispatch(createBookStarted());
    try {
      for (let value of data.values()) {
        console.log("in action", value);
      }

      const response = await axios({
        method: "post",
        url: "http://localhost:4000/books/newbook",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });

      dispatch(createBookSuccess(response.data));
    } catch (err) {
      dispatch(createBookFailure(err.message));
    }
  };
};

export const createBookSuccess = (data) => ({
  type: "BOOK_CREATE_SUCCESS",
  data: data,
});

export const createBookStarted = () => ({
  type: "BOOK_CREATE_STARTED",
});

export const createBookFailure = (error) => ({
  type: "BOOK_CREATE_FAILURE",
  error,
});

export const changeBook = (data) => {
  return async (dispatch) => {
    dispatch(changeBookStarted());
    try {
      for (let value of data.values()) {
        console.log("in action", value);
      }

      const response = await axios({
        method: "post",
        url: "http://localhost:4000/books/changebook",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });

      dispatch(changeBookSuccess(response.data));
    } catch (err) {
      dispatch(changeBookFailure(err.message));
    }
  };
};

export const changeBookSuccess = (data) => ({
  type: "BOOK_CHANGE_SUCCESS",
  data: data,
});

export const changeBookStarted = () => ({
  type: "BOOK_CHANGE_STARTED",
});

export const changeBookFailure = (error) => ({
  type: "BOOK_CHANGE_FAILURE",
  error,
});

// export const createBook = (name, author, price, file) => {
//   return async (dispatch) => {
//     dispatch(createBookStarted());
//     try {
//       const response = await axios.post("http://localhost:4000/books/create", {
//         name,
//         author,
//         price,
//         file,
//       });
//       console.log("HELOOOOO" + response.data);
//       dispatch(createBookSuccess(response.data));
//     } catch (err) {
//       dispatch(createBookFailure(err.message));
//     }
//   };
// };

// export const createBookSuccess = (data) => ({
//   type: "BOOK_CREATE_SUCCESS",
//   data: data,
// });

// export const createBookStarted = () => ({
//   type: "BOOK_CREATE_STARTED",
// });

// export const createBookFailure = (error) => ({
//   type: "BOOK_CREATE_FAILURE",
//   error,
// });
