import { connect } from "react-redux";
import * as mainAppActions from "../actions";

const mapStateToProps = ({ registerUser, loginUser }) => {
  return {
    data: registerUser.data.hasOwnProperty("id")
      ? registerUser.data
      : loginUser.data,
    // isLogged: createUser.isLogged,
  };
};

const mapDispatchToProps = {
  ...mainAppActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
