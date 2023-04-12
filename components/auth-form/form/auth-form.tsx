import { useState, Fragment } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema, userRegisterSchema } from "lib/server/validation";
import { useCreateUserMutation } from "store/slices/api-slice";
import { signIn } from "next-auth/react";
import classes from "./auth-form.module.scss";
import { FcGoogle } from "react-icons/fc";
import { User } from "types";

interface FormValue extends User {
  confirmPassword?: string;
}

const AuthForm = () => {
  const [isRegistering, setisRegistering] = useState<boolean>(false);
  const [createUser, result] = useCreateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormValue>({
    resolver: zodResolver(isRegistering ? userRegisterSchema : userLoginSchema),
    mode: "onBlur",
  });

  const loginHandler = async ({ email, password }: FormValue) => {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  const registerHandler = async (values: FormValue) => {
    createUser(values);
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(isRegistering ? registerHandler : loginHandler)}
        className={classNames(classes.form)}
      >
        {!isRegistering && (
          <>
            <div className={classNames(classes.form__email)}>
              <label
                className={classNames(classes.form__label)}
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                className={classNames(classNames(classes.form__input))}
                id="email"
                type="email"
              />
              {
                <p className={classNames(classes.form__error)}>
                  {errors.email && errors.email.message}
                </p>
              }
            </div>
            <div className={classNames(classes.form__password)}>
              <label className={classes.form__label} htmlFor="password">
                Password
              </label>
              <input
                {...register("password")}
                className={classNames(classes.form__input)}
                id="password"
                type="password"
              />
              {
                <p className={classNames(classes.form__error)}>
                  {errors.password && errors.password.message}
                </p>
              }
            </div>
          </>
        )}

        {isRegistering && (
          <>
            <div className={classNames(classes.form__email)}>
              <label className={classNames(classes.form__label)} htmlFor="name">
                Name
              </label>
              <input
                {...register("name")}
                className={classNames(classes.form__input)}
                id="name"
                type="text"
              />
              {
                <p className={classNames(classes.form__error)}>
                  {errors.name && errors.name.message}
                </p>
              }
            </div>
            <div className={classNames(classes.form__email)}>
              <label
                className={classNames(classes.form__label)}
                htmlFor="userName"
              >
                Username
              </label>
              <input
                {...register("userName")}
                className={classNames(classes.form__input)}
                id="userName"
                type="text"
              />
              {
                <p className={classNames(classes.form__error)}>
                  {errors.userName && errors.userName.message}
                </p>
              }
            </div>
            <div className={classNames(classes.form__email)}>
              <label
                className={classNames(classes.form__label)}
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                className={classNames(classes.form__input)}
                id="email"
              />
              {
                <p className={classNames(classes.form__error)}>
                  {errors.email && errors.email.message}
                </p>
              }
            </div>
            <div className={classes.form__password}>
              <label
                className={classNames(classes.form__label)}
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password")}
                className={classNames(classes.form__input)}
                id="password"
                type="password"
              />
              {
                <p className={classNames(classes.form__error)}>
                  {errors.password && errors.password.message}
                </p>
              }
            </div>
            <div className={classNames(classes.form__email)}>
              <label
                className={classNames(classes.form__label)}
                htmlFor="confirmPassword"
              >
                ConfirmPassword
              </label>
              <input
                {...register("confirmPassword")}
                className={classNames(classes.form__input)}
                id="confirmPassword"
                type="password"
              />
              {
                <p className={classNames(classes.form__error)}>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </p>
              }
            </div>
          </>
        )}
        <button className={classNames(classes.form__btn)} type="submit">
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>

      {!isRegistering && (
        <div>
          <div className={classNames(classes.form__line)}>
            <span className={classNames(classes.form__line_or)}>or</span>
          </div>
          <button
            className={classNames(
              classes.form__btn,
              classes.form__provider_btn
            )}
            onClick={() => signIn("google")}
          >
            <FcGoogle className={classNames(classes.form__provider_icon)} />{" "}
            <p>Google</p>
          </button>
        </div>
      )}

      <div>
        {!isRegistering ? (
          <span className={classNames(classes.form__feed)}>
            Don't have an account?{" "}
          </span>
        ) : (
          <span className={classNames(classes.form__feed)}>
            You already have an account?
          </span>
        )}
        <button
          className={classNames(classes.form__btn_action)}
          onClick={() => setisRegistering(!isRegistering)}
        >
          {isRegistering ? "Login" : "Sign up"}
        </button>
      </div>
    </Fragment>
  );
};

export default AuthForm;
