import { connect } from "react-redux";
import * as bookActions from "../../actions";

const mapStateToProps = ({ singlebook, addUser, getReviews }) => {
  return {
    book: singlebook.book,
    user: addUser.data,
    reviews: getReviews.reviews,
  };
};

const mapDispatchToProps = {
  ...bookActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
