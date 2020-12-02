import React from "react";
import connect from "./connect";
import defaultCover from "../../images/defaultCover.png";
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
    const {
      user: { shoplist, favorites },
      book: { rating },
      reviews,
    } = this.props;

    this.state = {
      text: "",
      favorites,
      shoplist,
      rating: null,
      reviews: reviews,
      rate: Number(rating),
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      reviews,
      getOneBook,
      getReviews,
    } = this.props;

    getOneBook(id);
    getReviews(id);
    this.setState({ reviews });
  }
  handleOnClickFavorites = (e) => {
    const { book, user, toFavorites } = this.props;
    let { favorites } = this.state;

    toFavorites(user.id, book.id);
    favorites.push(Number(book.id));
    this.setState({ favorites });
  };
  handleOnClickBasket = (e) => {
    const { book, user, toShopList } = this.props;
    let { shoplist } = this.state;

    toShopList(user.id, book.id);
    shoplist.push(Number(book.id));
    this.setState({ shoplist });
  };

  handleReviewOnChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleReviewOnSubmit = async (e) => {
    e.preventDefault();
    const { text, rating } = this.state;
    const {
      addReview,
      getReviews,
      user,
      match: {
        params: { id },
      },
    } = this.props;

    await addReview(user.id, id, text, rating);

    this.setState({ text: "" });

    await getReviews(id);
  };
  render() {
    let {
      match: {
        params: { id },
      },
    } = this.props;
    const {
      book: { name, author, description, picture, price },
      reviews,
      rate,
    } = this.props;

    id = Number(id);

    const { favorites, shoplist, text, rating } = this.state;

    return (
      <div>
        <Header />
        <div className="book-page">
          <div className="book">
            <div className="book-content">
              <p className="book-author">{author}</p>
              <h3 className="book-name">{name}</h3>
              <img
                src={picture === "picture" ? defaultCover : picture}
                className="book-image"
              />
              <div className="description">
                <h4 className="description-title">Описание</h4>
                <p className="description-text">
                  {description ? description : "У этой книги нет описания"}
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
              <p className="book-price">{price} &#8381;</p>

              <div className="book-rating">
                <Rating
                  size="large"
                  name="simple-controlled"
                  value={rating}
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
                to={{ pathname: `/books/change/${id}` }}
                id={id}
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
export default connect(BookPage);
