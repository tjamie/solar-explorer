import { configureStore } from '@reduxjs/toolkit/';
import { celestialsReducer } from '../features/celestials/celestialsSlice';


export const store = configureStore({
    reducer: {
        celestials: celestialsReducer
    }
});