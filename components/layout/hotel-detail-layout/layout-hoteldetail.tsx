import React, { Fragment } from "react";
import ErroBoundaryWrapper from "lib/client/providers/error-boundary-wrapper";
import Footer from "components/ui/footer/footer";
import NavigationBar from "components/ui/navigation-bar/navigation-bar";

export const LayoutHotelDetail = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ErroBoundaryWrapper>
      <NavigationBar />
      <div className="container">{children}</div>
      <Footer />
    </ErroBoundaryWrapper>
  );
};
