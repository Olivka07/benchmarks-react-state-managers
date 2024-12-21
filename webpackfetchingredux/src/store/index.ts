import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import photoReducer from './reducers/photo.reducer';
import loadingReducer from './reducers/loading.reducer';

const rootReducer = combineReducers({
    photoReducer,
    loadingReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch