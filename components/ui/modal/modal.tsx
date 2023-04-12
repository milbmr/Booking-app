import { useState } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { hotelActions } from "store/slices/hotels-slice";
import { ImageType } from "types";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import classes from "./modal.module.scss";

const Modal = ({
  closeModal,
  images,
}: {
  closeModal: () => void;
  images: ImageType[];
}) => {
  const imageIndex = useAppSelector((s) => s.hotelsPage.imageIndex);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(0);
  const [hideLeft, setHideLeft] = useState(classes.modal__hide);
  const [hideRight, setHideRight] = useState("");
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);

  console.log(disableRight, disableLeft)

  const showHideHandler = (direction: string) => () => {
    if (direction === "left" && show >= 1) {
      setShow((show) => show - 1);
    }

    if (direction === "left" && show === 1) {
      setHideLeft(classes.modal__hide);
      setDisableLeft(true);
    } else {
      setHideLeft("");
      setDisableLeft(false);
    }

    if (direction === "right" && show <= Math.floor(images.length / 10) - 1) {
      setShow((show) => show + 1);
    }

    if (direction === "right" && show === Math.floor(images.length / 10) - 1) {
      setHideRight(classes.modal__hide);
      setDisableRight(true);
    } else {
      setHideRight("");
      setDisableRight(false);
    }
  };

  const style = (idx: number) => ({
    transform: `translateX(-${show * 1000}%)`,
    "--element-opacity": idx === imageIndex ? "0" : "",
    "--element-border":
      idx === imageIndex ? "3px solid var(--color-primary)" : "",
  });

  return (
    <div className={classes.modal}>
      <div className={classes.modal__container}>
        <div className={classes.modal__image}>
          {images.map((image, idx) => (
            <div
              style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              key={idx}
              className={classes.modal__image_container}
            >
              <img
                src={`http://photos.hotelbeds.com/giata/original/${image.path}`}
                alt="hotel images"
                className={classes.modal__image_img}
              />
            </div>
          ))}
        </div>
        <div className={classes.modal__carousel}>
          {images.map((image, idx) => (
            <div
              onClick={() => dispatch(hotelActions.getImageIndex(idx))}
              key={idx}
              style={style(idx)}
              className={classes.modal__carousel__images}
            >
              <img
                src={`http://photos.hotelbeds.com/giata/small/${image.path}`}
                alt="hotel images"
                className={classes.modal__carousel__images_img}
              />
            </div>
          ))}
          <button
            className={`${classes.modal_btn} ${classes.modal_leftbtn} ${hideLeft}`}
            onClick={showHideHandler("left")}
            disabled={disableLeft}
          >
            <BiChevronLeft className={classes.modal__icon} size="2.2rem" opacity=".5"/>
          </button>
          <button
            className={`${classes.modal_btn} ${classes.modal_rightbtn} ${hideRight}`}
            onClick={showHideHandler("right")}
            disabled={disableRight}
          >
            <BiChevronRight className={classes.modal__icon} size="2.2rem"  opacity=".5"/>
          </button>
        </div>
        <button className={classes.modal__close} onClick={closeModal}>
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
