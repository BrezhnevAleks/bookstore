const favorites = (
  state = {
    loading: false,
    data: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "FAVORITES_FETCH_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "FAVORITES_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };
    case "FAVORITES_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default favorites;
