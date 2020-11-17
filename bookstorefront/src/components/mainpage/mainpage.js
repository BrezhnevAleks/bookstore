import React from "react";
import BookList from "../../containers/booklist/booklist";
import Header from "../../containers/header/header";

import "./style.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
  };

  render() {
    return (
      <div>
        <Header handleSignOut={this.handleSignOut} />

        <BookList />
      </div>
    );
  }
}
export default MainPage;
