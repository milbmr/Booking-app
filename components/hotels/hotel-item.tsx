import Link from "next/link";
import Rating from "../ui/rating";
import classes from "./hotel-item.module.scss";

const HotelItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__info}>
        <div className={classes.container__image}>
          <img
            className={classes.container__image_img}
            src="images/hotel.jpg"
            alt="hotel pic"
          />
        </div>

        <div className={classes.container__hotel}>
          <h3 className={classes.container__hotel_name}>
            Meliá Desert Palm Member of Meliá Collection
          </h3>
          <Rating num={3} />
        </div>
      </div>

      <div className={classes.container__action}>
        <div className={classes.container__action_box}>
          <Link href="/" passHref legacyBehavior>
            <a className="button-blue">
              <h4>View Deal</h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
