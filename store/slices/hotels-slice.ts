import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { fetchHotels } from "../thunk";
import { HotelDataType } from "types";

const initialHotels: { hotels: HotelDataType[]; imageIndex: number } = {
  hotels: [],
  imageIndex: 0,
};

const hotelSlice = createSlice({
  name: "hotelsPage",
  initialState: initialHotels,
  reducers: {
    getData: (state, action) => {
      state.hotels = [...state.hotels, ...action.payload];
    },
    getImageIndex: (state, action) => {
      state.imageIndex = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      console.log(action)
      state.hotels = [...state.hotels, ...action.payload];
    })
  }
});

export const hotelActions = hotelSlice.actions;

export default hotelSlice;
