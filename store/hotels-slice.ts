import { createSlice } from "@reduxjs/toolkit";

const initialHotels = {
    hotels: []
};

const hotelSlice = createSlice({
    name: 'hotels',
    initialState: initialHotels,
    reducers: {
        getData(state, action) {
            state.hotels = action.payload;
        },
    }
});

export const hotelActions = hotelSlice.actions;

export default hotelSlice.reducer;