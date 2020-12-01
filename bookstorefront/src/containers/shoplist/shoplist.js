import React from "react";
import connect from "./connect";

import BookItem from "../bookitem/bookitem";
import Header from "../header/header";
import { Grid } from "@material-ui/core";
import "./style.css";

class ShopList extends React.Component {
  componentDidMount() {
    const {
      user: { id },
      getShoplist,
    } = this.props;

    getShoplist(id);
  }

  render() {
    const { shoplist } = this.props;

    return (
      <div>
        <Header />
        {shoplist.length ? (
          <div className="shoplist">
            <Grid container item xs={9} spacing={6} cellHeight="auto">
              <Grid item xs={12} className="booklist-header">
                <span className="booklist-count">
                  {"Книг в корзине: " + shoplist.length}
                </span>
              </Grid>
              {shoplist.map((shopItem) => (
                <Grid item cellHeight="auto" xs={3}>
                  <BookItem item={shopItem} key={shopItem.id} />
                </Grid>
              ))}
            </Grid>
            <button className="shoplist-buy">Оформить заказ</button>
          </div>
        ) : (
          <div className="shoplist-plug">
            <p>Корзина пуста</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(ShopList);
