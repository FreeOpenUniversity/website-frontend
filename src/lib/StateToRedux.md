StateToRedux.md

# Rule #0: handle API results in your redux store as a database

First, you flatten your data structures, like the redux devs say. That's because updating nested structures is a nightmare.
Then, index your lists of objects by id. That way, they'll work like a table in a database.
Redux is now an object of objects indexed by id. `<Record>{[tableName]:{[id]:Record}}`.

reducers are complicated to work with. To simplify them, make them generic and push your business logic a layer higher. I found that `set` and `update` type reducers provided all the functionality needed by the layer above.

```js
const reducers = {
  set: (state = defaultState, action) => action.payload;
  update: (state = defaultState, action) => ({...state, ...action.payload});
};
```

where will you put your logic? In thunks. For example, Increment becomes
`const Increment = ()=>(dispatch, getState)=>dispatch(setNumber(getState().number+1)`

# Why

What you'll have created is akin to layers in a java spring application:

```
-- Model
  --- Data
  database (redux),
  data access (reducers),
  --- Service
  service (actions)
  business logic (thunks),
--- Controller
controllers (container components/connect)
--- View
view (presentational components)
```

(Notice the model, view, controller, pattern hiding in there)

With the above rules, you can generate the data and service layers (except thunks) from a given set of API endpoints.
