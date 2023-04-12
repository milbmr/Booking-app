import { randomRating } from "lib/helpers";
import classes from "./rate-box.module.scss";

const RateBox = ({ ratingNum }: { ratingNum: number }) => {
  const { comment, color, rating } = randomRating(ratingNum);

  return (
    <div className={classes.rate}>
      <div style={{ backgroundColor: color }} className={classes.rate_box}>
        <span>{rating}</span>
      </div>
      <h4 className={classes.rate_text}>{comment}</h4>
    </div>
  );
};

export default RateBox;
