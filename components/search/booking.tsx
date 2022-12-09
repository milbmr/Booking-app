import { useState } from "react";
import useClick from "../../hook/use-click";

import Calendar from "./calendar";
import { IoCalendar } from "react-icons/io5";
import classes from "./booking.module.scss";

const Booking = () => {
  const [dateValue, setDateValue] = useState<Date[] | null>(null);
  const [calendarShow, setCalendarShow] = useState<boolean>(false);
  const calendarRef = useClick(() => {
    if (calendarShow) setCalendarShow(false);
  });

  const calendarHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCalendarShow(pre => !pre);
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
    <div
      onClick={(e) => calendarHandler(e)}
      className={classes.calendar}
    >
      <div className={classes.calendar__booking}>
        <IoCalendar className="icon" color="#343a40" />
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
  );
};

export default Booking;
