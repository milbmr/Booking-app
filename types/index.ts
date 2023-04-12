import { ObjectId } from "mongodb";
import { NextApiRequest } from "next";
import { IconType } from "react-icons";

export type FacilityType = {
  facilityCode: number;
  facilityGroupCode: number;
};

export type HotelFacilityType = {
  code: number;
  facilityGroupCode: number;
  description: { content: string };
};

export type FacilityGroupeType = {
  code: number;
  description: { content: string };
};

export type CountryType = {
  code: string;
  description: { content: string };
  states: { code: string; name: string }[];
};

export type FetchedDataType = {
  allFacilities: HotelFacilityType[];
  facilityGroupe: FacilityGroupeType[];
  countriesCode: CountryType[];
};

export type ImageType = {
  path: string;
};

export interface HotelTypes<T> {
  hotels: T[];
}

export type HotelDataType = {
  _id: string;
  name: { content: string };
  facilities: FacilityType[];
  description: { content: string };
  countryCode: string;
  stateCode: string;
  city: { content: string };
  images: ImageType[];
  address: { content: string };
  categoryGroupCode: string;
  coordinates: { longitude: number; latitude: number };
};

export type amenityDataType = {
  name: string;
  icon: IconType;
};

export type amenityReturnType = {
  name: string;
  icon: IconType;
};

export type User = {
  email: string;
  password: string;
  name?: string;
  userName?: string;
};

export type FetchedUser = {
  id: string;
} & Omit<User, "password">;

export type QueryParamsType = {
  [key: string]: string | string[] | undefined;
};

export type UpdatedUserData = Partial<Omit<User, "name">>;

export type UpdatedUserDataKeys = keyof UpdatedUserData;

/* export interface UpdatedUser extends UpdatedUserData {
  id: ObjectId
} */

export interface NextExtendedRequest extends NextApiRequest {
  user: FetchedUser;
}

export type city = {
  _id: ObjectId;
  code: number;
  city: string;
  country: string;
  region: string;
  countryCode: string;
  lat: number;
  lng: number;
}
