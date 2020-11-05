import { connect } from "react-redux";
import * as loginActions from "../../actions";

const mapStateToProps = (user) => {
  return {
    data: user.data,
    isLogged: user.isLogged,
  };
};

const mapDispatchToProps = {
  ...loginActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
