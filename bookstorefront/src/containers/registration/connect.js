import { connect } from "react-redux";
import * as registrationActions from "../../actions";

const mapStateToProps = (user) => {
  return {
    data: user.data,
  };
};

const mapDispatchToProps = {
  ...registrationActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
