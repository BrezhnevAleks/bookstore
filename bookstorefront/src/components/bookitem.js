import React from "react";

class BookItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        <div className="item">
          img Author name price
          <button>Добавить</button>
        </div>
      </li>
    );
  }
}

export default BookItem;
