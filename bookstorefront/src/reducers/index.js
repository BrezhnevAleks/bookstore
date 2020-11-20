import { combineReducers } from "redux";
import registerUser from "./registration";
import loginUser from "./login";
import booklist from "./books";
import singlebook from "./onebook";
import createbook from "./onebook";
import changebook from "./changebook";
import addUser from "./adduser";
import addBooks from "./addbooks";
import shoplist from "./shoplist";
import favorites from "./favorites";
import addReview from "./addReview";
import getReviews from "./getReviews";
import genresList from "./getgenres";

export default combineReducers({
  registerUser,
  loginUser,
  booklist,
  singlebook,
  createbook,
  changebook,
  addUser,
  addBooks,
  shoplist,
  favorites,
  addReview,
  getReviews,
  genresList,
});
