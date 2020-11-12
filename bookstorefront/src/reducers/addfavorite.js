const addFavorite = (
  state = {
    loading: false,
    data: {},
    error: null,
    isLogged: false,
  },
  action
) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };

    default:
      return state;
  }
};
export default addFavorite;
