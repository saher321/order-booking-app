import React, { useState } from "react";

function Navbar() {
  const [val, setVal] = useState(true);

  let vals = "d";
  console.log(vals, val);
  
  const inc = () => {
    setVal(!val);
  };

  return (
    <div>
      <h1>{`${val}`}</h1>
      <button onClick={inc} style={{ background: "black", color: "white" }}>
        INCREMENT
      </button>
    </div>
  );
}

export default Navbar;
