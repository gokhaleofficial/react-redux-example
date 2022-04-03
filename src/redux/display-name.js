import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../counter-slice";

const Name = () => {
  // const [name, setName] = React.useState("Sandeep");
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  return (
    <>
      {name}
      <input value={name} onChange={(e) => dispatch(setName(e.target.value))} />
    </>
  );
};

export default Name;
