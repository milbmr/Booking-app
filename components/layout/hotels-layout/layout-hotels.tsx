import React from "react";
import NavigationBar from "components/ui/navigation-bar";
import ErroBoundaryWrapper from "lib/client/providers/error-boundary-wrapper";
import SearchBoxDetails from "components/search/search-box-details/searchbox-details";
import classes from "./layout-hotels.module.scss";
import Footer from "components/ui/footer/footer";

export const LayoutHotels = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.layout}>
      <ErroBoundaryWrapper>
        <NavigationBar />
        <SearchBoxDetails />
        <div className="container">{children}</div>
        <Footer />
      </ErroBoundaryWrapper>
    </div>
  );
};
