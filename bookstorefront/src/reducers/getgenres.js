const genresList = (
  state = {
    loading: false,
    genres: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "GENRES_FETCH_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "GENRES_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        genres: action.genres,
      };
    case "GENRES_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default genresList;
