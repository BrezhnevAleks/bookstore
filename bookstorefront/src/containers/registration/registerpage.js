import React from "react";
import connect from "./connect";
import { Link } from "react-router-dom";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", email: "", password: "" };
  }
  handleChangeLogin = (e) => {
    this.setState({ login: e.target.value });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let { login, email, password } = this.state;
    console.log("Request is going: " + login, email, password);
    this.props.createUser(login, email, password);
    this.setState({ login: "", email: "", password: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>Sign up</h1>
        <p>This is the register page</p>
        <form onSubmit={(e) => this.handleSubmit(e)} method="post">
          <label>Login</label>
          <br></br>
          <input
            required
            onChange={(e) => this.handleChangeLogin(e)}
            type="text"
            name="userLogin"
          />
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            required
            onChange={(e) => this.handleChangePassword(e)}
            type="text"
            name="userPassword"
          />
          <br></br>
          <label>Email</label>
          <br></br>
          <input
            required
            onChange={(e) => this.handleChangeEmail(e)}
            type="email"
            name="userEmail"
          />
          <br></br>
          <input type="submit" value="Register" />
        </form>
        <Link to="/login" />
      </div>
    );
  }
}
export default connect(RegisterPage);
