import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions";
import * as userActions from "../../actions/userActions";
const mapStateToProps = ({ user }) => {
  return {
    shoplist: user.shoplist,
    user: user.data,
  };
};

const mapDispatchToProps = {
  ...bookActions,
  ...userActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
