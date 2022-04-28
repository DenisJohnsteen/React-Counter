import React, { useState } from "react";

function Decrement(props) {
  return (
    <button
      onClick={() => {
        props.decrement(props.value - 1);
      }}
    >
      -
    </button>
  );
}

export default Decrement;
