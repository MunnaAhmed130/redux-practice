import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        {props.cake ? "cakes" : "ice Cream"} - {props.item}
      </h2>
      <button onClick={props.buyItem}>
        Buy {props.cake ? "cakes" : "ice Cream"}
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProp) => {
  const itemState = ownProp.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
