import { connect } from "react-redux";
import * as bookActions from "../../actions";

const mapStateToProps = ({ booklist }) => {
  return {
    books: booklist.books,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
