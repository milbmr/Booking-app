import React, { Fragment, useState, useRef, useEffect } from "react";
import Calendar from "./Calendar";
import Booking from "./Booking";
import useClick from "../../hook/use-click";

import classes from "./search.module.scss";
import { IoIosBed } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

const Search = () => {
  const [dateValue, setDateValue] = useState<Date[] | null>(null);
  const [calendarShow, setCalendarShow] = useState<boolean>(false);
  const [bookingShow, setBookingShow] = useState<boolean>(false);

  const calendarHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCalendarShow(true);
    setBookingShow(false);
  };

  const bookingHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookingShow(true);
    setCalendarShow(false);
  };

  const calendarRef = useClick(() => {
    if (calendarShow) setCalendarShow(false);
  });

  const bookingRef = useClick(() => {
    if (bookingShow) setBookingShow(false);
  });

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
            <IoIosBed className={classes.search__icon} color="#343a40" />
            <input
              type="text"
              placeholder="Where are you going?"
              className={classes.search__input_field}
              required
            />
          </div>

          <div
            onClick={(e) => calendarHandler(e)}
            className={classes.search__calendar}
          >
            <div className={classes.search__calendar_booking}>
              <IoCalendar className={classes.search__icon} color="#343a40" />
              <p>{dateValue ? formatedStartDate : "--"}</p>
              <span>&lt; &gt;</span>
              <p>{dateValue ? formatedEndDate : "--"}</p>
            </div>
            {calendarShow && (
              <Calendar
                ref={calendarRef}
                valueHandler={setValueHandler}
                formatedLongStartDate={formatedLongStartDate}
                formatedLongEndDate={formatedLongEndDate}
              />
            )}
          </div>

          <div onClick={bookingHandler} className={classes.search__accomodation}>
            <BsFillPersonFill
              className={classes.search__icon}
              color="#343a40"
            />
            <p>1 Room, 1 Guest</p>
            {bookingShow && <Booking ref={bookingRef} />}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
