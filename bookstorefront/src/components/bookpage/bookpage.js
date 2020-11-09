import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";

class BookPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.props.getOneBook(id);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>HELLLOO</p>
      </div>
    );
  }
}
export default compose(withRouter, connect)(BookPage);
