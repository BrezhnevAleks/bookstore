import React from "react";
import "./style.css";
import defaultCover from "../../images/defaultCover.png";
import connect from "./connect";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as regHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

class BookItem extends React.Component {
  handleOnClickLike = (e) => {
    const { item, user, toFavorites } = this.props;

    toFavorites(user.id, item.id);
  };
  handleOnClickToShoplist = (e) => {
    const { item, user, toShopList } = this.props;

    toShopList(user.id, item.id);
  };
  render() {
    const {
      item: { id, name, author, price, rating, picture },
      user: { favorites, shoplist },
    } = this.props;

    return (
      <div className="item">
        <div className="item-header">
          <FontAwesomeIcon
            className="toShop-button"
            onClick={this.handleOnClickToShoplist}
            icon={shoplist.includes(id) ? faShoppingBasket : faPlus}
          />
          <h3 className="item-name">{name}</h3>
          <FontAwesomeIcon
            className="like-button"
            onClick={this.handleOnClickLike}
            icon={favorites.includes(id) ? solidHeart : regHeart}
          />
        </div>

        <Link
          key={id}
          to={{
            pathname: `/books/${id}`,
            state: { fromDashboard: true },
          }}
          className="item-body"
        >
          <img
            src={picture === "picture" ? defaultCover : picture}
            className="item-image"
          />
          <Rating name="read-only" value={Number(rating)} readOnly />

          <span className="item-author">{author}</span>
          <span className="item-price">{price} &#8381;</span>
        </Link>
      </div>
    );
  }
}

export default connect(BookItem);
