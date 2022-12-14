import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { hotelActions } from "./hotels-slice";

export const getHotelList = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    const fetchData = async () => {
      const req = await fetch("api/hotels");
      const res = await req.json();
      const data = await res;
      return data;
    };

    type d = Awaited<ReturnType<typeof fetchData>>;

    const data: d = fetchData();

    dispatch(hotelActions.getData(data.hotels));
  };
};
