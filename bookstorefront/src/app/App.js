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

class App extends React.Component {
  componentDidUpdate() {
    if (this.props.data) {
      this.forceUpdate();
      console.log("ASDWSDWA"); //это всё не работает
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/login"
            render={() =>
              this.props.data ? <Redirect to="/" /> : <LoginPage />
            }
            exact
          />
          <Route path="/register" component={() => <RegisterPage />} exact />

          <PrivateRoute
            user={this.props.data}
            path="/"
            component={() => <MainPage />}
          />
          <Route path="*" component={() => <LoginPage />} exact />
        </Switch>
      </Router>
    );
  }
}
export default connect(App);
