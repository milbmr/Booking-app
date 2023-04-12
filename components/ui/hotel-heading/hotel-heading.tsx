import classes from "./hotel-heading.module.scss";
import RateBox from "../rate-box/rate-box";
import Rating from "../rating/rating";
import DealButton from "../view-deal-button/view-deal-button";

const HotelHeading = ({
  name,
  address,
  group,
  price,
  rating,
}: {
  name: string;
  address: string;
  group: string;
  price: number;
  rating: number;
}) => {
  return (
    <div className={classes.heading}>
      <div className={classes.heading__info}>
        <div className={classes.heading__info_head}>
          <h3>{name}</h3>
          <Rating group={group} />
        </div>

        <div className={classes.heading__info_address}>
          <h4>{address}</h4>
        </div>

        <RateBox ratingNum={rating} />
      </div>

      <div className={classes.heading__action}>
        <div className={classes.heading__action_price}>
          <p>
            <span>${price}</span>/night
          </p>
        </div>
        <DealButton small={true} />
      </div>
    </div>
  );
};

export default HotelHeading;
