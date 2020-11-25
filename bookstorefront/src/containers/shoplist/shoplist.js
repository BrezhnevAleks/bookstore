import React from "react";
import connect from "./connect";
import { Link } from "react-router-dom";
import BookItem from "../bookitem/bookitem";
import Header from "../header/header";
import { Grid } from "@material-ui/core";
import "./style.css";

class ShopList extends React.Component {
  componentDidMount() {
    this.props.getShoplist(this.props.user.id);
  }

  render() {
    const { shoplist } = this.props;

    return (
      <div>
        <Header />
        <div className="shoplist">
          <Grid container item xs={9} spacing={6} cellHeight="auto">
            <Grid item xs={12} className="booklist-header">
              <span className="booklist-count">
                {"Книг доступно: " + shoplist.length}
              </span>
            </Grid>
            {shoplist.map((shopItem) => (
              <Grid item cellHeight="auto" xs={3}>
                <Link
                  key={shopItem.id}
                  to={{
                    pathname: `/books/${shopItem.id}`,
                    state: { fromDashboard: true },
                  }}
                >
                  <BookItem item={shopItem} key={shopItem.id} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
        <button className="shoplist-buy">Оформить заказ</button>
      </div>
    );
  }
}

export default connect(ShopList);
