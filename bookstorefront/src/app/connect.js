import { connect } from "react-redux";
import * as mainAppActions from "../actions";

const mapStateToProps = ({ loginUser }) => {
  return {
    data: loginUser.data,
    isLogged: loginUser.isLogged,
  };
};

const mapDispatchToProps = {
  ...mainAppActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
