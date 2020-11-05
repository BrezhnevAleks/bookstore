import React from "react";
import connect from "./connect";
import { Redirect, Link } from "react-router-dom";
import "./style.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let { email, password } = this.state;
    console.log("Request is going: " + email, password);
    this.props.loginUser(email, password);
    this.setState({ email: "", password: "" });
  };

  render() {
    console.log(this.props);
    if (localStorage.getItem("authToken")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <h1>Sign in</h1>
        <p>This is the login page</p>

        <form
          onSubmit={(e) => this.handleSubmit(e)}
          method="get"
          className="login-main"
        >
          <label>Email</label>
          <input
            onChange={(e) => this.handleChangeEmail(e)}
            type="email"
            name="userEmail"
          />

          <label>Password</label>
          <input
            onChange={(e) => this.handleChangePassword(e)}
            type="text"
            name="userPassword"
          />
          <div className="buttons">
            <input type="submit" value="Login" />
            <Link to="/register" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(LoginPage);
