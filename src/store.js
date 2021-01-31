import { combineReducers } from "redux";
import { generateReducers, generateActions } from "./lib/stateToRedux";
import { apiFactory } from "./lib/api";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise-middleware";

const handlers = {
  set: (state, action) => {
    return action.payload;
  },
  update: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
};

// Add api endpoints here
const apiStateMap = {
  book: {},
  category: {},
  image: {},
  user: {},
  userhistory: {},
};

// create, read, update, delete

// api.chocolate.create({name:"dark"})
// api.chocolate.update({id: "123", name:"extra dark"})
// api.chocolate.read({id: "123"})
// api.chocolate.read()
// api.chocolate.delete({id: "123"})

const UIStateMap = {
  // user: { loggedIn: false, currentPage: "/home" },
  // searchOptions: {},
  // add new state here
};

const stateMap = { ...apiStateMap, ...UIStateMap };

// create the redux store
const middleware = applyMiddleware(thunk, promise);
const reducers = combineReducers(generateReducers(stateMap, handlers));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(middleware));
export const actions = generateActions(store.dispatch, stateMap, handlers);
// initializing the api object
const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8080";
export const api = apiFactory(baseURL, apiStateMap, store.dispatch);
