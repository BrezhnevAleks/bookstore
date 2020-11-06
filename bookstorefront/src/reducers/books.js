const booklist = (
  state = {
    loading: false,
    books: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "BOOK_FETCH_STARTED":
      return {
        ...state,
        loading: true,
        isLogged: false,
      };
    case "BOOK_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        books: action.books,
        isLogged: true,
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
export default booklist;
