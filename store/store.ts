import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "./hotels-slice";

const store = configureStore({
    reducer: { hotels: hotelSlice }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;