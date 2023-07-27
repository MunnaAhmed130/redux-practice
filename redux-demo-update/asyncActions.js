const axios = require("axios");
const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
// STATE
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// ACTIONTYPES
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// ACTION CREATORS RETURN ACTION
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    //   return produce(state, (draft) => {
    //     draft.loading = true;
    //   });
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    //   return produce(state, (draft) => {
    //     (draft.loading = false), (draft.users = action.payload);
    //   });
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
