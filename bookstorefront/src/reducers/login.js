const loginUser = (
  state = {
    loading: false,
    data: {},
    error: null,
    isLogged: false,
  },
  action
) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
export default loginUser;
