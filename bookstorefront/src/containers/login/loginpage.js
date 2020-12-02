import React from "react";
import connect from "./connect";
import { Redirect, Link } from "react-router-dom";
import "./style.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", error: "" };
  }
  handleChange = (e) => {
    this.setState({ error: "" });
    switch (e.target.name) {
      case "userEmail":
        return this.setState({ email: e.target.value });
      case "userPassword":
        return this.setState({ password: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginUser, error } = this.props;
    const { email, password } = this.state;

    loginUser(email, password);
    this.setState({ email: "", password: "", error });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="login">
        <h1>Sign in</h1>
        <p className="sign-text">This is the login page</p>

        <form onSubmit={this.handleSubmit} method="get" className="login-main">
          <label>Email</label>
          <input
            value={email}
            className={error ? "sign-input-denied" : "sign-input"}
            onChange={this.handleChange}
            type="email"
            name="userEmail"
            required
          />

          <label>Password</label>
          <input
            value={password}
            className={error ? "sign-input-denied" : "sign-input"}
            onChange={this.handleChange}
            type="text"
            name="userPassword"
            required
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
