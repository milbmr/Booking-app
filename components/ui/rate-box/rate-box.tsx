import { randomRating } from "lib/helpers";
import classes from "./rate-box.module.scss";
import { CSSProperties } from "react";

const RateBox = ({
  ratingNum,
  mobile = false,
}: {
  ratingNum: number;
  mobile?: boolean;
}) => {
  const { comment, color, rating } = randomRating(ratingNum);

  return (
    <div
      className={classes.rate}
      style={{ margin: mobile && "0" } as CSSProperties}
    >
      <div style={{ backgroundColor: color }} className={classes.rate_box}>
        <span>{rating}</span>
      </div>
      <h4 className={classes.rate_text}>{comment}</h4>
    </div>
  );
};

export default RateBox;
