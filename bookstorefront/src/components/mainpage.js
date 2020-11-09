import React from "react";
import BookList from "../containers/booklist/booklist";

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
        <header></header>
        <div>
          <BookList />
        </div>
        <button onClick={(e) => this.handleSignOut(e)}>Sign Out</button>
      </div>
    );
  }
}
export default MainPage;
