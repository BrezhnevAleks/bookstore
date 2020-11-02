import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./components/mainpage.js";
import RegisterPage from "./components/registerpage.js";
import LoginPage from "./components/loginpage.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <MainPage />} />
            <Route path="/login" component={() => <LoginPage />} />
            <Route path="/register" component={() => <RegisterPage />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
