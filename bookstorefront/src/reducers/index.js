import { combineReducers } from "redux";
import registerUser from "./registration";
import loginUser from "./login";
import booklist from "./books";
import singlebook from "./onebook";
import createbook from "./onebook";
import changebook from "./changebook";

export default combineReducers({
  registerUser,
  loginUser,
  booklist,
  singlebook,
  createbook,
  changebook,
});
