import { useCounterContext } from "./context/CounterContext";

function App() {
  const { changeCounter, counter } = useCounterContext();

  const increment = () => changeCounter(1);
  const decrement = () => changeCounter(-1);

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
        <h1 data-testid="counter" style={{ textAlign: "center" }}>
          Counter:{counter}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <button data-testid="incButton" style={{ padding: "5px" }} onClick={increment}>
            Increment
          </button>
          <button style={{ padding: "5px" }} onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
