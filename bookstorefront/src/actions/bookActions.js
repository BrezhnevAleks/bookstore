import { axiosInstance } from "../axios";

export const addBooks = (data) => ({
  type: "ADD_BOOKS",
  data,
});

export const booksConfirmation = () => ({
  type: "BOOKS_CONFIRM_COMPLETION",
  completed: false,
});

export const getBooks = (filter = "default", genre = "all") => {
  return async (dispatch) => {
    dispatch(booksFetchStarted());
    try {
      const response = await axiosInstance.post("books", {
        filter,
        genre,
      });
      const { data } = response;
      dispatch(booksFetchSuccess(data));
      dispatch(addBooks(data));
    } catch (err) {
      dispatch(booksFetchFailure(err.message));
    }
  };
};

export const booksFetchSuccess = (books) => ({
  type: "BOOKS_FETCH_SUCCESS",
  books,
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
      const response = await axiosInstance.post("books/one", {
        id,
      });
      const { data } = response;
      dispatch(bookFetchSuccess(data));
    } catch (err) {
      dispatch(bookFetchFailure(err.message));
    }
  };
};

export const bookFetchSuccess = (book) => ({
  type: "BOOK_FETCH_SUCCESS",
  book,
});

export const bookFetchStarted = () => ({
  type: "BOOK_FETCH_STARTED",
});

export const bookFetchFailure = (error) => ({
  type: "BOOK_FETCH_FAILURE",
  error,
});

export const createBook = (payload) => {
  return async (dispatch) => {
    dispatch(createBookStarted());
    try {
      const response = await axiosInstance({
        method: "post",
        url: "books/newbook",
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { data } = response;
      dispatch(createBookSuccess(data));
    } catch (err) {
      dispatch(createBookFailure(err.message));
    }
  };
};

export const createBookSuccess = (data) => ({
  type: "BOOK_CREATE_SUCCESS",
  data,
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

export const changeBook = (payload) => {
  return async (dispatch) => {
    dispatch(changeBookStarted());
    try {
      const response = await axiosInstance({
        method: "post",
        url: "books/changebook",
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { data } = response;
      dispatch(changeBookSuccess(data));
    } catch (err) {
      dispatch(changeBookFailure(err.message));
    }
  };
};

export const changeBookSuccess = (data) => ({
  type: "BOOK_CHANGE_SUCCESS",
  data,
  completed: true,
});

export const changeBookStarted = () => ({
  type: "BOOK_CHANGE_STARTED",
});

export const changeBookFailure = (error) => ({
  type: "BOOK_CHANGE_FAILURE",
  error,
  completed: true,
});

export const addReview = (userId, bookId, text, rating) => {
  return async (dispatch) => {
    dispatch(addReviewStarted());
    try {
      const response = await axiosInstance.post("users/addreview", {
        userId,
        bookId,
        text,
        rating,
      });
      const { data } = response;
      dispatch(addReviewSuccess(data));
    } catch (err) {
      dispatch(addReviewFailure(err.message));
    }
  };
};

export const addReviewSuccess = (data) => ({
  type: "ADD_REVIEW_SUCCESS",
  data,
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
      const response = await axiosInstance.post("books/reviews", {
        bookId,
      });
      const {
        data: { reviews, rate },
      } = response;
      dispatch(getReviewsSuccess(reviews, rate));
    } catch (err) {
      dispatch(getReviewsFailure(err.message));
    }
  };
};

export const getReviewsSuccess = (reviews, rate) => ({
  type: "GET_REVIEWS_SUCCESS",
  data: reviews,
  rate,
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
      const response = await axiosInstance.get("books/getgenres");
      const { data } = response;
      dispatch(genresFetchSuccess(data));
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
