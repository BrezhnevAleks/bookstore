import { connect } from "react-redux";
import * as loginActions from "../../actions";

const mapStateToProps = ({ loginUser }) => {
  return {
    data: loginUser.data,
    isLogged: loginUser.isLogged,
  };
};

const mapDispatchToProps = {
  ...loginActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
