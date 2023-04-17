import SearchNavbar from "../search-navbar/search-navbar";
import useMediaQuery from "hook/use-media-query";
import { Nav } from "components/layout";
import classes from "./navigation-bar.module.scss";

const NavigationBar = () => {
  const width = useMediaQuery();
  const isMobile = width < 768;

  return (
    <div className={classes.navbar}>
      <Nav>{!isMobile && <SearchNavbar />}</Nav>
    </div>
  );
};

export default NavigationBar;
