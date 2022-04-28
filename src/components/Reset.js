import React, { useState } from "react";

function Reset(props) {
  return (
    <button
      onClick={() => {
        props.value(props.reset(0));
      }}
    >
      Reset
    </button>
  );
}

export default Reset;
