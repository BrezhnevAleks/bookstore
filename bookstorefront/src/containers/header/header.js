import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="menu">
        <Link to="/newbook" className="menu-create">
          <FontAwesomeIcon className="menu-create-icon" icon={faPlus} />
          Добавить новую книгу
        </Link>
        <div className="menu-icons">
          <Link to="/favorites" className="menu-favorites">
            <FontAwesomeIcon icon={faHeart} />
          </Link>

          <Link to="/shoplist" className="menu-shoplist">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>

          <FontAwesomeIcon
            className="menu-sign-out"
            icon={faSignOutAlt}
            style={({ fontSize: "17px" }, { cursor: "pointer" })}
            onClick={(e) => this.props.handleSignOut(e)}
          />
        </div>
      </header>
    );
  }
}
export default Header;
