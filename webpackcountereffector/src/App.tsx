import { useStore } from "effector-react";
import { $counter, changeCounter } from "./store";

function App() {
  const counter = useStore($counter);

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Counter:{counter}</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={{ padding: "5px" }} onClick={() => changeCounter(1)}>
            Increment
          </button>
          <button style={{ padding: "5px" }} onClick={() => changeCounter(-1)}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
