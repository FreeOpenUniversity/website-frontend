import { combineReducers } from "redux";
import { fromStateMap } from "./stateToRedux";
import { listOfReducersToReducer } from "./ListToReducer";
//import reducers here

const exampleStateMap = {
  books: {},
  currentBook: null,
};

const calendar = fromStateMap(exampleStateMap).reducers;

const reducers = [calendar];

const reduced = listOfReducersToReducer(reducers);

export default combineReducers(reduced);
