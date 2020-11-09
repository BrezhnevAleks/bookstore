import { connect } from "react-redux";
import * as bookActions from "../../actions";

const mapStateToProps = ({ singlebook }) => {
  return {
    book: singlebook.book,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
