import { connect } from "react-redux";
import * as mainAppActions from "../actions/userActions";

const mapStateToProps = ({ user }) => {
  return {
    data: user.data,
  };
};

const mapDispatchToProps = {
  ...mainAppActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
