import { useState } from "react";
import { Minus, Plus } from "phosphor-react";
import classes from "./booking.module.scss";

const Booking = () => {
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
    <div className={classes.box}>
      <div className={classes.box__row}>
        <p>Rooms</p>
        <div className={classes.box__row_num}>
          <Minus
            onClick={countHandler("rooms", "subtract")}
            width="1.4rem"
            weight="bold"
            color="#f76707"
            className={classes.box__icon}
          />
          <p>{rooms}</p>
          <Plus
            onClick={countHandler("rooms", "add")}
            width="1.4rem"
            weight="bold"
            color="#f76707"
            className={classes.box__icon}
          />
        </div>
      </div>

      <div className={classes.box__row}>
        <p>Adults</p>
        <div className={classes.box__row_num}>
          <Minus
            onClick={countHandler("adults", "subtract")}
            width="1.4rem"
            weight="bold"
            color="#f76707"
            className={classes.box__icon}
          />
          <p>{adults}</p>
          <Plus
            onClick={countHandler("adults", "add")}
            width="1.4rem"
            weight="bold"
            color="#f76707"
            className={classes.box__icon}
          />
        </div>
      </div>

      <div className={classes.box__row}>
        <p>Children</p>
        <div className={classes.box__row_num}>
          <Minus
            onClick={countHandler("children", "subtract")}
            width="1.4rem"
            weight="bold"
            color="#f76707"
            className={classes.box__icon}
          />
          <p>{children}</p>
          <Plus
            onClick={countHandler("children", "add")}
            width="1.4rem"
            weight="bold"
            color="#f76707"
            className={classes.box__icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
