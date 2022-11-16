import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./search-navbar.module.scss";
import { IoIosBed, IoMdAirplane, IoIosCar } from "react-icons/io";
import { MdAttractions } from "react-icons/md";

const SearchNavbar = () => {
  const router = useRouter();

  const activeClass = router.pathname === '/' ? classes.active : "";

  return (
    <div className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <Link href="/" passHref legacyBehavior>
            <a className={`${classes.nav__link} ${activeClass}`}>
              <IoIosBed className={classes.nav__icon} />
              <span>Stays</span>
            </a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/" passHref legacyBehavior>
            <a className={classes.nav__link}>
              <IoMdAirplane className={classes.nav__icon} />
              <span>Flights</span>
            </a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/" passHref legacyBehavior>
            <a className={classes.nav__link}>
              <IoIosCar className={classes.nav__icon} />
              <span>Car rental</span>
            </a>
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link href="/" passHref legacyBehavior>
            <a className={classes.nav__link}>
              <MdAttractions className={classes.nav__icon} />
              <span>Attractions</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchNavbar;
