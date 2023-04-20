import Image from "next/image";
import { ImageType } from "types";
import useTouch from "hook/use-touch";
import classNames from "classnames";
import classes from "./mobile-carousel.module.scss";

const MobileCarousel = ({ images }: { images: ImageType[] | undefined }) => {
  const {
    containerRef,
    currentSlideIndex,
    distance,
    handleTouchEnd,
    handleTouchStart,
    handleTouchMove,
  } =
    useTouch(images?.length ?? 0);

  if (!images) return null;
  return (
    <div
      className={classNames(classes.carousel)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul ref={containerRef} className={classNames(classes.carousel__swipe)}>
        {images.map((image, idx) => (
          <li
            key={idx}
            className={classNames(classes.carousel__image)}
            style={{ transform: `translate3d(${distance}px, 0, 0)` }}
          >
            <Image
              src={`http://photos.hotelbeds.com/giata/bigger/${image.path}`}
              alt="hotel image"
              width="700"
              height="500"
              className={classNames(classes.carousel__image__img)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileCarousel;
