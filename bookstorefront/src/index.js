import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import store from "./app/store";
import { Provider } from "react-redux";
import createUser from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  createUser,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
