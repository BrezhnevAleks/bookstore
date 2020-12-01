import { connect } from "react-redux";
import * as loginActions from "../../actions/userActions";

const mapStateToProps = ({ user: { data } }) => {
  return {
    data,
  };
};

const mapDispatchToProps = {
  ...loginActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
