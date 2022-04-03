import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(100);

  return (
    <>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button
        style={{ margin: "10px" }}
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
