import React, { Fragment } from "react";
import Booking from "./booking";
import SearchInput from "./search-input";
import Staying from "./staying";
import SearchButton from "./search-button";
import classes from "./search.module.scss";

const Search = () => {
  return (
    <Fragment>
      <form action="">
        <div className={`flex ${classes.search}`}>
          <SearchInput />
          <Booking />
          <Staying />
          <SearchButton />
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
