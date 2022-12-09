import Link from "next/link";
import classes from "./navigation-bar.module.scss";

const NavigationBar = () => {
  return (
    <div className={classes.navigation}>
      <div className="container flex space-between">
        <div className={classes.navigation__logo}>
          <Link href="/" passHref legacyBehavior>
            <a className={classes.navigation__logo_txt}>sky<span>tra</span></a>
          </Link>
        </div>

        <div className={classes.navigation__cta}>
          <button className={classes.navigation__btn}>sign up</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
