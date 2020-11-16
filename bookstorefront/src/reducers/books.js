const booklist = (
  state = {
    loading: false,
    books: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "BOOKS_FETCH_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "BOOKS_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        books: action.books,
      };
    case "BOOKS_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "BOOKS_SORT_FETCH_STARTED":
      return {
        ...state,
        loading: true,
        isLogged: false,
      };
    case "BOOKS_SORT_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        books: action.books,
        isLogged: true,
      };
    case "BOOKS_SORT_FETCH_FAILURE":
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
