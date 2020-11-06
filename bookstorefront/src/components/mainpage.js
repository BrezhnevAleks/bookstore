import React from "react";
import { Redirect } from "react-router-dom";
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
    // if(localStorage.getItem("authToken")){
    //   return <Redirect to="/login"/>
    // }
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
