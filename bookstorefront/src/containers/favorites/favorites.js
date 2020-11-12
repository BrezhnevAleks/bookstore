import React from "react";
import connect from "./connect";
import { Link } from "react-router-dom";
import BookItem from "../../components/bookitem/bookitem";

class FavoritesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFavoritesList(this.props.user.id);
  }

  render() {
    const { favorites } = this.props;

    return (
      <div className="booklist">
        <div className="booklist-header">
          <span className="booklist-count">
            {"Книг в избранном: " + this.props.user.favorites.length}
          </span>
        </div>
        <div className="books">
          {favorites.map((item) => (
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
    );
  }
}

export default connect(FavoritesList);
