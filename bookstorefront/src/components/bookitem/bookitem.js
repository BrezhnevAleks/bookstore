import React from "react";
import "./style.css";

class BookItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <img
          src={
            item.picture === "picture"
              ? "http://localhost:4000/default.png"
              : item.picture
          }
          className="item-image"
        />
        <h3 className="item-name">{item.name}</h3>
        <p className="item-author">{item.author}</p>
        <p className="item-price">{item.price} &#8381;</p>
      </div>
    );
  }
}

export default BookItem;
