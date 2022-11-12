import classes from "./search-button.module.scss";
import { ImSearch } from "react-icons/im";

const SearchButton = () => {
  return (
    <div className={classes.button}>
      <ImSearch className={classes.button__icon} />
      <h4 className={classes.button__label}>Search</h4>
    </div>
  );
};

export default SearchButton;
