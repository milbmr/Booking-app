import { NextApiRequest, NextApiResponse } from "next";
import connect from "next-connect";

export const apiHandler = () => {
  return connect<NextApiRequest, NextApiResponse>();
};
