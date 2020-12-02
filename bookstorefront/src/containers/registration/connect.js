import { connect } from "react-redux";
import * as registrationActions from "../../actions/userActions";

const mapStateToProps = ({ user: { data, error } }) => {
  return {
    data,
    error,
  };
};

const mapDispatchToProps = {
  ...registrationActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
