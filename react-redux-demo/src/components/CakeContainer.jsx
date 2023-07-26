import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
// import { mapDispatchToProps, mapStateToProps } from "./mapToProps";

function CakeContainer(props) {
  //   const dispatch = useDispatch();
  //   const data = useSelector((state) => state);
  //   console.log(data);
  return (
    <div>
      <h2>Number of cakes</h2>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      {/* <button onClick={() => dispatch(buyCake())}>Buy Cake</button> */}
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes + 1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
