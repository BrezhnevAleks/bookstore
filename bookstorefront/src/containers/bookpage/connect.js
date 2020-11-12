import { connect } from "react-redux";
import * as bookActions from "../../actions";

const mapStateToProps = ({ singlebook, addUser }) => {
  return {
    book: singlebook.book,
    user: addUser.data,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);