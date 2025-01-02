import { combine, createEvent, createStore } from "effector";
import { users } from "../../consts/index";
import { IUser } from "../../model/model";

export const addUser = createEvent<IUser>("Add new user");
export const updateUser = createEvent<IUser>("Update user");
export const deleteUser = createEvent<number>("Delete user");

const $usersApp = createStore<IUser[]>(users)
  .on(addUser, (state, payload) => {
    localStorage.setItem("users", JSON.stringify([...state, payload]));
    return [...state, payload];
  })
  .on(updateUser, (state, payload) => {
    localStorage.setItem("users", JSON.stringify(state.map((el) => (el.id === payload.id ? payload : el))));
    return state.map((el) => (el.id === payload.id ? payload : el));
  })
  .on(deleteUser, (state, payload) => {
    localStorage.setItem("users", JSON.stringify(state.filter((el) => el.id !== payload)));
    return state.filter((el) => el.id !== payload);
  });

export const changeIdClickedUser = createEvent<number | null>("Change id clicked user");
const $idClickedUser = createStore<number | null>(null).on(changeIdClickedUser, (_, payload) => payload);

export const $userStore = combine($idClickedUser, $usersApp);
