import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";

const mapStateToProps = ({ user }) => {
  return {
    favorites: user.favorites,
    user: user.data,
  };
};

const mapDispatchToProps = {
  ...userActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
