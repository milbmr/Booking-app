import { useState } from "react";
import useClick from "../../hook/use-click";
import People from "./people";
import classes from "./staying.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";

const Staying = () => {
  const [bookingShow, setBookingShow] = useState<boolean>(false);
  const stayRef = useClick(() => {
    if (bookingShow) setBookingShow(false);
  });

  const bookingHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookingShow((pre) => !pre);
  };

  return (
    <div onClick={bookingHandler} className={classes.staying}>
      <BsFillPeopleFill className="icon" color="#343a40" />
      <p>1 Room, 1 Guest</p>
      {bookingShow && <People ref={stayRef} />}
    </div>
  );
};

export default Staying;
