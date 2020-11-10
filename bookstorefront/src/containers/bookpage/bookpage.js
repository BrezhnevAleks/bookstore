import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";

class BookPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getOneBook(id);
  }
  render() {
    const { book } = this.props;
    return (
      <div>
        <img src="http://localhost:4000/default.png" />
        <h3>{book.name}</h3>
        <p>{book.author}</p>
        <p>{book.price}</p>
        <Link to="/"> На главную</Link>
      </div>
    );
  }
}
export default compose(withRouter, connect)(BookPage);
