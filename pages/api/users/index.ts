import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "lib/server/nc";
import { withValidation } from "next-validations";
import {
  createUserSchema,
  getUserSchema,
  validateUserQuery,
  userUpdateSchema,
} from "lib/server/validation";
import { registerUser, getUser, updateUser } from "lib/server/users";
import { requireAuth } from "lib/server/middleware";
import { NextExtendedRequest } from "types";

const handler = apiHandler();

const validateUserUpdateData = withValidation({
  schema: userUpdateSchema,
  type: "Zod",
  mode: "body",
});

const validateUserRegister = withValidation({
  schema: createUserSchema,
  type: "Zod",
  mode: "body",
});

const validateUserGet = withValidation({
  schema: getUserSchema,
  type: "Zod",
  mode: "query",
});

handler.post(
  validateUserRegister(),
  async (req: NextApiRequest, res: NextApiResponse) => {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  }
);

handler.get(
  validateUserGet(),
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { userId } = validateUserQuery(req.query);
    const user = await getUser(userId);
    res.status(201).json(user);
  }
);

handler.patch(
  requireAuth,
  validateUserUpdateData(),
  async (req: NextExtendedRequest, res: NextApiResponse) => {
    const updatedUser = { ...req.body, id: req.user.id };
    const result = await updateUser(updatedUser);
    res.status(201).json(result);
  }
);

export default handler;
