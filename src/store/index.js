import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

let store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

// applyMiddleware(ReduxThunk)
export default store;
