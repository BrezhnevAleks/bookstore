import { connect } from "react-redux";
import * as mainAppActions from "./actions";

const mapStateToProps = (user) => {
  return {
    data: user.data,
    isLogged: user.isLogged,
  };
};

const mapDispatchToProps = {
  ...mainAppActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
