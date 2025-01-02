import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../model/model";
import { users } from "../../../consts";

interface IStateUsers {
  users: IUser[];
  idClickedUser: number | null;
}

const initialState: IStateUsers = {
  idClickedUser: null,
  users: users
};

const userSlice = createSlice({
  initialState,
  name: "UserReducer",
  reducers: {
    addUser: (state, { payload }: PayloadAction<IUser>) => {
      state.users = [...state.users, payload];
      localStorage.setItem("users", JSON.stringify([...state.users]));
    },
    updateUser: (state, { payload }: PayloadAction<IUser>) => {
      state.users = state.users.map((el) => (el.id === payload.id ? payload : el));
      localStorage.setItem("users", JSON.stringify([...state.users]));
    },
    deleteUser: (state, { payload }: PayloadAction<number>) => {
      state.users = state.users.filter((el) => el.id !== payload);
      localStorage.setItem("users", JSON.stringify([...state.users]));
    },
    changeIdClickedUser: (state, { payload }: PayloadAction<number | null>) => {
      state.idClickedUser = payload;
    }
  }
});

export const { addUser, updateUser, deleteUser, changeIdClickedUser } = userSlice.actions;
export default userSlice;
