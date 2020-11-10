import { connect } from "react-redux";
import * as loginActions from "../../actions";

const mapStateToProps = ({ loginUser }) => {
  return {
    data: loginUser.data,
  };
};

const mapDispatchToProps = {
  ...loginActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
