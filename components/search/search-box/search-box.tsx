import useMediaQuery from "hook/use-media-query";
import Search from "../search/search";
import SearchNavbar from "../../ui/search-navbar/search-navbar";
import classes from "./search-box.module.scss";

const SearchBox = () => {
  const media = useMediaQuery("516");
  return (
    <div className={classes.searchbox}>
      <div className={classes.searchbox__nav}>
        {!media && <SearchNavbar borderStyle={true} />}
      </div>
      <div className={classes.searchbox__search}>
          <Search />
      </div>
    </div>
  );
};

export default SearchBox;
