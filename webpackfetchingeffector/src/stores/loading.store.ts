import { createStore } from "effector";
import { fetchPhotosByCount } from "./photos.store";

export const $loading = createStore<boolean>(false).on(fetchPhotosByCount.pending, (_, payload) => {
  return payload;
});
