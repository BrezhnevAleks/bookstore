import { connect } from "react-redux";
import * as bookActions from "../../actions";

const mapStateToProps = ({ genresList, addBooks }) => {
  return {
    books: addBooks.data,
    genres: genresList.genres,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
