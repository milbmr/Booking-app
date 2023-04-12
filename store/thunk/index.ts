import { AnyAction, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "..";
import { hotelActions } from "../slices/hotels-slice";
import { MongoClient } from "mongodb";

export const getHotelList = (): AppThunk => {
  return async (dispatch) => {
    const req = await fetch("api/hotels");
    const res = await req.json();
    const data = await res;

    dispatch(hotelActions.getData(data.hotels));
  };
};

export const fetchHotels = createAsyncThunk("hotes/fetch", async (clientP: Promise<MongoClient>) => {
  const client = await clientP;
  const db = client.db();

  const result = await db.collection("hotels").find({}).limit(20).toArray();
  const parsedResult = JSON.parse(JSON.stringify(result));

  return parsedResult;
});
