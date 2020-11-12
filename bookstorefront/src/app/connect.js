import { connect } from "react-redux";
import * as mainAppActions from "../actions";

const mapStateToProps = ({ addUser }) => {
  return {
    data: addUser.data,
  };
};

const mapDispatchToProps = {
  ...mainAppActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
