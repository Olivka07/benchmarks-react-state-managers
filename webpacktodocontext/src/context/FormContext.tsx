import React, { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { SubscriptionType } from "../model/model";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type FunctionTypeInputChange = (e: React.ChangeEvent<HTMLInputElement> | string) => void;
type FunctionTypeSelectChange = (e: SubscriptionType) => void;

const noop = (e: React.ChangeEvent<HTMLInputElement> | SubscriptionType | CheckboxChangeEvent | number | null | string | boolean) => {};

interface FormContextProps {
  name: string;
  age: number;
  sub: SubscriptionType;
  employed: boolean;
  changeName: FunctionTypeInputChange;
  changeAge: (e: number | null) => void;
  changeSub: FunctionTypeSelectChange;
  changeEmployed: (e: CheckboxChangeEvent | boolean) => void;
}
export const FormContext = createContext<FormContextProps>({
  name: "",
  age: 18,
  employed: false,
  sub: SubscriptionType.Subscribed,
  changeName: noop,
  changeAge: noop,
  changeSub: noop,
  changeEmployed: noop
});

export const useFormContext = () => useContext(FormContext);

const FormProvider: FC<PropsWithChildren> = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(18);
  const [sub, setSub] = useState<SubscriptionType>(SubscriptionType.Subscribed);
  const [employed, setEmployed] = useState<boolean>(false);

  const changeName = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e !== "string") {
      setName(e.target.value);
    } else {
      setName(e);
    }
  };

  const changeAge = (e: number | null) => {
    if (e !== null) {
      setAge(e);
    }
  };

  const changeSub = (e: SubscriptionType) => {
    setSub(e);
  };

  const changeEmployed = (e: CheckboxChangeEvent | boolean) => {
    if (typeof e !== "boolean") {
      setEmployed(e.target.checked);
    } else {
      setEmployed(e);
    }
  };

  return (
    <FormContext.Provider
      value={{
        age,
        name,
        employed,
        sub,
        changeAge,
        changeName,
        changeEmployed,
        changeSub
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
