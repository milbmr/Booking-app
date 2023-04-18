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
  } = useTouch(images?.length ?? 0);

  console.log(currentSlideIndex);

  if (!images) return null;
  return (
    <div className={classNames(classes.carousel)}>
      {images.map((image, idx) => (
        <div
          key={idx}
          className={classNames(classes.carousel__image)}
          style={{ transform: `translateX(${-currentSlideIndex * 100}%)` }}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={`http://photos.hotelbeds.com/giata/bigger/${image.path}`}
            alt="hotel image"
            width="700"
            height="500"
          />
        </div>
      ))}
    </div>
  );
};

export default MobileCarousel;
