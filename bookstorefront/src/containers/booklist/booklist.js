import React from "react";
import BookItem from "../../components/bookitem";
import connect from "./connect";

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    console.log(this.props);
    return (
      <ul>
        <BookItem />
      </ul>
    );
  }
}

export default connect(BookList);
