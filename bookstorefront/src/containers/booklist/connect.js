import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions";

const mapStateToProps = ({ booklist: { books, genres, loading } }) => {
  return {
    books,
    genres,
    loading,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
