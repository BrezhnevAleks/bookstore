const user = (
  state = {
    loading: false,
    data: {},
    shoplist: [],
    favorites: [],
    error: null,
    isLogged: false,
  },
  action
) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };
    case "USER_CREATE_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "USER_CREATE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };
    case "USER_CREATE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "USER_LOGIN_STARTED":
      return {
        ...state,
        loading: true,
        isLogged: false,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
        isLogged: true,
      };
    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        isLogged: false,
      };
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
        favorites: action.data,
      };
    case "FAVORITES_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
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
        shoplist: action.data,
      };
    case "SHOPLIST_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        loading: false,
        error: null,

        favorites: action.data,
      };
    case "ADD_FAVORITE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          ...state.data,
          favorites: action.data,
        },
      };

    default:
      return state;
  }
};
export default user;
