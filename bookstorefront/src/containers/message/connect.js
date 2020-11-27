import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions";
import * as userActions from "../../actions/userActions";
const mapStateToProps = ({ user, booklist }) => {
  return {
    user: user.data,
    error: user.error || booklist.error,
  };
};

const mapDispatchToProps = {
  ...bookActions,
  ...userActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
