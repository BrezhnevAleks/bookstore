import { connect } from "react-redux";
import * as mainAppActions from "./actions";

const mapStateToProps = (user) => {
  return {
    data: user.loginUser.data,
  };
};

const mapDispatchToProps = {
  ...mainAppActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
