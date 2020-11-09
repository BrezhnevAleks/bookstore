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
        <img src="http://localhost:4000/default.png" className="item-image" />
        <h3 className="item-name">{item.name}</h3>
        <p className="item-author">{item.author}</p>
        <p className="item-price">{item.price}</p>
        <button>Добавить</button>
      </div>
    );
  }
}

export default BookItem;
