import React from "react";
import BookItem from "../../components/bookitem/bookitem";
import connect from "./connect";
import "./style.css";

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const { books } = this.props;
    return (
      <div className="books">
        {books.map((item) => (
          <BookItem item={item} />
        ))}
      </div>
    );
  }
}

export default connect(BookList);
