import { mapValues, toPairs } from "lodash";

function reduceReducers(reducers) {
  return (previous, current) =>
    reducers.reduce((p, r) => r(p, current), previous);
}

export const listOfReducersToReducer = (reducers) => {
  const flattened = reducers
    .map((reducerObj) => toPairs(reducerObj))
    .reduce((acc, array) => [...acc, ...array]);

  const grouped = flattened.reduce((acc, pair) => {
    const key = pair[0];
    const val = pair[1];
    let array = (acc[key] && [...acc[key]]) || [];
    acc[key] = [...array, val];
    return acc;
  }, {});

  return mapValues(grouped, (val) => reduceReducers(val));
};
