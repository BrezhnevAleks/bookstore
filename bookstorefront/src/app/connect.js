import { connect } from "react-redux";
import * as mainAppActions from "../actions/userActions";

const mapStateToProps = ({ user: { data } }) => {
  return {
    data,
  };
};

const mapDispatchToProps = {
  ...mainAppActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
