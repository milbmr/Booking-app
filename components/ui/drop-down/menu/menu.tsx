import { signOut } from "next-auth/react";
import Link from "next/link";
import { User } from "types";
import { Routes } from "lib/client";
import UserImage from "../user-image/user-image";
import classes from "./menu.module.scss";
import React from "react";

type PropType = {
  user: Omit<User, "password">;
};

const Menu = ({ user }: PropType) => {
  return (
    <div className={classes.menu}>
      <div className={`${classes.menu__user} + ${classes.menu__options}`}>
        <UserImage userName={user.userName} large={true} />
        <div className={classes.menu__user_info}>
          <p className={classes.menu__user_name}>{user.name}</p>
          <p className={classes.menu__user_email}>{user.email}</p>
        </div>
      </div>
      <div
        className={`${classes.menu__trips} + ${classes.menu__options} + ${classes.menu__link}`}
      >
        <Link href="/" className={classes.link}>
          Trips
        </Link>
      </div>
      <div
        className={`${classes.menu__settings} + ${classes.menu__options} + ${classes.menu__link}`}
      >
        <Link href="/" className={classes.link}>
          Settings
        </Link>
      </div>
      <div className={`${classes.menu__btn} + ${classes.menu__options}`}>
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut({ callbackUrl: Routes.SITE.HOME });
          }}
          className={classes.menu__btn_button}
        >
          <Link href="/" className={classes.link}>
            Log out
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menu;
