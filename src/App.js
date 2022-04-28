import "./App.css";
import React, { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <header>
        <i class="fa-solid fa-calculator  fa-4x "></i>
        <h1>React Counter</h1>
      </header>
      <main>
        <div className="containerReset">
          <div className="containerButton">
            {counter > 0 ? (
              <Decrement value={counter} decrement={setCounter} />
            ) : (
              <button></button>
            )}

            <p>{counter}</p>

            {counter < 10 ? (
              <Increment value={counter} increment={setCounter} />
            ) : (
              <button></button>
            )}
          </div>
          <div className="buttonResetColor">
            <Reset value={counter} reset={setCounter} />
          </div>
        </div>
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by
          <span>Denis</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
