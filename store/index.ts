import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { Action, AnyAction, combineReducers } from "redux";
import hotelSlice from "./slices/hotels-slice";
import { api } from "./slices/api-slice";

const reducers = {
  [hotelSlice.name]: hotelSlice.reducer,
  [api.reducerPath]: api.reducer,
};

export const store = () =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: false,
        immutableCheck: false,
      }).concat(api.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(store);
