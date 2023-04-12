import { getIsAuthUser } from "./users";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";
import { NextExtendedRequest } from "types";

export const requireAuth = async (
  req: NextExtendedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const me = await getIsAuthUser({ req });

  if (!me) return new Error("not authorized");

  req.user = me;

  next();
};
