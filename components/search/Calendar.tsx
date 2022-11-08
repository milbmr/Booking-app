import React, { useRef, useImperativeHandle } from 'react';

import MyCalendar from "react-calendar";
import classes from "./calendar.module.scss";
import "react-calendar/dist/Calendar.css";
import { MutableRefObject } from "react";

interface CalendarProp {
    valueHandler: (value: Date[]) => void;
    formatedLongStartDate: string;
    formatedLongEndDate: string;
}

const Calendar = (props: CalendarProp, ref: MutableRefObject<HTMLDivElement | null>) => {
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const dateHandler = (
    value: Date[],
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.valueHandler(value)
  };


  return (
    <div className={classes.calendar}>
      <MyCalendar
        selectRange={true}
        onChange={dateHandler}
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
};

export default Calendar;
