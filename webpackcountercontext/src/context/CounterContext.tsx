import {
  PropsWithChildren,
  createContext,
  useContext,
  FC,
  useState,
} from "react";

interface ICounterContext {
  counter: number;
  changeCounter: (value: number) => void;
}

const CounterContext = createContext<ICounterContext>({
  counter: 0,
  changeCounter: () => {},
});

export const useCounterContext = () => useContext(CounterContext);

const CounterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const changeCounter = (value: number) => {
    setCounter((prev) => prev + value);
  };
  return (
    <CounterContext.Provider
      value={{
        counter,
        changeCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
