const addShopList = (
  state = {
    loading: false,
    data: {},
    error: null,
    isLogged: false,
  },
  action
) => {
  switch (action.type) {
    case "ADD_SHOPLIST":
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
export default addShopList;
