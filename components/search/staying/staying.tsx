import { useState, useRef } from "react";
import useClick from "hook/use-click";
import People from "../people/people";
import classes from "./staying.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";

const Staying = () => {
  const [bookingShow, setBookingShow] = useState<boolean>(false);
  const stayRef = useRef<HTMLDivElement>(null);

  useClick(() => {
    setBookingShow(false);
  }, stayRef);

  const bookingHandler = (e: React.MouseEvent) => {
    setBookingShow(!bookingShow);
  };

  return (
    <div ref={stayRef} className={classes.staying}>
      <div onClick={bookingHandler} className={classes.staying__info}>
        <BsFillPeopleFill className="icon" color="#343a40" />
        <p> 1 Guest</p>
      </div>
      {bookingShow && <People />}
    </div>
  );
};

export default Staying;
