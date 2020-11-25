import React from "react";
import connect from "./connect";
import { Link } from "react-router-dom";
import BookItem from "../bookitem/bookitem";
import Header from "../header/header";
import { Grid } from "@material-ui/core";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

class FavoritesList extends React.Component {
  componentDidMount() {
    this.props.getFavoritesList(this.props.user.id);
  }

  render() {
    const { favorites, user } = this.props;

    return (
      <div>
        <Header />
        <div className="favorites">
          <Grid container item xs={9} spacing={6} cellHeight="auto">
            <Grid item xs={12} className="booklist-header">
              <span className="booklist-count">
                {"Книг доступно: " + favorites.length}
              </span>
            </Grid>
            {favorites.map((shopItem) => (
              <Grid item cellHeight="auto" xs={3}>
                <BookItem
                  item={shopItem}
                  key={shopItem.id}
                  favorites={user.favorites}
                ></BookItem>
              </Grid>
            ))}
          </Grid>
        </div>
        <button className="favorites-button">Оформить заказ</button>
      </div>
    );
  }
}

export default connect(FavoritesList);
