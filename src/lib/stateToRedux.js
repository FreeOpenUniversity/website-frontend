// getters, and setters/reducers

import { camelCase, keyBy, keys, mapValues, snakeCase, sn } from "lodash";

const baseReducers = {
  set: (defaultState) => {
    return (state = defaultState, action) => {
      return action.payload;
    };
  },
  update: (defaultState) => (state = defaultState, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
};

const action = (type) => (payload) => ({ type, payload });

/**
 *
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
  const prefixes = "update set".split(" ");

  const reducers = resourceNames.reduce((reducers, name) => {
    const defaultState = stateMap[name];
    const reducer = (state = defaultState, action) => {
      const handlers = toHandlers(prefixes, name, defaultState);
      return handlers[action.type]
        ? handlers[action.type](state, action)
        : state;
    };
    return {
      ...reducers,
      [name]: reducer,
    };
  }, {});

  const actionTypes = resourceNames
    .map((name) =>
      prefixes.map((prefix) => ({
        prefix,
        type: snakeCase(`${prefix}_${name}`).toUpperCase(),
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

function toHandlers(prefixes, name, defaultState) {
  return prefixes
    .map((prefix) => ({
      prefix,
      type: snakeCase(`${prefix}_${name}`),
    }))
    .reduce(
      (all, curr) => ({
        ...all,
        [curr.type.toUpperCase()]: baseReducers[curr.prefix](defaultState),
      }),
      {}
    );
}
