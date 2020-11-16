import React from "react";
import BookList from "../../containers/booklist/booklist";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    console.log("HELLLOO");
  };

  render() {
    return (
      <div>
        <header className="menu">
          <Link to="/newbook" className="menu-create">
            <FontAwesomeIcon className="menu-create-icon" icon={faPlus} />{" "}
            Создать новую книгу
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
              onClick={(e) => this.handleSignOut(e)}
            />
          </div>
        </header>

        <BookList />
      </div>
    );
  }
}
export default MainPage;
