import { generateReducers, generateActions } from "./lib/stateToRedux";
import { apiFactory } from "./lib/api";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise-middleware";

// Add api endpoints here
const _api = {
  book: {},
  category: {},
  image: {},
  user: {},
  userhistory: {},
  auth: {},
};

const _auth = {
  auth: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  alerts: [],
};

// add new reducers here
// const reducerList = [fromStateMap(apiStateMap).reducers, { auth }, { alert }];

const stateMap = { _api, _auth };

// create the redux store
const middleware = applyMiddleware(thunk, promise);
const reducers = generateReducers(stateMap);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(middleware));

export const actions = generateActions(store.dispatch, stateMap);
console.log(actions);
// initializing the api object

// django todo: add /books/api/book
// django todo: add {format: "json"} as last param to apiFactory
const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8080";
export const api = apiFactory(baseURL, actions.api, store.dispatch);
