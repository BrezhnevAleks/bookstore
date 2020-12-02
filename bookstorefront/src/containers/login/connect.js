import { connect } from "react-redux";
import * as loginActions from "../../actions/userActions";

const mapStateToProps = ({ user: { data, error } }) => {
  return {
    data,
    error,
  };
};

const mapDispatchToProps = {
  ...loginActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
