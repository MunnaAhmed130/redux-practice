import { buyCake } from "../redux/cake/cakeActions";

export const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
