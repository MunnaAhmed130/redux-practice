import { BUY_CAKE } from "./cakeTypes";

// actionCreator returning action
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
