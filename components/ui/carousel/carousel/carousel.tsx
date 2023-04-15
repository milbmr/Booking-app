import { useState } from "react";
import CarouselItem from "../carousel-item";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { HotelDataType } from "types";
import classes from "./carousel.module.scss";
import { useRouter } from "next/router";

const Carousel = ({
  column = 1,
  data,
  itemNumber,
  localImages,
}: {
  column?: number;
  data?: HotelDataType[];
  itemNumber?: number;
  localImages?: string[];
}) => {
  const [index, setIndex] = useState<number>(0);
  const [classHideRight, setClassHideRight] = useState("");
  const [classHideLeft, setClassHideLeft] = useState(
    classes.carousel__button_left_hide
  );

  const router = useRouter()

  console.log(router)

  let images;
  if (!data) {
    images = localImages;
  } else if (!localImages) {
    images = data.slice(0, itemNumber);
  } else return null;

  const mappedData = images?.map((image: any) => {
    const path = data
      ? `http://photos.hotelbeds.com/giata/bigger/${image.images[1].path}`
      : `/images/${image}.jpg`;
    return (
      <CarouselItem
        column={column}
        image={path}
        index={index}
        link={data && image._id}
        key={data ? image._id : image}
      />
    );
  });

  const slideHandler = (direction: string) => () => {
    if (direction === "right" && index < images.length - column) {
      setIndex((pre) => pre + 1);
    }

    if (direction === "right" && index === images.length - (column + 1)) {
      setClassHideRight(classes.carousel__button_right_hide);
    } else {
      setClassHideRight("");
    }

    if (direction === "left" && index > 0) {
      setIndex((pre) => pre - 1);
    }
    if (direction === "left" && index === 1) {
      setClassHideLeft(classes.carousel__button_left_hide);
    } else {
      setClassHideLeft("");
    }
  };

  return (
    <div className="container">
      <div className={classes.carousel}>
        <div className={classes.carousel__items}>{mappedData}</div>
        <button
          onClick={slideHandler("right")}
          className={`${classes.carousel__button} ${classes.carousel__button_right} ${classHideRight}`}
        >
          <BiChevronRight size="2.2rem" />
        </button>
        <button
          onClick={slideHandler("left")}
          className={`${classes.carousel__button} ${classes.carousel__button_left} ${classHideLeft}`}
        >
          <BiChevronLeft size="2.2rem" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
