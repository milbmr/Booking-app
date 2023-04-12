import React, { lazy } from "react";
import ErroBoundaryWrapper from "lib/client/providers/error-boundary-wrapper";
import Header from "components/header/header";
import Footer from "components/ui/footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErroBoundaryWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </ErroBoundaryWrapper>
  );
};

export default Layout;
