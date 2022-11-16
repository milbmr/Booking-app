import Search from "./search";
import SearchNavbar from "../ui/search-navbar";
import classes from "./search-box.module.scss";

const SearchBox = () => {
  return (
    <div className={classes.searchbox}>
      <div className={classes.searchbox__nav}>
        <SearchNavbar />
      </div>
      <Search />
    </div>
  );
};

export default SearchBox;
