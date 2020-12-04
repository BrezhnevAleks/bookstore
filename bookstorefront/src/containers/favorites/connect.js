import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";

const mapStateToProps = ({ user: { data } }) => {
  return {
    favorites: data.favorites,
    user: data,
  };
};

const mapDispatchToProps = {
  ...userActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
