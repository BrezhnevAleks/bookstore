import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import "./style.css";

class BookPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getOneBook(id);
  }
  handleOnClickFavorites = (e) => {
    this.props.toFavorites(this.props.user.id, this.props.book.id);
  };
  handleOnClickBasket = (e) => {
    this.props.toShopList(this.props.user.id, this.props.book.id);
  };
  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <img
          src={
            book.picture === "picture"
              ? "http://localhost:4000/default.png"
              : book.picture
          }
          className="book-image"
        />
        <h3 className="book-name">{book.name}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-price">{book.price}</p>
        <button onClick={(e) => this.handleOnClickFavorites(e)}>
          Добавить в избранное
        </button>
        <button onClick={(e) => this.handleOnClickBasket(e)}>
          Добавить в корзину
        </button>
        <Link to={{ pathname: `/books/change/${book.id}` }} id={book}>
          Изменить
        </Link>
        <Link to="/">На главную</Link>
      </div>
    );
  }
}
export default compose(withRouter, connect)(BookPage);
