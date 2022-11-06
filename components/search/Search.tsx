import React, { Fragment, useState } from "react";

import classes from "./search.module.scss";
import { Bed, Calendar as MyCalendar, User } from "phosphor-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Search = () => {
  const [date, setDate] = useState([new Date, new Date]);
  const [start, setStart] = useState("");

  const formatedStartDate = date[0].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formatedEndDate = date[1].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const dateHandler = (value: Date[], e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(value);
  };

  console.log(date);

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
            <div className={classes.search__calendar_icon}>
              <MyCalendar size="2.4rem" weight="fill" color="#343a40" />
              <p>{formatedStartDate}</p>
              <span>&lt; &gt;</span>
              <p>{formatedEndDate}</p>
            </div>
            <Calendar
              selectRange={true}
              onChange={dateHandler}
              className={classes.search__calendar_box}
            />
          </div>
          <div className={classes.search__accomodation}>
            <User size="2.4rem " weight="fill" color="#343a40" />
            <p>1 Room, 1 Guest</p>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
