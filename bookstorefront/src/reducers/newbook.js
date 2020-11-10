const createbook = (
  state = {
    loading: false,
    created: {},
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "BOOK_CREATE_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "BOOK_CREATE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        created: action.data,
      };
    case "BOOK_CREATE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default createbook;
