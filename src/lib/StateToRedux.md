StateToRedux.md

an example base redux flow:

create a constants file for all the redux types.

```js
export const SET_BOOK = `SET_BOOK`;
export const UPDATE_BOOK = `UPDATE_BOOK`;
export const SET_BOOK_CATEGORY = `SET_BOOK_CATEGORY`;
```

etc.

then, for each type, write an action creator for it

```js
setBook = (payload)=>{type:`SET_BOOK`: payload}
updateBook = (payload)=>{type:`UPDATE_BOOK`: payload}
setBookCategory = (payload)=>{type:`SET_BOOK_CATEGORY`: payload}
```

finally, write a reducer for each call

```js

bookReducer = (state, action)=>{
  const handlers= {
    SET_BOOK: (state, payload)=>(payload),
    UPDATE_BOOK: (state, payload)=>({...state, ...payload}),
    SET_BOOK_CATEGORY: (state, payload)=>{...state, category:payload}
  }
  return handlers[action.type](payload)
}
```

to make it easier to remember all the different names, you have to create a
convention like the one I used (verb_resource), or `resource/attribute/verb`.
And in general, each time you write a triplet like this, you have to jump around
a bunch of different files.

Your book reducer has to be imported in the store, and all of your actions must
be imported into their different files. Should you put them all in the same
file? Should you allocate them with the components that use them?

This isn't too bad with 2 or three resources, but it becomes a headache with 10.

And the worst part is that you're well aware of just how repetitive your code is.
With this in mind, I tried to write something a bit easier to use. It's based on a few rules down below.

# Idea #0: handle API results in your redux store as a database

First, redux devs tell us to you flatten your data structures, so we can avoid the nightmare of updating a nested data structure. Then, index your lists of objects by
id. That way, they'll work like a table in a database. Redux is now an object of
objects indexed by id. `<Record>{[tableName]:{[id]:Record}}`.

# Idea #1 : make conventions concrete

Reducers are complicated to work with. To simplify them, make them generic and
push your business logic a layer higher. I found that `set` and `update` type
reducers provided all the functionality needed by the layer above.

```js
const reducers = {
  set: (state = defaultState, action) => action.payload;
  update: (state = defaultState, action) => ({...state, ...action.payload});
};
```

For example,
`set_book_category(123, "green")` could also be `update_book({id:123, category:"green"})`.

Where will you put your logic? In thunks. For example, `IncrementCounter(3)` becomes
`const IncrementCounter = ()=>(dispatch, getState)=>dispatch(setNumber(getState().number+1)`

# Why

Well, now you can generate the interface to redux, instead of painfully write it by hand.
Just give me a an object of resourceName: defaultValue mappings, and I'll give you a fully
functioning redux store with reasonable defaults.

Theres an analogy here to the layers in a java spring application:

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

Redux handles the CUD of CRUD, and the storage. StateToRedux automates the database, data access, and service components of the stack.

<!-- # Examples -->

<!-- ```js
export const {actions, reducers }= fromStateMap({book:{}, category:{}, userHistory:{}})

``` -->

---

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
