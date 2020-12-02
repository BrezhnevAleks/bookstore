import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import connect from "./connect";
import "./style.css";

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    const {
      user: { login, email },
    } = this.props;
    this.state = {
      newLogin: login,
      newEmail: email,
      newPassword: "",
      flag: "none",
    };
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case "login":
        return this.setState({ newLogin: e.target.value });
      case "email":
        return this.setState({ newEmail: e.target.value });
      case "password":
        return this.setState({ newPassword: e.target.value });
      default:
        return;
    }
  };
  handleOnClickChange = (e) => {
    this.setState({ flag: e.target.id });
  };
  handleOnClickCancel = (e) => {
    const {
      user: { login, email },
    } = this.props;
    this.setState({
      newLogin: login,
      newEmail: email,
      newPassword: "",
      flag: "none",
    });
  };
  handleOnBlur = () => {
    this.setState({
      flag: "none",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const {
      user: { id },
      updateUser,
    } = this.props;
    const { newLogin, newEmail, newPassword } = this.state;

    updateUser(id, newLogin, newEmail, newPassword);
    this.setState({ newLogin: "", newEmail: "", newPassword: "" });
  };

  render() {
    const { newLogin, newEmail, newPassword, flag } = this.state;
    const { handleOnClickOk } = this.props;

    return (
      <div className="update">
        <h1>Изменить данные</h1>
        <p className="update-text">
          Введите данные, которые необходмо обновить и нажмите кнопку
          "Подтвердить"
        </p>
        <div className="update-body">
          <form
            className="update-main"
            onSubmit={this.handleSubmit}
            method="post"
          >
            <label>Логин</label>
            {flag === "login" ? (
              <input
                onBlur={this.handleOnBlur}
                autoFocus={true}
                value={newLogin}
                required
                className="update-input"
                onChange={this.handleChange}
                type="text"
                name="login"
              />
            ) : (
              <span
                className="update-values"
                onClick={this.handleOnClickChange}
                id={"login"}
              >
                {newLogin}
                <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faPen} />
              </span>
            )}
            <label>Пароль:</label>
            {flag === "password" ? (
              <input
                onBlur={this.handleOnBlur}
                autoFocus={true}
                value={newPassword}
                required
                className="update-input"
                onChange={this.handleChange}
                type="text"
                name="password"
              />
            ) : (
              <span
                className="update-values"
                onClick={this.handleOnClickChange}
                id={"password"}
              >
                Изменить пароль
                <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faPen} />
              </span>
            )}
            <label>Email</label>
            {flag === "email" ? (
              <input
                onBlur={this.handleOnBlur}
                autoFocus={true}
                value={newEmail}
                required
                className="update-input"
                onChange={this.handleChange}
                type="email"
                name="email"
              />
            ) : (
              <span
                className="update-values"
                onClick={this.handleOnClickChange}
                id={"email"}
              >
                {newEmail}
                <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faPen} />
              </span>
            )}

            <div className="buttons">
              <input
                className="update-submit"
                type="submit"
                value="Подтвердить"
                onClick={handleOnClickOk}
              />
            </div>
          </form>
          <button
            className="update-cancel"
            value="Сбросить изменения"
            onClick={this.handleOnClickCancel}
          >
            Сбросить изменения
          </button>
        </div>
      </div>
    );
  }
}
export default connect(UpdatePage);
