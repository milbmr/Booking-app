import React, { Fragment, useState } from "react";
import Calendar from "./Calendar";
import Booking from "./Booking";

import classes from "./search.module.scss";
import { Bed, Calendar as MyCalendar, User } from "phosphor-react";

const Search = () => {
  const [dateValue, setDateValue] = useState<Date[] | null>(null);

  let formatedStartDate = "--";
  let formatedEndDate = "--";
  let formatedLongStartDate = "--";
  let formatedLongEndDate = "--";

  if (dateValue != null) {
    formatedStartDate = dateValue[0].toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    formatedEndDate = dateValue[1].toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    formatedLongStartDate = dateValue[0].toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    formatedLongEndDate = dateValue[1].toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const setValueHandler = (value: Date[]) => {
    setDateValue(value);
  };

  return (
    <Fragment>
      <form action="">
        <div className={`flex ${classes.search}`}>
          <div className={classes.search__input}>
            <Bed size="2.4rem" weight="fill" color="#343a40" />
            <input
              type="text"
              placeholder="Where are you going?"
              className={classes.search__input_field}
              required
            />
          </div>
          <div className={classes.search__calendar}>
            <div className={classes.search__calendar_booking}>
              <MyCalendar size="2.4rem" weight="fill" color="#343a40" />
              <p>{dateValue ? formatedStartDate : "--"}</p>
              <span>&lt; &gt;</span>
              <p>{dateValue ? formatedEndDate : "--"}</p>
            </div>
            <Calendar
              valueHandler={setValueHandler}
              formatedLongStartDate={formatedLongStartDate}
              formatedLongEndDate={formatedLongEndDate}
            />
          </div>
          <div className={classes.search__accomodation}>
            <User size="2.4rem " weight="fill" color="#343a40" />
            <p>1 Room, 1 Guest</p>
            <Booking />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
