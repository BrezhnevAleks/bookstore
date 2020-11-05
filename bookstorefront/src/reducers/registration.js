const user = (
  state = {
    loading: false,
    data: {},
    error: null,
    isLogged: false,
  },
  action
) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
export default user;
