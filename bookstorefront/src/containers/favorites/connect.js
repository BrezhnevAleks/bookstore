import { connect } from "react-redux";
import * as bookActions from "../../actions";

const mapStateToProps = ({ favorites, addUser }) => {
  return {
    favorites: favorites.data,
    user: addUser.data,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
