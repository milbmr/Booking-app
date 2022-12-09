import classes from "./search-input.module.scss";
import { MdLocationOn } from "react-icons/md";

const SearchInput = () => {
  return (
    <div className={classes.input}>
      <MdLocationOn className={classes.input__icon} color="#343a40" />
      <input
        type="text"
        placeholder="Where are you going?"
        className={classes.input__field}
        required
      />
    </div>
  );
};

export default SearchInput;
