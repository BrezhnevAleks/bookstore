import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import MainPage from "../components/mainpage.js";
import RegisterPage from "../containers/registration/registerpage.js";
import LoginPage from "../containers/login/loginpage.js";
import connect from "./connect";
import PrivateRoute from "../routs/privateroute";
import BookPage from "../containers/bookpage/bookpage.js";
import NewBook from "../containers/createbook/newbook.js";
import ChangeBook from "../containers/changebook/changebook.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logged: false };
  }

  render() {
    console.log(this.props.data);
    return (
      <Router>
        <Switch>
          <Route
            path="/login"
            render={() =>
              this.props.data.hasOwnProperty("id") ? (
                <Redirect to="/" />
              ) : (
                <LoginPage />
              )
            }
            exact
          />
          <Route
            path="/register"
            render={() =>
              this.props.data.hasOwnProperty("id") ? (
                <Redirect to="/" />
              ) : (
                <RegisterPage />
              )
            }
            exact
          />
          <PrivateRoute
            user={this.props.data}
            path="/books/:id"
            component={BookPage}
            exact
          />
          <PrivateRoute
            user={this.props.data}
            path="/"
            component={MainPage}
            exact
          />
          <PrivateRoute
            user={this.props.data}
            path="/newbook"
            component={NewBook}
            exact
          />
          <PrivateRoute
            user={this.props.data}
            path="/books/change/:id"
            component={ChangeBook}
            exact
          />
        </Switch>
      </Router>
    );
  }
}
export default connect(App);
