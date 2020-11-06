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
        <p>{item.picture}</p>
        <h3>{item.name}</h3>
        <p>{item.author}</p>
        <p>{item.price}</p>
        <button>Добавить</button>
      </div>
    );
  }
}

export default BookItem;
