import { createEvent, createStore } from "effector";

export const changeCounter = createEvent<number>('Change Counter')

export const $counter = createStore(0)
    .on(changeCounter, (state, payload) => state + payload)

    