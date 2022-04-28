import React, { useState } from "react";

function Increment(props) {
  return (
    <button
      onClick={() => {
        props.increment(props.value + 1);
      }}
    >
      +
    </button>
  );
}

export default Increment;
