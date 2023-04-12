import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import classes from "./error-page.module.scss";

const ErrorPage = ({ code, message }: { code: string; message: string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loading);
  }, []);

  console.log(loading);

  return (
    <div className={classNames(classes.error, { [classes.loading]: loading })}>
      <h1 className={classNames(classes.error__type)}>{code}</h1>
      <h2 className={classNames(classes.error__message)}>
        {message} <b>:(</b>
      </h2>
      <Link href="/" className={classNames(classes.error__link)}>
        Return Home
      </Link>
      <div className={classNames(classes.error__gears)}>
        <div className={classNames(classes.error__gear, classes.one)}>
          <div className={classNames(classes.error__bar)}></div>
          <div className={classNames(classes.error__bar)}></div>
          <div className={classNames(classes.error__bar)}></div>
        </div>
        <div className={classNames(classes.error__gear, classes.two)}>
          <div className={classNames(classes.error__bar)}></div>
          <div className={classNames(classes.error__bar)}></div>
          <div className={classNames(classes.error__bar)}></div>
        </div>
        <div className={classNames(classes.error__gear, classes.three)}>
          <div className={classNames(classes.error__bar)}></div>
          <div className={classNames(classes.error__bar)}></div>
          <div className={classNames(classes.error__bar)}></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
