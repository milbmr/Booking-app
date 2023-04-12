import { AiFillStar } from "react-icons/ai";
import classes from "./rating.module.scss";

const Rating = ({ group, color='#343a40' }: { group: string; color?:string }) => {
  const starNum = +group[5]
  const rateArr = [...Array.from(Array(starNum).keys())];

  return (
    <div className={classes.rating}>
      {rateArr.map((i) => (
        <AiFillStar size="1.5rem" key={i} color={color} />
      ))}
    </div>
  );
};

export default Rating;
