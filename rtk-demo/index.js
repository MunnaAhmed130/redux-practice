const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const { fetchUsers } = require("./features/user/userSlice");
const icecreamActions =
  require("./features/icecream/iceCreamSlice").icecreamActions;

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// unsubscribe();
