const defaultState = {
  loading: false,
  data: {},
  shoplist: [],
  favorites: [],
  error: null,
  completed: false,
};
const user = (state = defaultState, action) => {
  switch (action.type) {
    case "SIGN_OUT_USER":
      return defaultState;
    case "USER_CONFIRM_COMPLETION":
      return {
        ...state,
        completed: action.completed,
      };
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
    case "GET_BY_TOKEN_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_BY_TOKEN_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };
    case "GET_BY_TOKEN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "USER_UPDATE_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
        completed: true,
      };
    case "USER_UPDATE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        completed: true,
      };
    case "USER_LOGIN_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };
    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
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
    case "ADD_FAVORITES_STARTED":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_FAVORITES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "ADD_FAVORITES_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: { ...state.data, favorites: action.data },
      };
    case "ADD_SHOPLIST_STARTED":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_SHOPLIST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "ADD_SHOPLIST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: { ...state.data, shoplist: action.data },
      };
    default:
      return state;
  }
};
export default user;
