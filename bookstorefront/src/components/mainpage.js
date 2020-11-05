import React from "react";
import BookList from "./booklist";

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
      <div className="App">
        <nav>menu</nav>
        <BookList />
        <button onClick={localStorage.removeItem("authToken")}>Sign Out</button>
      </div>
    );
  }
}
export default MainPage;
