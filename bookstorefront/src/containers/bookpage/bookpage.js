import React from "react";
import connect from "./connect";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ReviewItem from "../../components/reviewitem/reviewitem";
import Header from "../header/header";
import "./style.css";

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getReviews(id);
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
    this.props.addReview(
      this.props.user.id,
      this.props.book.id,
      this.state.text
    );
    this.setState({ text: "" });
  }
  render() {
    const { book, reviews } = this.props;

    return (
      <div>
        <Header />
        <div className="book-page">
          <div className="book">
            <p className="book-author">{book.author}</p>
            <h3 className="book-name">{book.name}</h3>
            <img
              src={
                book.picture === "picture"
                  ? "http://localhost:4000/default.png"
                  : book.picture
              }
              className="book-image"
            />

            <form onSubmit={this.handleReviewOnSubmit}>
              <textarea
                value={this.state.text}
                onChange={(e) => this.handleReviewOnChange(e)}
                placeholder="Пожалуйста, оставьте отзыв об этой книге"
                style={{ border: "1px solid black" }}
              />

              <input type="submit" value="Оставить отзыв" />
            </form>
            {!reviews.length ? (
              <p>Будьте первым, кто добавит отзыв к этой книге!</p>
            ) : (
              reviews.map((item) => <ReviewItem item={item} key={item.id} />)
            )}
          </div>
          <div className="book-buttons">
            <p className="book-price">{book.price} &#8381;</p>

            <button
              className="book-buttons-basket"
              onClick={(e) => this.handleOnClickBasket(e)}
            >
              Добавить в корзину
            </button>
            <button
              className="book-buttons-favorites"
              onClick={(e) => this.handleOnClickFavorites(e)}
            >
              <FontAwesomeIcon
                className="book-buttons-favorites-icon"
                icon={faHeart}
              />
              Добавить в избранное
            </button>
            <Link
              className="book-buttons-edit"
              to={{ pathname: `/books/change/${book.id}` }}
              id={book}
            >
              <FontAwesomeIcon
                className="book-buttons-edit-icon"
                icon={faPen}
              />
              Изменить
            </Link>
            <Link to="/">На главную</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default compose(withRouter, connect)(BookPage);
