import classes from "./search-input.module.scss";
import { IoIosBed } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className={classes.input}>
      <IoIosBed className={classes.input__icon} color="#343a40" />
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
