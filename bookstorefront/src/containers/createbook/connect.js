import { connect } from "react-redux";
import * as registrationActions from "../../actions";

const mapStateToProps = ({ genresList, createbook }) => {
  return {
    created: createbook.created,
    genres: genresList.genres,
  };
};

const mapDispatchToProps = {
  ...registrationActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
