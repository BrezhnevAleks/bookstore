import { connect } from "react-redux";
import * as chanhgeBookActions from "../../actions";

const mapStateToProps = ({ singlebook }) => {
  return {
    book: singlebook.book,
  };
};

const mapDispatchToProps = {
  ...chanhgeBookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
