import { connect } from "react-redux";
import * as loginActions from "../../actions/userActions";

const mapStateToProps = ({ user }) => {
  return {
    data: user.data,
  };
};

const mapDispatchToProps = {
  ...loginActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
