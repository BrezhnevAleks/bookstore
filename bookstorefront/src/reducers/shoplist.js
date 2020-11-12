const shoplist = (
  state = {
    loading: false,
    data: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "SHOPLIST_FETCH_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "SHOPLIST_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };
    case "SHOPLIST_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default shoplist;
