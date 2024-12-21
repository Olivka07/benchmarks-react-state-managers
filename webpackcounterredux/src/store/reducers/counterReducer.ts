import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICounterState {
    value: number
}

const initialState: ICounterState= {
    value: 0
}

const counterSlice = createSlice({
    initialState,
    name: 'CounterReducer',
    reducers: {
        changeCounter: (state, {payload}: PayloadAction<number> ) => {
            state.value += payload
        }
    }
})


export const {changeCounter} = counterSlice.actions
export default counterSlice.reducer

