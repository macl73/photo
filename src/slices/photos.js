import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        value: []
    },
    reducers: {
        photos(state, action) {
            state.value = [...state.value, action.payload];
        }
    }
});


export const { photos } = photosSlice.actions;
export default photosSlice.reducer;