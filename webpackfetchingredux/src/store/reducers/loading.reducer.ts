import { createSlice } from '@reduxjs/toolkit'
import { fetchPhotosByCount } from './photo.reducer'

interface ILoadingState {
    loading: boolean
}

const initialState: ILoadingState = {
    loading: false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPhotosByCount.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPhotosByCount.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(fetchPhotosByCount.rejected, (state) => {
            state.loading = false
        })
    }
})

export default loadingSlice.reducer