import App from "./App";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterProvider from "./context/CounterContext";

describe("Component: App", () => {
  it("should render correctly", () => {
    const expectTestId = "counter";

    render(<App />);

    expect(screen.getByTestId(expectTestId)).toBeInTheDocument();
  });

  it("should equal counter 1 after clicking on the Inc Button", async () => {
    const counterTestId = "counter";
    const incButtonTestId = "incButton";

    render(
      <CounterProvider>
        <App />
      </CounterProvider>
    );

    await userEvent.click(screen.getByTestId(incButtonTestId));

    expect(screen.getByTestId(counterTestId)).toHaveTextContent("1");
  });
});
