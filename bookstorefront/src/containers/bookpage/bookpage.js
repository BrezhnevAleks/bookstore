import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import "./style.css";

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
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
  handleReviewOnChange(e) {
    this.setState({ text: e.target.value });
  }
  handleReviewOnSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
  }
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
        <form onSubmit={(e) => this.handleReviewOnSubmit(e)}>
          <textarea
            value={this.state.text}
            onChange={(e) => this.handleReviewOnChange(e)}
            placeholder="Пожалуйста, оставьте отзыв об этой книге"
            style={{ border: "1px solid black" }}
          ></textarea>
          <input type="submit" value="Оставить отзыв" />
          {/* Компонент котрый будет мапать отзывы */}
        </form>
      </div>
    );
  }
}
export default compose(withRouter, connect)(BookPage);
