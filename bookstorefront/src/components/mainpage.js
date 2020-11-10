import React from "react";
import BookList from "../containers/booklist/booklist";
import { Link } from "react-router-dom";

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
        <header>
          <Link to="/newbook"> Создать новую книгу</Link>
        </header>
        <div>
          <BookList />
        </div>
        <button onClick={(e) => this.handleSignOut(e)}>Sign Out</button>
      </div>
    );
  }
}
export default MainPage;
