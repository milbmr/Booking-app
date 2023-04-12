import { z } from "zod";
import { QueryParamsType } from "types";

const passwordMin = 6,
  passwordMax = 20,
  userNameMin = 3,
  userNameMax = 15;

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(passwordMin).max(passwordMax),
});

export const userRegisterSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(passwordMin).max(passwordMax),
    confirmPassword: z
      .string()
      .min(1, { message: "confirmpassword is requered" }),
    name: z.string().min(userNameMin).max(userNameMax),
    userName: z.string().min(userNameMin).max(userNameMax),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "password don't match",
    path: ["confirmPassword"],
  });

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(passwordMin).max(passwordMax),
  name: z.string().min(userNameMin).max(userNameMax),
  userName: z.string().min(userNameMin).max(userNameMax),
});

export const getUserSchema = z.object({
  userId: z.string(),
});

export const userUpdateSchema = z
  .object({
    email: z.string().email().optional().or(z.literal("")),
    userName: z
      .string()
      .min(userNameMin)
      .max(userNameMax)
      .optional()
      .or(z.literal("")),
    password: z.string().min(passwordMin).max(passwordMax),
    confirmPassword: z
      .string()
      .min(1, { message: "confirmpassword is requered" }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "password don't match",
    path: ["confirmPassword"],
  });

export const getHotelSchema = z.object({
  batch: z.string(),
});

export const validateUserQuery = (params: QueryParamsType) => {
  const result = getUserSchema.safeParse(params);

  if (!result.success) throw new Error("Not valid params");

  return result.data;
};

export const validateHotelQuery = (params: QueryParamsType) => {
  const result = getHotelSchema.safeParse(params);

  if (!result.success) throw new Error("input exeeded hotels number");

  return result.data;
};
