import { useState } from "react";

import CarouselItem from "./carousel-item";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import classes from "./carousel.module.scss";

const images = ["france", "london", "vienna", "rome", "madrid"];

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const [classHideRight, setClassHideRight] = useState('');
  const [classHideLeft, setClassHideLeft] = useState(classes.carousel__button_left_hide);


  const slideHandler = (direction: string) => () => {
    if (direction === "right" && index < images.length - 2) {
      setIndex((pre) => pre + 1);
    }

    if (direction === 'right' && index === images.length - 3) {
        setClassHideRight(classes.carousel__button_right_hide);
    } else {
        setClassHideRight('');
    }

    if (direction === "left" && index > 0) {
      setIndex((pre) => pre - 1);
    }
    if (direction === 'left' && index === 1) {
        setClassHideLeft(classes.carousel__button_left_hide);
    } else {
        setClassHideLeft('')
    }
  };

  return (
    <div className="container">
      <div className={classes.carousel}>
        {images.map((image, i) => (
          <CarouselItem image={image} index={index} key={i} />
        ))}
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
