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

      dispatch(toFavoritesSuccess(response.data));
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

      dispatch(toShopListSuccess(response.data));
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

export const addReview = (userId, bookId, text) => {
  return async (dispatch) => {
    dispatch(addReviewStarted());
    try {
      const response = await axios.post(
        "http://localhost:4000/users/addreview",
        { userId, bookId, text }
      );
      dispatch(addReviewSuccess(response.data));
    } catch (err) {
      dispatch(addReviewFailure(err.message));
    }
  };
};

export const addReviewSuccess = (data) => ({
  type: "ADD_REVIEW_SUCCESS",
  data: data,
});

export const addReviewStarted = () => ({
  type: "ADD_REVIEW_STARTED",
});

export const addReviewFailure = (error) => ({
  type: "ADD_REVIEW_FAILURE",
  error,
});

export const getReviews = (bookId) => {
  return async (dispatch) => {
    dispatch(getReviewsStarted());
    try {
      const response = await axios.post("http://localhost:4000/books/reviews", {
        bookId,
      });
      console.log(response);
      dispatch(getReviewsSuccess(response.data));
    } catch (err) {
      dispatch(getReviewsFailure(err.message));
    }
  };
};

export const getReviewsSuccess = (data) => ({
  type: "GET_REVIEWS_SUCCESS",
  data: data,
});

export const getReviewsStarted = () => ({
  type: "GET_REVIEWS_STARTED",
});

export const getReviewsFailure = (error) => ({
  type: "GET_REVIEWS_FAILURE",
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
