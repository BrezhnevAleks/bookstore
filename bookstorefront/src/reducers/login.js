const user = (
  state = {
    loading: false,
    data: {},
    error: null,
  },
  action
) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
export default user;
