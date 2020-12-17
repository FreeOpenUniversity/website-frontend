import { camelCase, keyBy, keys, mapValues, snakeCase, sn } from "lodash";
import { crossProduct } from "./utils";

/**
 * reducer factories. Simplifies the generation of reducers
 */
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
export function fromStateMap(stateMap) {
  const resourceNames = Object.keys(stateMap).filter(
    (k) => typeof stateMap[k] !== "function"
  );
  const verbs = keys(handlers);

  // this returns an map from the keys in stateMap to a generic verb based reducer
  const reducers = resourceNames
    .map((resource) => {
      const defaultState = stateMap[resource];
      const reducer = (state = defaultState, action) => {
        const verb = getVerb(action.type);
        return handlers[verb] ? handlers[verb](state, action) : state;
      };
      return { [resource]: reducer };
    })
    .reduce((reducers, reducer) => ({ ...reducers, ...reducer }), {});

  //this retunss an object of action creators
  const actions = crossProduct(verbs, resourceNames)
    .map(([verb, resource]) => snakeCase(`${verb}_${resource}`).toUpperCase())
    .map((type) => ({
      [camelCase(type)]: action(type),
    }))
    .reduce((obj, curr) => ({ ...obj, ...curr }), {});

  return { actions, reducers };
}
