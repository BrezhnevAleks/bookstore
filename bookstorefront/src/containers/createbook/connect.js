import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions";

const mapStateToProps = ({ booklist: { genres, created } }) => {
  return {
    created,
    genres,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
