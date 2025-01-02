import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { IPhoto } from "../../model";
import axios from "axios";

interface ILoadingContext {
  loading: boolean;
  changeLoading: (key: boolean) => void;
}

const initialValue: ILoadingContext = {
  loading: false,
  changeLoading: () => {}
};

const LoadingContext = createContext(initialValue);
export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const changeLoading = (key: boolean) => {
    setLoading(key);
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        changeLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
