import { camelCase, keys, snakeCase } from "lodash";
import { crossProduct, trie } from "./utils";
import { listOfReducersToReducer } from "./ListToReducer";

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
  const resourceNames = keys(stateMap);
  const verbs = keys(handlers);
  return makeActions(verbs, resourceNames, dispatch);
};

export const generateReducers = (stateMap, _handlers = {}) => {
  const handlers = { ...defaultHandlers, _handlers };
  const resourceNames = keys(stateMap);
  return makeReducers(stateMap, resourceNames, handlers);
};

function makeActions(verbs, resourceNames, dispatch) {
  const actionList = crossProduct(verbs, resourceNames).map(
    ([verb, resource]) => {
      const type = snakeCase(`${verb}_${resource}`).toUpperCase();
      return [resource, verb, action(dispatch, type)];
    }
  );
  return trie(actionList).tree;
}

function makeReducers(stateMap, resourceNames, handlers) {
  // this returns a map from the keys in stateMap to a generic verb based reducer
  const reducerList = resourceNames.map((resource) => {
    const defaultState = stateMap[resource];

    const reducer = (state = defaultState, action) => {
      if (getResource(action.type) !== resource) return state;
      const handler = handlers[getVerb(action.type)];
      return handler ? handler(state, action) : state;
    };

    return { [resource]: reducer };
  });

  return listOfReducersToReducer([Object.assign({}, ...reducerList)]);
}
