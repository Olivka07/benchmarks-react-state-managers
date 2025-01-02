import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import themeSlice from "./reducers/ThemeReducer";
import userSlice from "./reducers/UserReducer";
import formSlice from "./reducers/FormReducer";
import modalSlice from "./reducers/ModalReducer";

const root = combineReducers({
  themeReducer: themeSlice.reducer,
  usersReducer: userSlice.reducer,
  formReducer: formSlice.reducer,
  modalReducer: modalSlice.reducer
});

export const store = configureStore({
  reducer: root
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
