import SearchBox from "../search/search-box/search-box";
import { Nav } from "../layout";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <Nav />
      <SearchBox />
    </div>
  );
};

export default Header;
