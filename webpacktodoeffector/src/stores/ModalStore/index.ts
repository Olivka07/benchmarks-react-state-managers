import { combine, createEvent, createStore } from "effector";
import { IUser } from "../../model/model";

export const changeModal = createEvent('Change visibility modal')
export const $modal = createStore(false)
    .on(changeModal, (state) => !state)


export const changeCandidate = createEvent<IUser>('Change candidate in modal store')
export const $candidate = createStore({} as IUser)
    .on(changeCandidate, (state, payload) => payload)

    