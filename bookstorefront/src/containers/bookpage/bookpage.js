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
import Rating from "@material-ui/lab/Rating";
import "./style.css";

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    const { user, book, reviews } = this.props;
    this.state = {
      text: "",
      favorites: user.favorites,
      shoplist: user.shoplist,
      rating: null,
      reviews: reviews,
      rate: Number(book.rating),
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { reviews } = this.props;

    this.props.getOneBook(id);
    this.props.getReviews(id);
    this.setState({ reviews });
  }
  handleOnClickFavorites = (e) => {
    const { id } = this.props.book;
    let { favorites } = this.state;
    this.props.toFavorites(this.props.user.id, id);
    favorites.push(Number(id));
    this.setState({ favorites });
  };
  handleOnClickBasket = (e) => {
    const { book, user } = this.props;
    let { shoplist } = this.state;
    this.props.toShopList(user.id, book.id);
    shoplist.push(Number(book.id));
    this.setState({ shoplist });
  };

  handleReviewOnChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleReviewOnSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.props;
    const { text, rating } = this.state;
    const { id } = this.props.match.params;
    await this.props.addReview(user.id, id, text, rating);
    this.setState({ text: "" });

    await this.props.getReviews(id);
  };
  render() {
    let { id } = this.props.match.params;
    id = Number(id);
    const { book, reviews, rate } = this.props;
    const { favorites, shoplist, text } = this.state;

    return (
      <div>
        <Header />
        <div className="book-page">
          <div className="book">
            <div className="book-content">
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
              <div className="description">
                <h4 className="description-title">Описание</h4>
                <p className="description-text">
                  {book.description
                    ? book.description
                    : "У этой книги нет описания"}
                </p>
              </div>
              <form
                className="review-form"
                onSubmit={(e) => this.handleReviewOnSubmit(e)}
              >
                <textarea
                  rows="10"
                  cols="50"
                  className="review-textarea"
                  value={text}
                  onChange={(e) => this.handleReviewOnChange(e)}
                  placeholder="Пожалуйста, оставьте отзыв об этой книге"
                  style={{ border: "1px solid black" }}
                />

                <input
                  className="review-submit"
                  type="submit"
                  value="Оставить отзыв"
                />
              </form>
            </div>
            <div className="book-buttons">
              <p className="book-price">{book.price} &#8381;</p>

              <div className="book-rating">
                <Rating
                  size="large"
                  name="simple-controlled"
                  value={this.state.rating}
                  onChange={(event, newValue) => {
                    this.setState({ rating: newValue });
                  }}
                />
                <span>{rate ? `/${rate}` : "Эту книгу ещё не оценили"}</span>
              </div>
              {!shoplist.includes(id) ? (
                <button
                  className="book-buttons-basket"
                  onClick={(e) => this.handleOnClickBasket(e)}
                >
                  Добавить в корзину
                </button>
              ) : (
                <Link
                  className="book-buttons-basket-active"
                  to={{ pathname: `/shoplist` }}
                >
                  Перейти в корзину
                </Link>
              )}
              {!favorites.includes(id) ? (
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
              ) : (
                <Link
                  className="book-buttons-favorites-active"
                  to={{ pathname: `/favorites` }}
                >
                  <FontAwesomeIcon
                    className="book-buttons-favorites-icon"
                    icon={faHeart}
                  />
                  Перейти в избранное
                </Link>
              )}
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
            </div>
          </div>
        </div>

        {!reviews.length ? (
          <p className="review-plug">
            Будьте первым, кто добавит отзыв к этой книге!
          </p>
        ) : (
          <div className="review-list">
            <h4 className="reviews-title">Отзывы</h4>
            {reviews.map((item) => (
              <ReviewItem item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default compose(withRouter, connect)(BookPage);
