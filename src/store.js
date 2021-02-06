import { combineReducers } from "redux";
import { fromStateMap } from "./lib/stateToRedux";
import { listOfReducersToReducer } from "./lib/ListToReducer";
import { apiFactory } from "./lib/api";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers";
import auth, { initialState } from "./reducers/auth";
import alert from "./reducers/alert";

// Add api endpoints here
const apiStateMap = {
  book: {},
  category: {},
  image: {},
  user: {},
  userhistory: {},
  image: {},
};

const authStateApi = {
  auth: initialState,
};

// add new reducers here
const reducerList = [fromStateMap(apiStateMap).reducers, { auth }, { alert }];

// create the redux store
const middleware = applyMiddleware(thunk, promise);
const reduced = listOfReducersToReducer(reducerList);
const reducers = combineReducers(reduced);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(middleware));

// initializing the api object
const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8080";
export const api = apiFactory(baseURL, apiStateMap, store.dispatch);
