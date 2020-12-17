import { camelCase, keyBy, keys, mapValues, snakeCase, sn } from "lodash";

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

  const actionTypes = resourceNames
    .map((resource) =>
      verbs.map((prefix) => ({
        prefix,
        type: snakeCase(`${prefix}_${resource}`).toUpperCase(),
      }))
    )
    .flat();

  const actions = actionTypes
    .map(({ type }) => ({
      fname: camelCase(type),
      action: action(type),
    }))
    .reduce((obj, curr) => ({ ...obj, [curr.fname]: curr.action }), {});

  return { actions, reducers };
}

/**
 *
 * @param {string[]} verbs list of verbs (set update)
 * @param {string} resource like a database table name, or a resource api endpoint
 * @param {*} defaultState how the resource should be initialized in redux
 * @returns {{[actionType: string]:()}}
 */
function toHandlers(verbs, resource, defaultState) {
  return verbs
    .map((verb) => toHandler(verb, resource, defaultState))
    .reduce((all, curr) => ({ ...all, ...curr }), {});
}

/**
 * @typedef {{type: string, payload:any}} Action
 * @typedef {{[actionType:string]:(state, action: Action)=>newState}} Handler
 *
 * @param {string} verb list of verbs [set update]
 * @param {string} resource like a database table name, or a resource api endpoint
 * @param {*} defaultState how the resource should be initialized in redux
 */
function toHandler(verb, resource, defaultState) {
  const type = snakeCase(`${verb}_${resource}`).toUpperCase();
  return {
    [type]: handlers[verb](defaultState),
  };
}
