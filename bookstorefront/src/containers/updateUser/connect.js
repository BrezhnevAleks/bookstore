import { connect } from "react-redux";
import * as registrationActions from "../../actions/userActions";

const mapStateToProps = ({ user }) => {
  return {
    user: user.data,
  };
};

const mapDispatchToProps = {
  ...registrationActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
