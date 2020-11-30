import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import RegisterPage from "../containers/registration/registerpage.js";
import LoginPage from "../containers/login/loginpage.js";
import connect from "./connect";
import PrivateRoute from "../routes/privateroute";
import BookPage from "../containers/bookpage/bookpage.js";
import NewBook from "../containers/createbook/newbook.js";
import ChangeBook from "../containers/changebook/changebook.js";
import FavoritesList from "../containers/favorites/favorites.js";
import ShopList from "../containers/shoplist/shoplist.js";
import BookList from "../containers/booklist/booklist";
import Profile from "../containers/profile/profile.js";
import { setAuthToken } from "../axios.js";

class App extends React.Component {
  login(data) {
    return data.hasOwnProperty("id") ? <Redirect to="/" /> : <LoginPage />;
  }
  registration(data) {
    return data.hasOwnProperty("id") ? <Redirect to="/" /> : <RegisterPage />;
  }
  componentDidMount() {
    setAuthToken(localStorage.getItem("authToken"));
    this.props.getUserByToken();
  }
  render() {
    const { data } = this.props;

    return (
      <Router>
        <Switch>
          <Route
            path="/login"
            render={() => this.login(data, this.path)}
            exact
          />
          <Route
            path="/register"
            render={() => this.registration(data)}
            exact
          />
          <PrivateRoute
            user={data}
            path="/books/:id"
            component={BookPage}
            exact
          />
          <PrivateRoute
            user={data}
            path="/genre/:value"
            component={BookList}
            exact
          />
          <PrivateRoute user={data} path="/" component={BookList} exact />
          <PrivateRoute user={data} path="/newbook" component={NewBook} exact />
          <PrivateRoute
            user={data}
            path="/books/change/:id"
            component={ChangeBook}
            exact
          />
          <PrivateRoute
            user={data}
            path="/shoplist"
            component={ShopList}
            exact
          />
          <PrivateRoute user={data} path="/profile" component={Profile} exact />
          <PrivateRoute
            user={data}
            path="/favorites"
            component={FavoritesList}
            exact
          />
        </Switch>
      </Router>
    );
  }
}
export default connect(App);
