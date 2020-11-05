import React from "react";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <p>This is the main page</p>
        <button onClick={localStorage.removeItem("authToken")}>Sign Out</button>
      </div>
    );
  }
}
export default MainPage;
