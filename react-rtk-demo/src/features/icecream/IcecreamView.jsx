import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice creams</button>
      <input
        type="number"
        name=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        id=""
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};

export default IcecreamView;
