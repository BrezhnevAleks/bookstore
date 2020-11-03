import { combineReducers } from "redux";
import registerUser from "./registration";
import loginUser from "./login";

export default combineReducers({
  registerUser,
  loginUser,
});
