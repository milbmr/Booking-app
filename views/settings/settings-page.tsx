import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsAuthenticated } from "hook/use-auth";
import { userUpdateSchema } from "lib/server/validation";
import { User, UpdatedUserDataKeys } from "types";
import { useUpdateUserMutation } from "store/slices/api-slice";

interface FormValue extends Partial<Omit<User, "name">> {
  confirmPassword?: string;
}

const SettingsView = () => {
  const { user } = useIsAuthenticated();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<FormValue>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        ...getValues(),
        userName: user.userName,
        email: user.email,
      });
    }
  }, [user]);

  const submitHandler = async (values: FormValue) => {
    if (Object.keys(dirtyFields).length === 0) return;

    let updatedFields = {} as FormValue;
    Object.keys(values).forEach((key) => {
      if (
        Object.keys(dirtyFields).includes(key) &&
        !["confirmPassWord"].includes(key)
      ) {
        const _key = key as UpdatedUserDataKeys;
        updatedFields[_key] = values[_key];
      }
    });

    if (!user) return null;

    await updateUser(updatedFields);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form className="h-4/5 w-3/4" onSubmit={handleSubmit(submitHandler)}>
        <div className="w-[40%] mb-8">
          <label htmlFor="username" className="block mb-2 text-xl">
            Username
          </label>
          <input
            {...register("userName")}
            id="username"
            className="border border-solid border-color-g px-6 py-3 w-full rounded-md focus:shadow-[0_2px] focus:outline-none focus:shadow-color-p text-lg"
          />
        </div>
        <div className="w-[40%] mb-8">
          <label htmlFor="email" className="block mb-2 text-xl">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            className="border border-solid border-color-g px-6 py-3 w-full rounded-md focus:shadow-[0_2px] focus:outline-none focus:shadow-color-p text-lg"
          />
        </div>
        <div className="w-[40%] mb-8">
          <label htmlFor="password" className="block mb-2 text-xl">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="border border-solid border-color-g px-6 py-3 w-full rounded-md focus:shadow-[0_2px] focus:outline-none focus:shadow-color-p text-lg"
          />
        </div>
        <div className="w-[40%] mb-8">
          <label htmlFor="confirmpassword" className="block mb-2 text-xl">
            ConfirmPassword
          </label>
          <input
            {...register("confirmPassword")}
            id="confirmpassword"
            type="password"
            className="border border-solid border-color-g px-6 py-3 w-full rounded-md focus:shadow-[0_2px] focus:outline-none focus:shadow-color-p text-lg"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-color-p rounded-lg text-xl text-color-w font-medium hover:bg-color-p-d"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default SettingsView;
