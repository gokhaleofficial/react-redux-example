import React from "react";

const Name = () => {
  const [name, setName] = React.useState("Sandeep");

  return (
    <>
      {name}
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default Name;
