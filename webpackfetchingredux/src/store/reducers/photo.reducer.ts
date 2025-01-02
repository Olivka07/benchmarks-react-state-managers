import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../model";
import axios from "axios";

interface IPhotoState {
  photos: IPhoto[];
  count: number | null;
}

const initialState: IPhotoState = {
  photos: [],
  count: null
};

export const fetchPhotosByCount = createAsyncThunk("photo/fetchPhotosByCount", async (count: number | null) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${count === null ? 0 : count}`);
  return data;
});

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    changeCount: (state, { payload }: PayloadAction<number>) => {
      state.count = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosByCount.fulfilled, (state, { payload }: PayloadAction<IPhoto[]>) => {
      state.photos = [...payload];
    });
    builder.addCase(fetchPhotosByCount.rejected, (state) => {
      state.photos = [];
      console.error("Произошла ошибка.");
    });
  }
});

export default photoSlice.reducer;
export const { changeCount } = photoSlice.actions;
