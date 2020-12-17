import { combineReducers } from "redux";
import { fromStateMap } from "./lib/stateToRedux";
import { listOfReducersToReducer } from "./lib/ListToReducer";
import { apiFactory } from "./lib/api";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

import promise from "redux-promise-middleware";

const apiStateMap = {
  book: {},
  category: {},
};
const middleware = applyMiddleware(
  thunk,
  promise
  // createLogger({ collapsed: true })
);
const reduced = listOfReducersToReducer([fromStateMap(apiStateMap).reducers]);
const reducers = combineReducers(reduced);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(middleware));

export const api = apiFactory(apiStateMap, store.dispatch);
