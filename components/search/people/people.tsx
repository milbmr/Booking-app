import React, { useState } from "react";
import classes from "./people.module.scss";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";

const People = React.forwardRef<HTMLDivElement>((props, ref?) => {
  const [rooms, setRooms] = useState<number>(0);
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);

  const countHandler = (name: string, action: string) => () => {
    if (action === "add") {
      if (name === "rooms" && rooms < 10) {
        setRooms((preState) => preState + 1);
      }

      if (name === "adults" && adults < 10) {
        setAdults((preState) => preState + 1);
      }

      if (name === "children" && children < 10) {
        setChildren((preState) => preState + 1);
      }
    }

    if (action === "subtract") {
      if (name === "rooms" && rooms > 0) {
        setRooms((preState) => preState - 1);
      }

      if (name === "adults" && adults > 0) {
        setAdults((preState) => preState - 1);
      }

      if (name === "children" && children > 0) {
        setChildren((preState) => preState - 1);
      }
    }
  };

  return (
    <div onClick={event => event.stopPropagation()} ref={ref} className={classes.box}>
      <div className={classes.box__row}>
        <p>Rooms</p>
        <div className={classes.box__row_num}>
          <FiMinusSquare
            onClick={countHandler("rooms", "subtract")}
            color="#f76707"
            className={classes.box__icon}
          />
          <p>{rooms}</p>
          <FiPlusSquare
            onClick={countHandler("rooms", "add")}
            color="#f76707"
            className={classes.box__icon}
          />
        </div>
      </div>

      <div className={classes.box__row}>
        <p>Adults</p>
        <div className={classes.box__row_num}>
          <FiMinusSquare
            onClick={countHandler("adults", "subtract")}
            color="#f76707"
            className={classes.box__icon}
          />
          <p>{adults}</p>
          <FiPlusSquare
            onClick={countHandler("adults", "add")}
            color="#f76707"
            className={classes.box__icon}
          />
        </div>
      </div>

      <div className={classes.box__row}>
        <p>Children</p>
        <div className={classes.box__row_num}>
          <FiMinusSquare
            onClick={countHandler("children", "subtract")}
            color="#f76707"
            className={classes.box__icon}
          />
          <p>{children}</p>
          <FiPlusSquare
            onClick={countHandler("children", "add")}
            color="#f76707"
            className={classes.box__icon}
          />
        </div>
      </div>
    </div>
  );
});

export default People;
