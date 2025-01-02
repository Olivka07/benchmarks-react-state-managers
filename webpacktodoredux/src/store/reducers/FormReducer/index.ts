import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SubscriptionType } from "../../../model/model";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface IStateForm {
  name: string;
  age: number | null;
  sub: SubscriptionType;
  employed: boolean;
}

const initialState: IStateForm = {
  name: "",
  age: null,
  sub: SubscriptionType.Subscribed,
  employed: false
};

const formSlice = createSlice({
  initialState,
  name: "FormReducer",
  reducers: {
    changeName: (state, { payload }: PayloadAction<React.ChangeEvent<HTMLInputElement> | string>) => {
      if (typeof payload === "string") {
        state.name = payload;
      } else {
        state.name = payload.target.value;
      }
    },
    changeAge: (state, { payload }: PayloadAction<React.ChangeEvent<HTMLInputElement> | number | null>) => {
      if (typeof payload === "number" || payload === null) {
        state.age = Number(payload);
      } else {
        state.age = Number(payload.target.value);
      }
    },
    changeSub: (state, { payload }: PayloadAction<SubscriptionType>) => {
      state.sub = payload;
    },
    changeEmployment: (state, { payload }: PayloadAction<CheckboxChangeEvent | boolean>) => {
      if (typeof payload === "boolean") {
        state.employed = payload;
      } else {
        state.employed = payload.target.checked;
      }
    },
    resetValues: (state) => {
      state.name = "";
      state.age = null;
      state.employed = false;
      state.sub = SubscriptionType.Subscribed;
    }
  }
});

export const { changeAge, changeEmployment, changeName, changeSub, resetValues } = formSlice.actions;
export default formSlice;
