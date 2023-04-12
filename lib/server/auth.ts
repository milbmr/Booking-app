import { userLoginSchema } from "./validation";
import clientPromise from "lib/database";
import { verifyPassword } from "lib/helpers";

export const userLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const isValidInput = userLoginSchema.safeParse({ email, password });

  if (!isValidInput.success) return null;

  const client = await clientPromise;
  const user = await client.db().collection("users").findOne({ email });

  if (!user) return null;

  const isValid = await verifyPassword(password, user.password);

  if (!isValid) return null;

  return { email: user.email, id: user._id };
};
