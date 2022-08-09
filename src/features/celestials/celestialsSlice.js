import { createSlice } from '@reduxjs/toolkit';
import { CELESTIALS } from "../../app/shared/CELESTIALS";

const initialState = {
    celestialsArray: CELESTIALS
}

const celestialsSlice = createSlice({
    name: 'celestials',
    initialState
    // reducers: {}
});

export const celestialsReducer = celestialsSlice.reducer;

export const selectAllCelestials = (state) => {
    return state.celestials.celestialsArray;
};

export const selectCelestialById = (id) => (state) => {
    return state.celestials.celestialsArray.find((celestial) => celestial.id === parseInt(id));
};

// export const selectCelestialByType = (type) => (state) => {
//     return state.celestials.celestialsArray.filter((celestial) => celestial.type === type);
// }

export const selectCelestialByType = (type) => (state) => {
    return (
        type == 'all'
            ? state.celestials.celestialsArray
            : state.celestials.celestialsArray.filter((celestial) => celestial.type == type)
    )
}