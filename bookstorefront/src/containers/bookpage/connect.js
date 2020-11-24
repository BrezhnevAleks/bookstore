import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions";
import * as userActions from "../../actions/userActions";
const mapStateToProps = ({ booklist, user }) => {
  return {
    book: booklist.book,
    user: user.data,
    reviews: booklist.reviews,
    rate: booklist.rate,
  };
};

const mapDispatchToProps = {
  ...bookActions,
  ...userActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
