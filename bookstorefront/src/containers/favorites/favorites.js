import React from "react";
import connect from "./connect";
import BookItem from "../bookitem/bookitem";
import Header from "../header/header";
import { Grid } from "@material-ui/core";
import "./style.css";

class FavoritesList extends React.Component {
  componentDidMount() {
    const {
      user: { id },
      getFavoritesList,
    } = this.props;

    getFavoritesList(id);
  }

  render() {
    const { favorites, user } = this.props;

    return (
      <div>
        <Header />

        {favorites.length ? (
          <div className="favorites">
            <Grid container item xs={9} spacing={6} cellHeight="auto">
              <Grid item xs={12} className="booklist-header">
                <span className="booklist-count">
                  {"Книг в избранном: " + favorites.length}
                </span>
              </Grid>
              {favorites.map((shopItem) => (
                <Grid item cellHeight="auto" xs={3}>
                  <BookItem
                    item={shopItem}
                    key={shopItem.id}
                    favorites={user.favorites}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <div className="favorites-plug">
            <p>Список избранного пуст</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(FavoritesList);
