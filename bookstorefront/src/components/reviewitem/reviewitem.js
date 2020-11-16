import React from "react";
import "./style.css";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="review">
        <h4 className="user-name">{item.user.login}</h4>

        <p className="review-text">{item.text}</p>
      </div>
    );
  }
}

export default ReviewItem;
