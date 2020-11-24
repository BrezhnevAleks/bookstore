import { combineReducers } from "redux";
import registerUser from "./registration";
import loginUser from "./login";
import addUser from "./adduser";
import shoplist from "./shoplist";
import favorites from "./favorites";
import addReview from "./addReview";
import user from "./userReducer";
import booklist from "./booksReducer";

export default combineReducers({
  booklist,
  // addReview,

  user,
});
