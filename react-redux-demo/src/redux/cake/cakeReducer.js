import { BUY_CAKE } from "./cakeTypes";

const intialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numOfCakes > 0) {
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1,
        };
      } else {
        return state;
      }
    //   break;
    default:
      return state;
  }
};

export default cakeReducer;
