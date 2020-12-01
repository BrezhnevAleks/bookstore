import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import connect from "./connect";
import "./style.css";

class Header extends React.Component {
  handleSignOut = () => {
    const { signOutUser } = this.props;

    localStorage.clear();
    signOutUser();
  };
  render() {
    const { getBooks } = this.props;
    return (
      <header className="menu">
        <Link to="/" onClick={getBooks}>
          <FontAwesomeIcon icon={faHome} className="home-page" />
        </Link>

        <div className="menu-icons">
          <Link to="/profile" className="menu-profile">
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>

          <Link to="/favorites" className="menu-favorites">
            <FontAwesomeIcon icon={faHeart} />
          </Link>

          <Link to="/shoplist" className="menu-shoplist">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>

          <Link to="/login">
            <FontAwesomeIcon
              className="menu-sign-out"
              icon={faSignOutAlt}
              style={({ fontSize: "17px" }, { cursor: "pointer" })}
              onClick={this.handleSignOut}
            />
          </Link>
        </div>
      </header>
    );
  }
}
export default connect(Header);
