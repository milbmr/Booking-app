import Link from "next/link";
import classes from "./carousel-header.module.scss";

const CarouselHeader = ({ title }: { title: string }) => {
  return (
    <div className={`container ${classes.header}`}>
      <div className={classes.header_heading}>
        <h2 className={`secondary-heading ${classes.header_heading_title}`}>
          {title}
        </h2>
      </div>

      <Link href="/" passHref legacyBehavior>
        <a className="see-all-button">See all</a>
      </Link>
    </div>
  );
};

export default CarouselHeader;
