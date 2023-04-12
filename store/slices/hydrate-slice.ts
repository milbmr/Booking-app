import { bindActionCreators, createReducer, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const hydrateSlice = createSlice({
  name: "hydrate",
  initialState: {},
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
