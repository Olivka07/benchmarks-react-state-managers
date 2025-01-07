import React from "react";
import { useCounterContext } from "./context/CounterContext";

function App() {
  const { changeCounter, counter } = useCounterContext();
  console.log("as");
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>{counter}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "104px"
          }}
        >
          <button style={{ padding: "5px" }} onClick={() => changeCounter(1)}>
            Inc
          </button>
          <button style={{ padding: "5px" }} onClick={() => changeCounter(-1)}>
            Dec
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
