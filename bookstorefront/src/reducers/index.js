import { combineReducers } from "redux";
import registerUser from "./registration";
import loginUser from "./login";
import booklist from "./books";
import singlebook from "./onebook";

export default combineReducers({
  registerUser,
  loginUser,
  booklist,
  singlebook,
});
