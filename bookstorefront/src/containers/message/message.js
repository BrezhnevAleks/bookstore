import React from "react";

import connect from "./connect";

import "./style.css";

class Message extends React.Component {
  handleOnClickOk = () => {
    const { userConfirmation, booksConfirmation } = this.props;
    userConfirmation();
    booksConfirmation();
  };
  render() {
    const { error } = this.props;
    return (
      <div className="message-body">
        <p className="message-text">{error ? error : "Сделано"}</p>
        <button className="message-button" onClick={this.handleOnClickOk}>
          Ok
        </button>
      </div>
    );
  }
}

export default connect(Message);
