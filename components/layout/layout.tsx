import React, { Fragment } from "react";
import { JsxAttribute } from "typescript";
import Header from "../header/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
