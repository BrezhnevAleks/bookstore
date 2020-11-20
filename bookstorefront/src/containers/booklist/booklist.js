import React from "react";
import BookItem from "../../components/bookitem/bookitem";
import BooksFilter from "../../components/booksfilter/booksfilter";
import Header from "../header/header.js";
import connect from "./connect";
import "./style.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], filter: "default" };
  }

  handleOnChangeFilter = (e) => {
    // this.props.getSortBooks(e.value);
    let { books } = this.state;
    switch (e.value) {
      case "default":
        this.setState({
          books: books.sort((a, b) => (a.id > b.id ? 1 : -1)),
        });
        return;
      case "expensive":
        this.setState({
          books: books.sort((a, b) =>
            Number(a.price) < Number(b.price) ? 1 : -1
          ),
        });
        return;
      case "name":
        this.setState({
          books: books.sort((a, b) => (a.name > b.name ? 1 : -1)),
        });
        return;
    }
  };

  componentDidMount() {
    this.props.getGenres();
    this.props.getBooks();
    this.setState({ books: this.props.books });
  }

  handleOnClick = (e, value) => {
    this.props.getBooksByGenre(value);
    this.setState({ books: this.props.books });
  };

  render() {
    const { genres } = this.props;
    const { books } = this.state;
    return (
      <div>
        <Header />
        <Grid
          container
          spacing="4"
          xs={12}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          style={{ padding: "0 5%" }}
        >
          <Grid
            container
            justify="flex"
            className="genres"
            direction="column"
            alignItems="flex-start"
            xs={3}
          >
            <h3 className="categories">Категории</h3>
            {genres.map((item) => (
              <Link
                onClick={(e) => this.handleOnClick(e, item.value)}
                value={item.value}
                to={{
                  pathname: `/genre/${item.value}`,
                  state: { fromDashboard: true },
                }}
                className="genre-filter"
              >
                {item.label}
              </Link>
            ))}
          </Grid>

          <Grid container xs={9} spacing="3">
            <Grid item xs={12} className="booklist-header">
              <span className="booklist-count">
                {"Книг доступно: " + books.length}
              </span>
              <BooksFilter
                books={books}
                getSortBooks={this.props.getSortBooks}
                handleOnChangeFilter={this.handleOnChangeFilter}
              />
            </Grid>

            {books.map((item) => (
              <Grid item lg={3} sm={4}>
                <Link
                  key={item.id}
                  to={{
                    pathname: `/books/${item.id}`,
                    state: { fromDashboard: true },
                  }}
                >
                  <BookItem item={item} key={item.id} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(BookList);
