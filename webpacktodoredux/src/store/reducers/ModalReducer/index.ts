import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../model/model";

interface IStateModal {
    modal: boolean
    candidate: IUser
}

const initialState: IStateModal = {
    modal: false,
    candidate: {} as IUser
} 

const modalSlice = createSlice({
    initialState: initialState,
    name: 'Modal Reducer',
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal
        },
        changeCandidate: (state, {payload}: PayloadAction<IUser>) => {
            state.candidate = payload
        }
    }
})

export const {changeModal, changeCandidate} = modalSlice.actions
export default modalSlice