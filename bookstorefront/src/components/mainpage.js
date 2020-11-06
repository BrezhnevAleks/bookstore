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
        <header />
        <div>
          <p>Filter</p>
          <BookList />
        </div>
        <button onClick={localStorage.removeItem("authToken")}>Sign Out</button>
      </div>
    );
  }
}
export default MainPage;
