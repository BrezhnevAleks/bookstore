import { connect } from "react-redux";
import * as registrationActions from "../../actions";

const mapStateToProps = ({ registerUser }) => {
  return {
    data: registerUser.data,
  };
};

const mapDispatchToProps = {
  ...registrationActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
