import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <p>This is the login page</p>
        <form action="/login" method="post">
          <label>Login</label>
          <br></br>
          <input type="text" name="userLogin" />
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="text" name="userPassword" />
          <br></br>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
export default LoginPage;
