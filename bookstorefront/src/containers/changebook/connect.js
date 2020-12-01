import { connect } from "react-redux";
import * as chanhgeBookActions from "../../actions/bookActions";

const mapStateToProps = ({ booklist: { book, genres, completed } }) => {
  return {
    book,
    genres,
    completed,
  };
};

const mapDispatchToProps = {
  ...chanhgeBookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
