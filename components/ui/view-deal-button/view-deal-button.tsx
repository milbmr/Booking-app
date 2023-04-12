import Link from "next/link";
import classes from "./view-deal-button.module.scss";

const DealButton = ({
  small = false,
  route,
}: {
  small?: boolean;
  route?: string;
}) => {
  const style = small
    ? { padding: "0.4rem 1.2rem" }
    : { padding: "0.8rem 1.6rem" };
  return (
    <Link href={`/hotels/${route}`} passHref legacyBehavior>
      <a style={style} className={`button-blue ${classes.button}`}>
        <h2 className={classes.button_text}>View Deal</h2>
      </a>
    </Link>
  );
};

export default DealButton;
