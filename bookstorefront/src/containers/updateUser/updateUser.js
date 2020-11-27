import React from "react";
import connect from "./connect";
import "./style.css";

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    const { login, email } = this.props.user;
    this.state = {
      login: login,
      email: email,

      newPassword: "",
    };
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case "login":
        return this.setState({ login: e.target.value });
      case "email":
        return this.setState({ email: e.target.value });

      case "newPassword":
        return this.setState({ newPassword: e.target.value });
      default:
        return;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.user;
    let { login, email, newPassword } = this.state;
    console.log("Request is going: " + id, login, email, newPassword);
    this.props.updateUser(id, login, email, newPassword);
    this.setState({ login: "", email: "", newPassword: "" });
  };

  render() {
    const { login, email, newPassword } = this.state;
    return (
      <div className="update">
        <h1>Изменить даные</h1>
        <p className="update-text">
          Введите данные, которые необходмо обновить и нажмите кнопку
          "Подтвердить"
        </p>
        <form
          className="update-main"
          onSubmit={(e) => this.handleSubmit(e)}
          method="post"
        >
          <label>Новый логин</label>
          <input
            value={login}
            required
            className="update-input"
            onChange={this.handleChange}
            type="text"
            name="login"
          />

          <label>Новый пароль:</label>
          <input
            value={newPassword}
            required
            className="update-input"
            onChange={this.handleChange}
            type="text"
            name="newPassword"
          />
          <label>Новый Email</label>
          <input
            value={email}
            required
            className="update-input"
            onChange={this.handleChange}
            type="email"
            name="email"
          />

          <div className="buttons">
            <input
              className="update-submit"
              type="submit"
              value="Подтвердить"
              onClick={(e) => this.props.handleOnClickOk(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default connect(UpdatePage);
