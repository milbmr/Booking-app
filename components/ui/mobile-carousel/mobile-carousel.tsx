import Image from "next/image";
import { ImageType } from "types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import classNames from "classnames";
import classes from "./mobile-carousel.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MobileCarousel = ({ images }: { images: ImageType[] | undefined }) => {
  if (!images) return null;
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ dynamicBullets: true }}
      className={classes.swipe}
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx} className={classNames(classes.image)}>
          <Image
            src={`http://photos.hotelbeds.com/giata/bigger/${image.path}`}
            alt="hotel image"
            width="700"
            height="500"
            className={classNames(classes.image__img)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileCarousel;
