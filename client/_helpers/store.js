import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
import rootReducer from "../_reducers";
import ReduxPromise from "redux-promise";

// let loggerMiddleware = createLogger();


export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, ReduxPromise)
);
