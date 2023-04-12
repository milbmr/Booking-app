import { hash, compare } from "bcryptjs";
import sjcl from "sjcl";

const apiKey = process.env.API_KEY!;
const apiSecret = process.env.API_SECRET!;
const apiUrlHotels = process.env.API_URL_HOTELS!;

export const hashFn = () => {
  const sec = Math.round(Date.now() / 1000) + "";
  const myString = apiKey + apiSecret + sec;
  const bitArr = sjcl.hash.sha256.hash(myString);
  const hash = sjcl.codec.hex.fromBits(bitArr);

  return hash;
};

export const getHotel = async (url: string) => {
  const hash = hashFn();

  const headers = {
    Accept: "application/json",
    "Api-key": apiKey,
    "X-Signature": hash,
    httpVersion: "HTTP/2.1",
  };

  const result = await fetch(url, { headers });
  const parsedResult = result.json();

  return parsedResult;
};

export const randomPrice = (num: number) => {
  const numfloat = Math.abs(num) - Math.floor(Math.abs(num));
  const min = Math.ceil(70);
  const max = Math.floor(230);
  return Math.floor(numfloat * (max - min + 1)) + min;
};

export const randomRating = (num: number) => {
  const numfloat = Math.abs(num) - Math.floor(Math.abs(num));
  const rating = Math.round((numfloat * 5 + 5) * 10) / 10;

  let comment;
  let color;
  if (rating >= 5) {
    comment = "Low";
    color = "#c92a2a";
  }
  if (rating >= 6) {
    comment = "Good";
    color = "#f76707";
  }
  if (rating >= 8) {
    comment = "Excellent";
    color = "#2f9e44";
  }

  return { comment, color, rating };
};

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  const comparedPassword = await compare(password, hashedPassword);

  return comparedPassword;
};

export const getUserNameLetter = (userName: string | undefined) => {
  const letter = userName && userName[0].toUpperCase();

  return letter;
};
