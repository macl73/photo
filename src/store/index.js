import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../slices/photos.js';

const store = configureStore({
    reducer: {
        photos: photosReducer
    }
});

export default store;
