import { camelCase, keyBy, keys, mapValues, snakeCase, sn } from "lodash";
import { crossProduct } from "./utils";

/**
 * reducer factories. Simplifies the generation of reducers
 */
const defHandlers = {
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

const action = (type) => (payload) => ({ type, payload });
const getVerb = (actionType) => actionType.split("_")[0].toLowerCase();

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
export const fromStateMap = (stateMap, handlers = defHandlers) => {
  const resourceNames = keys(stateMap);
  const verbs = keys(handlers);
  return {
    actions: makeActions(verbs, resourceNames),
    reducers: makeReducers(stateMap, resourceNames, handlers),
  };
};

function makeActions(verbs, resourceNames) {
  const actionList = crossProduct(verbs, resourceNames).map(
    ([verb, resource]) => {
      const type = snakeCase(`${verb}_${resource}`).toUpperCase();
      return { [camelCase(type)]: action(type) };
    }
  );
  return Object.assign({}, ...actionList);
}

function makeReducers(stateMap, resourceNames, handlers = defHandlers) {
  // this returns a map from the keys in stateMap to a generic verb based reducer
  const reducerList = resourceNames.map((resource) => {
    const defaultState = stateMap[resource];

    const reducer = (state = defaultState, action) => {
      const verb = getVerb(action.type);
      return handlers[verb] ? handlers[verb](state, action) : state;
    };

    return { [resource]: reducer };
  });

  return Object.assign({}, ...reducerList);
}
