import React from "react";
import "./style.css";

class ReviewItem extends React.Component {
  render() {
    const {
      item: {
        text,
        user: { login },
      },
    } = this.props;

    return (
      <div className="review">
        <h4 className="user-name">{login}</h4>
        <p className="review-text">{text}</p>
      </div>
    );
  }
}

export default ReviewItem;
