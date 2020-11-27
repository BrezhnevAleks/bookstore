import React from "react";
import { Link } from "react-router-dom";
import connect from "./connect";
import Header from "../header/header";
import NewBook from "../createbook/newbook.js";
import UpdatePage from "../updateUser/updateUser";
import Message from "../message/message";
import { Grid } from "@material-ui/core";
import "./style.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feature: "add", completed: this.props.completed };
  }
  handleOnclickButton = (e) => {
    return this.setState({ feature: e.target.value });
  };
  handleOnClickOk = () => {
    this.setState({ completed: false });
  };

  handleOption = (value, complete) => {
    if (complete) {
      return (
        <Message
          user={this.props.user}
          handleOnClickOk={this.handleOnClickOk}
        />
      );
    }
    switch (value) {
      case "add":
        return <NewBook handleOnClickOk={this.handleOnClickOk} />;
      case "update":
        return <UpdatePage handleOnClickOk={this.handleOnClickOk} />;
    }
  };
  render() {
    const { user } = this.props;
    const { feature, completed } = this.state;
    return (
      <div>
        <Header />
        <Grid
          container
          item
          spacing={4}
          xs={12}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          style={{ padding: "0 15%" }}
        >
          <Grid
            container
            item
            justify="flex-start"
            className="genres"
            direction="column"
            alignItems="flex-start"
            xs={3}
          >
            <h3 className="categories">Личный кабинет</h3>
            <p>Имя: {user.login}</p>
            <p>Email: {user.email}</p>
            <Link to="/shoplist">Корзина: [{user.shoplist.length}]</Link>
            <Link to="/favorites">Избранное: [{user.favorites.length}]</Link>
          </Grid>

          <Grid
            container
            item
            xs={9}
            cellHeight="auto"
            spacing={0}
            alignContent="center"
            direction="column"
          >
            <Grid
              container
              item
              xs={12}
              cellHeight="auto"
              spacing={0}
              justify="center"
            >
              <div className="profile-functions">
                <button
                  value="add"
                  className={
                    feature === "add"
                      ? "profile-functions-button-active"
                      : "profile-functions-button"
                  }
                  onClick={this.handleOnclickButton}
                >
                  Добавить книгу
                </button>
                <button
                  value="update"
                  className={
                    feature === "update"
                      ? "profile-functions-button-active"
                      : "profile-functions-button"
                  }
                  onClick={this.handleOnclickButton}
                >
                  Изменить данные
                </button>
              </div>
            </Grid>
            <Grid
              className="profile-body"
              container
              item
              xs={12}
              spacing={0}
              justify="center"
            >
              {this.handleOption(feature, this.props.completed)}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(Profile);
