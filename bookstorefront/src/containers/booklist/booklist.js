import React from "react";
import BookItem from "../../components/bookitem/bookitem";
import BooksFilter from "../../components/booksfilter/booksfilter";
import connect from "./connect";
import "./style.css";
import { Link } from "react-router-dom";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "default" };
  }
  handleOnChangeFilter = (e) => {
    this.props.getSortBooks(e.value);
  };
  componentDidMount() {
    this.props.getBooks();
    this.setState({ books: this.props.books });
  }

  render() {
    const { books } = this.props;

    return (
      <div className="booklist">
        <div className="booklist-header">
          <span className="booklist-count">
            {"Книг доступно: " + this.props.books.length}
          </span>
          <BooksFilter
            books={this.props.books}
            getSortBooks={this.props.getSortBooks}
            handleOnChangeFilter={this.handleOnChangeFilter}
          />
        </div>
        <div className="books">
          {books.map((item) => (
            <Link
              to={{
                pathname: `/books/${item.id}`,
                state: { fromDashboard: true },
              }}
            >
              <BookItem item={item} key={item.id} />{" "}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(BookList);
