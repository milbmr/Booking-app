import Link from "next/link";
import classes from "./search-button.module.scss";
import { ImSearch } from "react-icons/im";

const SearchButton = () => {
  return (
    <Link href="/hotels" passHref legacyBehavior>
      <a className="button-blue">
        <ImSearch className="icon" />
        <h4 className={classes.button__label}>Search</h4>
      </a>
    </Link>
  );
};

export default SearchButton;
