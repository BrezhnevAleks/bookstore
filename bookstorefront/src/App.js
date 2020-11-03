import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./components/mainpage.js";
import RegisterPage from "./containers/registration/registerpage.js";
import LoginPage from "./containers/login/loginpage.js";
import connect from "./connect";
import PrivateRoute from "./routs/privateroute";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={() => <LoginPage />} exact />
          <Route path="/register" component={() => <RegisterPage />} exact />
          <PrivateRoute
            auth={this.props.data}
            path="/"
            component={() => <MainPage />}
            exact
          />
        </Switch>
      </Router>
    );
  }
}
export default connect(App);
