import { combineReducers } from "redux";
import registerUser from "./registration";
import loginUser from "./login";
import booklist from "./books";
import singlebook from "./onebook";
import createbook from "./onebook";
import changebook from "./changebook";
import addUser from "./adduser";
import shoplist from "./shoplist";
import favorites from "./favorites";
import addReview from "./addReview";
import getReviews from "./getReviews";

export default combineReducers({
  registerUser,
  loginUser,
  booklist,
  singlebook,
  createbook,
  changebook,
  addUser,
  shoplist,
  favorites,
  addReview,
  getReviews,
});
