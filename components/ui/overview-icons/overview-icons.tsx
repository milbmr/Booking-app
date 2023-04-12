import { BsCheckCircleFill } from "react-icons/bs";
import { randomRating } from "lib/helpers";
import { amenityReturnType } from "types";
import classes from "./overview-icons.module.scss";

const OverviewIcons = ({
  iconData = [],
  ratingNum,
}: {
  iconData: amenityReturnType[] | undefined;
  ratingNum: number;
}) => {
  const { comment, color, rating } = randomRating(ratingNum);

  const slicedIconsArray = iconData
    .filter((icon) => icon.icon != BsCheckCircleFill)
    .slice(1, 4);
  return (
    <div className={classes.icon}>
      <div
        style={{ backgroundColor: color }}
        className={classes.icon__rating + " " + classes.icon__div}
      >
        <p className={classes.icon__rating_rate}>{rating}</p>
        <p className={classes.icon__rating_comment}>{comment}</p>
      </div>
      {slicedIconsArray?.map((icon, idx) => (
        <div
          key={idx}
          className={classes.icon__icondiv + " " + classes.icon__div}
        >
          <icon.icon className={classes.icon__icondiv_icon} />
          <p className={classes.icon__icondiv_text}>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewIcons;
