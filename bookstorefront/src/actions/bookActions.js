import axios from "axios";
//import axiosInstance from "../axios";

export const addBooks = (data) => ({
  type: "ADD_BOOKS",
  data: data,
});

export const booksConfirmation = () => ({
  type: "BOOKS_CONFIRM_COMPLETION",
  completed: false,
});

export const getBooks = (filter = "default", genre = "all") => {
  return async (dispatch) => {
    dispatch(booksFetchStarted());
    try {
      const response = await axios.post("http://localhost:4000/books", {
        filter,
        genre,
      });

      dispatch(booksFetchSuccess(response.data));
      dispatch(addBooks(response.data));
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

export const getOneBook = (id) => {
  return async (dispatch) => {
    dispatch(bookFetchStarted());
    try {
      const response = await axios.post("http://localhost:4000/books/one", {
        id,
      });

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
  completed: true,
});

export const createBookStarted = () => ({
  type: "BOOK_CREATE_STARTED",
});

export const createBookFailure = (error) => ({
  type: "BOOK_CREATE_FAILURE",
  error,
  completed: true,
});

export const changeBook = (data) => {
  return async (dispatch) => {
    dispatch(changeBookStarted());
    try {
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

export const addReview = (userId, bookId, text, rating) => {
  return async (dispatch) => {
    dispatch(addReviewStarted());
    try {
      const response = await axios.post(
        "http://localhost:4000/users/addreview",
        { userId, bookId, text, rating }
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

      dispatch(getReviewsSuccess(response.data));
    } catch (err) {
      dispatch(getReviewsFailure(err.message));
    }
  };
};

export const getReviewsSuccess = (data) => ({
  type: "GET_REVIEWS_SUCCESS",
  data: data.reviews,
  rate: data.rate,
});

export const getReviewsStarted = () => ({
  type: "GET_REVIEWS_STARTED",
});

export const getReviewsFailure = (error) => ({
  type: "GET_REVIEWS_FAILURE",
  error,
});

export const getGenres = () => {
  return async (dispatch) => {
    dispatch(genresFetchStarted());
    try {
      const response = await axios.get("http://localhost:4000/books/getgenres");

      dispatch(genresFetchSuccess(response.data));
    } catch (err) {
      dispatch(genresFetchFailure(err.message));
    }
  };
};

export const genresFetchSuccess = (genres) => ({
  type: "GENRES_FETCH_SUCCESS",
  genres: genres,
});

export const genresFetchStarted = () => ({
  type: "GENRES_FETCH_STARTED",
});

export const genresFetchFailure = (error) => ({
  type: "GENRES_FETCH_FAILURE",
  error,
});
