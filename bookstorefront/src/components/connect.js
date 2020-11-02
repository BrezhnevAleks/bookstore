import { connect } from "react-redux";
import * as registrationActions from "../actions";

const mapStateToProps = (user) => {
  return {
    data: user.data,
    error: user.error,
    loading: user.loading,
  };
};

const mapDispatchToProps = {
  ...registrationActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
