import React from "react";
import connect from "./connect";
import { Redirect, Link } from "react-router-dom";
import "./style.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleChange = (e) => {
    switch (e.target.name) {
      case "userEmail":
        return this.setState({ email: e.target.value });
      case "userPassword":
        return this.setState({ password: e.target.value });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let { email, password } = this.state;

    this.props.loginUser(email, password);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <h1>Sign in</h1>
        <p className="sign-text">This is the login page</p>

        <form
          onSubmit={(e) => this.handleSubmit(e)}
          method="get"
          className="login-main"
        >
          <label>Email</label>
          <input
            value={email}
            className="sign-input"
            onChange={(e) => this.handleChange(e)}
            type="email"
            name="userEmail"
          />

          <label>Password</label>
          <input
            value={password}
            className="sign-input"
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="userPassword"
          />
          <div className="buttons">
            <Link className="sign-link" to="/register">
              Register
            </Link>
            <input className="sign-submit" type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(LoginPage);
