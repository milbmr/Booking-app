import React, { Fragment } from "react";
import Booking from "../booking/booking";
import SearchInput from "../search-input/search-input";
import Staying from "../staying/staying";
import SearchButton from "../search-button/search-button";
import Skeleton from "react-loading-skeleton";
import { useGetSearchCitiesQuery } from "store/slices/api-slice";
import classes from "./search.module.scss";

const Search = () => {
  const { data, isLoading } = useGetSearchCitiesQuery();

  if (isLoading || !data) return <Skeleton count={3} />;

  return (
    <div className={classes.search}>
      <SearchInput data={data} />
      <Booking />
      <Staying />
      <SearchButton />
    </div>
  );
};

export default Search;
