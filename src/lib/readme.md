# State To Redux

## Example use

Declare the resources you'd like in your state map, and their default values.

```js
const ui = {
  auth: {
    token: localStorage.getItem("getItem"),
    isAuthenicated: null,
    loading: true,
    user: null,
  },
  scrollState: {
    x: 0,
    y: 0,
  },
};
```

generate reducers and actions

```js
const { reducers, actions } = fromStateMap(ui);
```

use them in your code

```js
export const store = createStore(reducers, composeEnhancer(middleware));
---

actions.userhistory.set({...})
actions.userhistory.update({...})
actions.category.set({...})
actions.category.update({...})
...

```

## Why

If you're familiar with redux, you might start a project by creating
action creators for every dataStore update that you'd like to perform.

```js
setBook = (payload)=>{type:`SET_BOOK`: payload}
updateBook = (payload)=>{type:`UPDATE_BOOK`: payload}
setBookCategory = (payload)=>{type:`SET_BOOK_CATEGORY`: payload}
```

Then, you would write a reducer for each resource that needs to be updated.

```js

bookReducer = (state, action)=>{
  const handlers= {
    SET_BOOK: (state, payload)=>(payload),
    UPDATE_BOOK: (state, payload)=>({...state, ...payload}),
    SET_BOOK_CATEGORY: (state, payload)=>{...state, category:payload}
  }
  return handlers[action.type]?.(payload) ?? state;
}
```

Each reducer has to be imported in the store, and all of your actions must
be imported into their different files. You have to decide if you should you put them all in the same
file, or allocate them with the components that use them. After you've decided all that,
you have to write several actions for each reducer, and a reducer for each resource.
This is tedious and error prone.

This library is meant to simplify all that.

# Design

If you know remember Model-View-Controller, it sort of looks like this:

```
Model:
  Data:
    database (redux store)
    data access (reducers)
  Service:
    service (actions)
    business logic (thunks/selectors)
Controller:
  controllers (container components/connect)
View:
  view (presentational components)
```

StateToRedux handles the database, data access, and service components of the stack declaratively.

## Single responsibility

Data access and service become very simple in this model. They communicate with a vocabulary of `<verb>_<resource>`.
`<Verb>` always does the same thing, given the resource type.

All the business logic goes to the higher layers.

```js
const reducers = {
  set: (state = defaultState, action) => action.payload;
  update: (state = defaultState, action) => ({...state, ...action.payload});
};
```

# API

An (un-nested) RESTful API is basically a list of (resource, method,
data?)=>Response functions. We know before runtime what the resources and
methods will be, and we don't know the data, so you could create a list of
triplets: [resource, method, (data?)=>Response].

To creat all the triplets, you'd get the (method, resource) part from the
crossProduct of the methods and resources available on the api:

- methods: [get, post, patch, delete]
- resources: [books, categories, ...etc].
- crossProduct = [[get, books], [get, categories], [post, books]...etc]

You would then pass those as arguments into a request factory, which generates
the programmer facing function that takes the data.

Finally, to make all these functions easier to use, you'd plop 'em into an
object. I used a trie for this conversion.
