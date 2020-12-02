import React from "react";
import connect from "./connect";
import { Link } from "react-router-dom";
import "../login/style.css";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", email: "", password: "", error: "" };
  }

  handleChange = (e) => {
    this.setState({ error: "" });
    switch (e.target.name) {
      case "login":
        return this.setState({ login: e.target.value });
      case "email":
        return this.setState({ email: e.target.value });
      case "password":
        return this.setState({ password: e.target.value });
      default:
        return;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { createUser, error } = this.props;
    const { login, email, password } = this.state;

    createUser(login, email, password);
    this.setState({ login: "", email: "", password: "", error });
  };

  render() {
    const { login, email, password, error } = this.state;

    return (
      <div className="login">
        <h1>Sign up</h1>
        <p className="sign-text">This is the register page</p>
        <form className="login-main" onSubmit={this.handleSubmit} method="post">
          <label>Login</label>
          <input
            value={login}
            required
            className={error ? "sign-input-denied" : "sign-input"}
            onChange={this.handleChange}
            type="text"
            name="login"
          />

          <label>Password</label>
          <input
            value={password}
            required
            className={error ? "sign-input-denied" : "sign-input"}
            onChange={this.handleChange}
            type="text"
            name="password"
          />

          <label>Email</label>
          <input
            value={email}
            required
            className={error ? "sign-input-denied" : "sign-input"}
            onChange={this.handleChange}
            type="email"
            name="email"
          />

          <div className="buttons">
            <Link className="sign-link" to="/login">
              Login
            </Link>
            <input className="sign-submit" type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}
export default connect(RegisterPage);
