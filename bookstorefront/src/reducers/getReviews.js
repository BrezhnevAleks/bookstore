const getReviews = (
  state = {
    loading: false,
    reviews: [],
    error: null,
    isLogged: false,
  },
  action
) => {
  switch (action.type) {
    case "GET_REVIEWS_SUCCESS":
      return {
        ...state,
        loading: false,
        reviews: action.data,
      };
    case "GET_REVIEWS_STARTED":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "GET_REVIEWS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default getReviews;
