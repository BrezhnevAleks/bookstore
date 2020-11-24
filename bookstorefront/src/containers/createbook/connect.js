import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions";

const mapStateToProps = ({ booklist }) => {
  return {
    created: booklist.created,
    genres: booklist.genres,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
