import Link from "next/link";
import Image from "next/image";
import Rating from "components/ui/rating/rating";
import { MdLocationOn } from "react-icons/md";
import { useAppSelector } from "store/hooks";
import classes from "./hotel-item.module.scss";
import DealButton from "components/ui/view-deal-button/view-deal-button";
import RateBox from "components/ui/rate-box/rate-box";

interface HotelItemProps {
  name: string;
  starRating: string;
  image: string;
  address: string;
  id: string;
  price: number;
  rating: number;
}

const HotelItem = ({
  name,
  starRating,
  image,
  address,
  id,
  price,
  rating,
}: HotelItemProps) => {
  let rate;
  let groupNum = +starRating[5];

  if (groupNum < 5) {
    rate = <Rating group={starRating} color="#fab005" />;
  } else if (groupNum === 6) {
    rate = <h4>Other</h4>;
  } else if (groupNum === 7) {
    rate = <h4>Appartment</h4>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.container__info}>
        <div className={classes.container__image}>
          <Image
            className={classes.container__image_img}
            src={`http://photos.hotelbeds.com/giata/bigger/${image}`}
            alt={name}
            width={500}
            height={400}
          />
        </div>

        <div className={classes.container__hotel}>
          <div>
            <h3 className={classes.container__hotel_name}>{name}</h3>
            {rate}
            <div className={classes.container__hotel_address}>
              <MdLocationOn className={classes.container__hotel_address_icon} />
              <p className={classes.container__hotel_address_text}>{address}</p>
            </div>
          </div>
          <RateBox ratingNum={rating} />
        </div>
      </div>

      <div className={classes.container__action}>
        <div className={classes.container__action_box}>
          <div className={classes.container__action_price}>
            <p>
              <span>$</span>
              {price}
            </p>
          </div>
          <div>
            <DealButton route={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
