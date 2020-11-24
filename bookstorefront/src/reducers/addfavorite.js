const addFavorite = (
  state = {
    loading: false,
    favorites: {},
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
        favorites: action.data,
      };

    default:
      return state;
  }
};
export default addFavorite;
