import { keys, last, snakeCase } from "lodash";
import { crossProduct, trie } from "./utils";
import { listOfReducersToReducer } from "./ListToReducer";
import { combineReducers } from "redux";
import { connect as rconnect } from "react-redux";

/**
 * reducer factories. Simplifies the generation of reducers
 * @typedef {(state, action) => action.payload} handler
 */
export const defaultHandlers = {
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

// add new reducers here
// const reducerList = [fromStateMap(apiStateMap).reducers, { auth }, { alert }];

const getResourcePaths = (stateMap, prefix = []) => {
  const nested = keys(stateMap).filter((k) => k.startsWith("_"));
  const unnested = keys(stateMap).filter((k) => !k.startsWith("_"));
  const level = unnested.map((resourceName) => [
    ...prefix,
    resourceName,
    stateMap[resourceName],
  ]);
  if (nested.length === 0) return level;

  return [
    ...level,
    ...nested
      .map((nameSpace) =>
        getResourcePaths(stateMap[nameSpace], [...prefix, nameSpace.slice(1)])
      )
      .flat(),
  ];
};

export const objectify = (state) =>
  trie(keys(state).map((k) => [...k.split("/"), state[k]])).tree;

export const connect = (mapStateToProps, actions) =>
  rconnect((state) => mapStateToProps(objectify(state)), actions);

const getResourceName = (resourcePath) =>
  resourcePath.slice(0, resourcePath.length - 1).join("/");

const action = (dispatch, type) => (payload) => dispatch({ type, payload });
const getVerb = (actionType) => actionType.split("_")[0].toLowerCase();
const getResource = (actionType) => actionType.split("_")[1]?.toLowerCase();
/**
 * @description
 * A statemap is an object where keys are state names, and values are default values.
 * for simplicity, this library expects that all states are objects
 * if you have a list of books, index them on an ID field, or create one from the index.
 *
 * With the exception of functions,
 * stateMap treats the keys of your object as resources in the redux store and creates
 * corresponding setter and updater reducers and action creators for each.
 * For example, from {cat: "meow"} you get actions:
 *  - setCat(),
 *  - updateCat()
 * and reducers for types "SET_CAT", and "UPDATE_CAT"
 *
 */
/** @type { 
  <T, K extends keyof T, S, V extends keyof S>
    (stateMap: T, handlers: S ) => 
      {actions:
        {[k in K]: {
          [s in V]: (payload:{})=>{type:[s, k], payload:{}}
        }
      }
    }
  }
*/
export const generateActions = (dispatch, stateMap, _handlers = {}) => {
  const handlers = { ...defaultHandlers, _handlers };
  const resourcePaths = getResourcePaths(stateMap);
  const verbs = keys(handlers);
  return makeActions(verbs, resourcePaths, dispatch);
};

export const generateReducers = (stateMap, _handlers = {}) => {
  const handlers = { ...defaultHandlers, _handlers };
  const resourcePaths = getResourcePaths(stateMap);
  return combineReducers(makeReducers(stateMap, resourcePaths, handlers));
};

function makeActions(verbs, resourcePaths, dispatch) {
  const actionList = crossProduct(verbs, resourcePaths).map(
    ([verb, resourcePath]) => {
      const resource = getResourceName(resourcePath);
      const type = snakeCase(`${verb}_${resource}`).toUpperCase();
      return [
        ...resourcePath.slice(0, resourcePath.length - 1),
        verb,
        action(dispatch, type),
      ];
    }
  );
  return trie(actionList).tree;
}

function makeReducers(stateMap, resourcePaths, handlers) {
  // this returns a map from the keys in stateMap to a generic verb based reducer
  const reducerList = resourcePaths.map((resourcePath) => {
    const defaultState = last(resourcePath);
    const resource = getResourceName(resourcePath);
    const reducer = (state = defaultState, action) => {
      if (getResource(action.type) !== resource) return state;
      const handler = handlers[getVerb(action.type)];
      return handler ? handler(state, action) : state;
    };

    return { [resource]: reducer };
  });

  return listOfReducersToReducer([Object.assign({}, ...reducerList)]);
}
