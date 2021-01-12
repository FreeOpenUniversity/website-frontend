import { combineReducers } from "redux";
import { fromStateMap } from "./lib/stateToRedux";
import { listOfReducersToReducer } from "./lib/ListToReducer";
import { apiFactory } from "./lib/api";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise-middleware";

// Add api endpoints here
const apiStateMap = {
  book: {},
  category: {},
  image: {},
  user: {},
  userhistory: {},
  image: {},
};
const otherStateMap = {
  // add new state here
};
const stateMap = { ...apiStateMap, ...otherStateMap };
// create the redux store
const middleware = applyMiddleware(thunk, promise);
const reducers = combineReducers(fromStateMap(stateMap).reducers);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(middleware));

// initializing the api object
const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8080";
export const api = apiFactory(baseURL, apiStateMap, store.dispatch);
