import { connect } from "react-redux";
import * as registrationActions from "../../actions";

const mapStateToProps = ({ createbook }) => {
  return {
    created: createbook.created,
  };
};

const mapDispatchToProps = {
  ...registrationActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
