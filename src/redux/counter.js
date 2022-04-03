import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counter-slice";

const Counter = () => {
  // const [counter, setCounter] = React.useState(100);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });

  return (
    <>
      {counter}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button style={{ margin: "10px" }} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
