import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions";
import * as userActions from "../../actions/userActions";
const mapStateToProps = ({
  booklist: { book, reviews, rate },
  user: { data },
}) => {
  return {
    book,
    user: data,
    reviews,
    rate,
  };
};

const mapDispatchToProps = {
  ...bookActions,
  ...userActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
