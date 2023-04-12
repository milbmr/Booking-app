import { useState, useRef } from "react";
import useClick from "../../../hook/use-click";

import Calendar from "../calendar/calendar";
import { IoCalendar } from "react-icons/io5";
import classes from "./booking.module.scss";

const Booking = () => {
  const [dateValue, setDateValue] = useState<Date[] | null>(null);
  const [calendarShow, setCalendarShow] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useClick(() => {
    setCalendarShow(false);
  }, calendarRef);

  const calendarHandler = (e: React.MouseEvent) => {
    setCalendarShow(!calendarShow);
  };

  const setValueHandler = (value: Date[]) => {
    setDateValue(value);
  };

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

  return (
    <div ref={calendarRef} className={classes.calendar}>
      <div
        className={classes.calendar__booking}
        onClick={(e) => calendarHandler(e)}
      >
        <IoCalendar className="icon" color="#343a40" />
        <p>{dateValue ? formatedStartDate : "--"}</p>
        <span>&lt; &gt;</span>
        <p>{dateValue ? formatedEndDate : "--"}</p>
      </div>
      {calendarShow && (
        <Calendar
          valueHandler={setValueHandler}
          formatedLongStartDate={formatedLongStartDate}
          formatedLongEndDate={formatedLongEndDate}
        />
      )}
    </div>
  );
};

export default Booking;
