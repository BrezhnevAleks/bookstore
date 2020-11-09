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
import BookPage from "../components/bookpage/bookpage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logged: false };
  }

  render() {
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
          <Route path="/register" component={RegisterPage} exact />
          <PrivateRoute
            user={this.props.data}
            path="/books/:id"
            component={<BookPage getOneBook={this.props.getOneBook} />}
            exact
          />
          <PrivateRoute
            user={this.props.data}
            path="/"
            component={MainPage}
            exact
          />
        </Switch>
      </Router>
    );
  }
}
export default connect(App);
