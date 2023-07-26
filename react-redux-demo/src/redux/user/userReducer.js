import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const intialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        users: [],
        loading: false,
        error: action.paylaod,
      };
    default:
      return state;
  }
};

export default userReducer;
