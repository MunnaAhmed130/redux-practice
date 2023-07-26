import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./mapToProps";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
