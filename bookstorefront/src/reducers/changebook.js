const changebook = (
  state = {
    loading: false,
    changed: {},
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "BOOK_CHANGE_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "BOOK_CHANGE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        changed: action.data,
      };
    case "BOOK_CHANGE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default changebook;
