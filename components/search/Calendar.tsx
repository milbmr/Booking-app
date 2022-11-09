import React from 'react';

import MyCalendar from "react-calendar";
import classes from "./calendar.module.scss";
import "react-calendar/dist/Calendar.css";

interface CalendarProp {
    valueHandler: (value: Date[]) => void;
    formatedLongStartDate: string;
    formatedLongEndDate: string;
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProp>((props, ref) => {

  let currentValue = new Date(2022, 12, 15);

  const dateHandler = (
    value: Date[],
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    //currentValue = value;
    props.valueHandler(value)
  };


  return (
    <div ref={ref} className={classes.calendar}>
      <MyCalendar
        selectRange={true}
        onChange={dateHandler}
        value={currentValue}
        className={classes.calendar_chart}
      />
      <div className={classes.calendar_box}>
        <div className={classes.calendar_box_check}>
          <h4>Check-in</h4>
          <p>{props.formatedLongStartDate}</p>
        </div>
        <div className={classes.calendar_box_line}>&nbsp;</div>
        <div className={classes.calendar_box_check}>
          <h4>Check-out</h4>
          <p>{props.formatedLongEndDate}</p>
        </div>
      </div>
    </div>
  );
});

export default Calendar;
