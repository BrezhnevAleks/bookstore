import { combineReducers } from "redux";

import user from "./userReducer";
import booklist from "./booksReducer";

export default combineReducers({
  booklist,
  user,
});
