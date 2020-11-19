import React from "react";
import BookItem from "../../components/bookitem/bookitem";
import BooksFilter from "../../components/booksfilter/booksfilter";
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
    this.props.getSortBooks(e.value);
  };

  componentDidMount() {
    this.props.getSortBooks(this.state.filter);
    this.setState({ books: this.props.books });
  }

  render() {
    const { books } = this.props;

    return (
      <div>
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
            <Link
              value="genre"
              to={{
                pathname: `/books/genre/fantasy`,
                state: { fromDashboard: true },
              }}
              className="genre-filter"
            >
              Фантастика
            </Link>
            <Link
              to={{
                pathname: `/books/genre/detective`,
                state: { fromDashboard: true },
              }}
              className="genre-filter"
            >
              Детектив
            </Link>
            <Link
              to={{
                pathname: `/books/genre/classic`,
                state: { fromDashboard: true },
              }}
              className="genre-filter"
            >
              Классика
            </Link>
            <Link
              to={{
                pathname: `/books/genre/journey`,
                state: { fromDashboard: true },
              }}
              className="genre-filter"
            >
              Путешестия
            </Link>
            <Link
              to={{
                pathname: `/books/genre/textbooks`,
                state: { fromDashboard: true },
              }}
              className="genre-filter"
            >
              Учебники
            </Link>
            <Link
              to={{
                pathname: `/books/genre/kids`,
                state: { fromDashboard: true },
              }}
              className="genre-filter"
            >
              Детские книги
            </Link>
            <Link
              to={{
                pathname: `/books/genre/poetry`,
                state: { fromDashboard: true },
              }}
              className="genre-filter"
            >
              Поэзия
            </Link>
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
