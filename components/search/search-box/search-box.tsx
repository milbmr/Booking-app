import useMediaQuery from "hook/use-media-query";
import Search from "../search/search";
import SearchNavbar from "../../ui/search-navbar/search-navbar";
import classes from "./search-box.module.scss";

const SearchBox = () => {
  const isMobile = useMediaQuery("516");
  console.log(isMobile);
  return (
    <div className={classes.searchbox}>
      {!isMobile && (
        <div className={classes.searchbox__nav}>
          <SearchNavbar borderStyle={true} />
        </div>
      )}
      <div
        style={isMobile ? { marginTop: "0" } : {}}
        className={classes.searchbox__search}
      >
        <Search />
      </div>
    </div>
  );
};

export default SearchBox;
