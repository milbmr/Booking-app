import React from "react";
import ErroBoundaryWrapper from "lib/client/providers/error-boundary-wrapper";
import classNames from "classnames";
import useMediaQuery from "hook/use-media-query";
import Footer from "components/ui/footer/footer";
import NavigationBar from "components/ui/navigation-bar/navigation-bar";

export const LayoutHotelDetail = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const width = useMediaQuery();
  const isMobile = width < 516;
  return (
    <ErroBoundaryWrapper>
      <NavigationBar />
      <div className={classNames({container: !isMobile})}>{children}</div>
      <Footer />
    </ErroBoundaryWrapper>
  );
};
