import { createStore, createEvent } from "effector";

export const changeCount = createEvent<number>("changeCount");

export const $count = createStore<number | null>(null).on(changeCount, (_, payload) => {
  return payload;
});
