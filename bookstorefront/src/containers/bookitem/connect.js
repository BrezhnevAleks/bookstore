import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import * as bookActions from "../../actions/bookActions";

const mapStateToProps = ({ user }) => {
  return {
    user: user.data,
  };
};

const mapDispatchToProps = {
  ...userActions,
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
