import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { Routes } from "lib/client";
import {
  FetchedDataType,
  HotelDataType,
  User,
  UpdatedUserData,
  city,
} from "types";

export const api = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: Routes.API.BASEURL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getHotel: builder.query<HotelDataType[], number | void>({
      query: (batch = 1) => {
        return {
          url: Routes.API.HOTELS,
          params: { batch: batch },
          method: "GET",
        };
      },
    }),
    getFacility: builder.query<FetchedDataType, void>({
      query: () => Routes.API.FACILITIES,
    }),
    createUser: builder.mutation<void, User>({
      query: (user) => {
        return {
          url: Routes.API.USERS,
          method: "POST",
          body: {
            email: user.email,
            password: user.password,
            name: user.name,
            userName: user.userName,
          },
        };
      },
    }),
    getUser: builder.query<User, string>({
      query: (id) => {
        return { url: Routes.API.USERS, params: { userId: id }, method: "GET" };
      },
    }),
    updateUser: builder.mutation<void, UpdatedUserData>({
      query: (updatedData) => {
        return {
          url: Routes.API.USERS,
          method: "PATCH",
          body: {
            ...updatedData,
          },
        };
      },
    }),
    getSearchCities: builder.query<city[], void>({
      query: () => {
        return {
          url: Routes.API.SEARCH,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetHotelQuery,
  useGetFacilityQuery,
  useLazyGetUserQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useGetSearchCitiesQuery,
  util: { getRunningQueriesThunk },
} = api;
export const { getHotel, getFacility } = api.endpoints;
