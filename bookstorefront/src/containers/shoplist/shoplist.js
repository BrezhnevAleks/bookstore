import React from "react";
import connect from "./connect";
import { Link } from "react-router-dom";
import BookItem from "../../components/bookitem/bookitem";
import Header from "../header/header";

class ShopList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getShoplist(this.props.user.id);
  }

  render() {
    const { shoplist } = this.props;

    return (
      <div>
        <Header />
        <div className="booklist">
          <div className="booklist-header">
            <span className="booklist-count">
              {"Книг в корзине: " + this.props.user.shoplist.length}
            </span>
          </div>
          <div className="books">
            {shoplist.map((item) => (
              <Link
                key={item.id}
                to={{
                  pathname: `/books/${item.id}`,
                  state: { fromDashboard: true },
                }}
              >
                <BookItem item={item} key={item.id} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(ShopList);
