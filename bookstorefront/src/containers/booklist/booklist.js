import React from "react";
import BookItem from "../bookitem/bookitem";
import BooksFilter from "../../components/booksfilter/booksfilter";
import Header from "../header/header.js";
import Loading from "../../components/loadplug/loading.js";
import connect from "./connect";
import "./style.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "default" };
  }

  handleOnChangeFilter = (e) => {
    const {
      match: {
        params: { value },
      },
      getBooks,
    } = this.props;

    getBooks(e.value, value);
    this.setState({
      filter: e.value,
    });
  };

  componentDidMount() {
    const {
      match: {
        params: { value },
      },
      getGenres,
      getBooks,
      getPage,
    } = this.props;
    const { filter } = this.state;

    getGenres();
    getBooks(filter, value);
  }

  handleOnClick = (e, value) => {
    const { filter } = this.state;
    const { getBooks } = this.props;

    getBooks(filter, value);
  };

  render() {
    const { genres, books, loading, getBooks } = this.props;

    return (
      <div>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <Grid
            container
            item
            spacing={4}
            xs={12}
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            style={{ padding: "0 5%" }}
          >
            <Grid
              container
              item
              justify="flex-start"
              className="genres"
              direction="column"
              alignItems="flex-start"
              xs={3}
            >
              <h3 className="categories">Категории</h3>
              <Link
                to={{
                  pathname: `/`,
                  state: { fromDashboard: true },
                }}
                className="genre-filter"
                onClick={this.handleOnClick}
              >
                Все
              </Link>
              {genres.map((item) => (
                <Link
                  key={item.id}
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

            <Grid container item xs={9} cellHeight="auto" spacing={3}>
              <Grid item xs={12} className="booklist-header">
                <span className="booklist-count">
                  {"Книг доступно: " + books.length}
                </span>
                <BooksFilter
                  books={books}
                  handleOnChangeFilter={this.handleOnChangeFilter}
                />
              </Grid>

              {books.map((item) => (
                <Grid cellHeight="auto" key={item.id} item lg={3} sm={4}>
                  <BookItem item={item} key={item.id} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

export default connect(BookList);
