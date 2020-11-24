import { connect } from "react-redux";
import * as chanhgeBookActions from "../../actions/bookActions";

const mapStateToProps = ({ booklist }) => {
  return {
    book: booklist.book,
  };
};

const mapDispatchToProps = {
  ...chanhgeBookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
