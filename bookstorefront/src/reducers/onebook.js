const singlebook = (
  state = {
    loading: false,
    book: {},
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "BOOK_FETCH_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "BOOK_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        books: action.book,
      };
    case "BOOK_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default singlebook;
