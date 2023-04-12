import React, { useState } from "react";
import { useIsAuthenticated } from "hook/use-auth";
import FormModal from "components/auth-form";
import Skeleton from "react-loading-skeleton";
import DropDown from "components/ui/drop-down";
import Logo from "components/ui/logo";
import classes from "./nav.module.scss";
import 'react-loading-skeleton/dist/skeleton.css';
import { signOut } from "next-auth/react";

export const Nav = ({ children }: { children?: React.ReactNode }) => {
  const [showForm, setShowForm] = useState(false);
  const { user, status } = useIsAuthenticated();

  const hideAuthHandler = () => {
    document.body.classList.remove("modal--show");
    setShowForm(false);
  };

  const showAuthHandler = () => {
    document.body.classList.add("modal--show");
    setShowForm(true);
  };

  return (
    <div className={classes.navigation}>
      <div className="container flex space-between">
        <Logo />
        {children}
        <div className={classes.navigation__cta}>
          {status === "loading" ? (
            <Skeleton />
          ) : status === "unauthenticated" ? (
            <button
              onClick={showAuthHandler}
              className={classes.navigation__btn}
            >
              Sign up
            </button>
          ) : (
            user && <DropDown user={user} />
          )}
        </div>
      </div>
      {showForm && !user && <FormModal closeForm={hideAuthHandler} />}
    </div>
  );
};
