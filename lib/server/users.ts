import clientPromise from "lib/database";
import { hashPassword } from "lib/helpers";
import { getSession, GetSessionParams } from "next-auth/react";
import { ObjectId } from "mongodb";
import { User, FetchedUser } from "types";
import { User as nextAuthUser, Account } from "next-auth/core/types";
import { object } from "zod";

export const registerUser = async (newUser: User) => {
  const { email, password, name, userName } = newUser;

  const client = await clientPromise;
  const db = client.db();

  const _user = await db.collection("users").findOne({ email });

  if (_user) return { message: `User with email ${email} already exist` };

  const _user1 = await db.collection("users").findOne({ userName });

  if (_user1) return { message: `UserName: ${userName} is already taken` };

  const hashedPassword = await hashPassword(password);

  await db
    .collection("users")
    .insertOne({ ...newUser, password: hashedPassword });

  return { email, name, userName };
};

export const getUser = async (email: string) => {
  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ email: email });

  if (!user) throw new Error("Not exist");

  return {
    email: user.email,
    name: user.name,
    userName: user.userName,
    id: user._id.toString(),
  };
};

export const getIsAuthUser = async (params: GetSessionParams) => {
  const session = await getSession(params);
  const email = session?.user?.email;

  if (!email) return null;

  const user = await getUser(email);

  return user;
};

type updatedUser = {
  id: string;
} & User;

export const updateUser = async (updatedUser: updatedUser) => {
  const { id, email, userName, password } = updatedUser;
  const client = await clientPromise;
  const db = client.db();

  const result = await db
    .collection("users")
    .findOne({ _id: new ObjectId(id) });

  if (!result) throw new Error("user not exist");

  if (userName && userName !== result.userName) {
    const _user = await db.collection("users").findOne({ userName });
    if (_user) throw new Error("username is taken");
  }

  const userUpdate = {
    ...(email && { email }),
    ...(userName && { userName }),
    ...(password && { password: await hashPassword(password) }),
  };

  await db
    .collection("users")
    .updateOne({ _id: new ObjectId(id) }, { $set: { ...userUpdate } });

  return { message: "user updated" };
};

export const presistUser = async (user: nextAuthUser, account: Account) => {
  const client = await clientPromise;
  const db = client.db();

  let userName = user.name?.substring(0, 6);
  let email = user.email;

  if (!userName && email) {
    userName = email.split("@")[0];
  }

  if (!email && userName) {
    email = `${userName}@non_provided`;
  }

  if (!email && !userName) throw new Error("no data privided");

  const data = {
    provider: account.provider,
    id: user.id,
    userName,
    email,
    name: userName,
  };

  await db
    .collection("users")
    .insertOne({ ...data, _id: data.id as unknown as ObjectId });

  return { ...data, id: data.id };
};
