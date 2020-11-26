import React from "react";
import "./style.css";
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
    const { item, user } = this.props;
    this.props.toFavorites(user.id, item.id);
  };
  handleOnClickToShoplist = (e) => {
    const { item, user } = this.props;
    this.props.toShopList(user.id, item.id);
  };
  render() {
    const { item } = this.props;
    const { favorites, shoplist } = this.props.user;

    return (
      <div className="item">
        <div className="item-header">
          <FontAwesomeIcon
            className="toShop-button"
            onClick={this.handleOnClickToShoplist}
            icon={shoplist.includes(item.id) ? faShoppingBasket : faPlus}
          />

          <h3 className="item-name">{item.name}</h3>

          <FontAwesomeIcon
            className="like-button"
            onClick={this.handleOnClickLike}
            icon={favorites.includes(item.id) ? solidHeart : regHeart}
          />
        </div>
        <Link
          key={item.id}
          to={{
            pathname: `/books/${item.id}`,
            state: { fromDashboard: true },
          }}
          className="item-body"
        >
          <img
            src={
              item.picture === "picture"
                ? "http://localhost:4000/default.png"
                : item.picture
            }
            className="item-image"
          />
          <Rating name="read-only" value={Number(item.rating)} readOnly />

          <span className="item-author">{item.author}</span>
          <span className="item-price">{item.price} &#8381;</span>
        </Link>
      </div>
    );
  }
}

export default connect(BookItem);
