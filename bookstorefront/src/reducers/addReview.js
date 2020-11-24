const addReview = (
  state = {
    loading: false,
    review: {},
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "ADD_REVIEW_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        review: action.data,
      };
    case "ADD_REVIEW_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "ADD_REVIEW_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default addReview;
