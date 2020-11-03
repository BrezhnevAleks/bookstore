import React from "react";
import connect from "./connect";

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

    let { login, email, password } = this.state;
    console.log("Request is going: " + email, password);
    this.props.loginUser(email, password);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <p>This is the login page</p>
        <form onSubmit={(e) => this.handleSubmit(e)} method="get">
          <label>Email</label>
          <br></br>
          <input
            onChange={(e) => this.handleChangeEmail(e)}
            type="email"
            name="userEmail"
          />
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            onChange={(e) => this.handleChangePassword(e)}
            type="text"
            name="userPassword"
          />
          <br></br>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
export default connect(LoginPage);
