import { useState } from "react";
import useMediaQuery from "hook/use-media-query";
import Modal from "components/ui/modal";
import classes from "./image-grid.module.scss";
import { useAppDispatch } from "store/hooks";
import { hotelActions } from "store/slices/hotels-slice";
import { ImageType } from "types";

const images = ["france", "london", "madrid", "rome", "vienna"];

const ImageGrid = ({ images }: { images: ImageType[] | undefined }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const width = useMediaQuery();
  const isMobile = width < 768;

  const showModalHandler = (index: number) => {
    document.body.classList.add("modal--show");
    setShowModal(true);
    dispatch(hotelActions.getImageIndex(index));
  };

  const hideModalHandler = () => {
    document.body.classList.remove("modal--show");
    setShowModal(false);
  };

  const imgNum = isMobile ? 3 : 5;

  if (!images) return null;

  return (
    <div className={classes.grid}>
      {images.slice(0, imgNum).map((image, idx) => (
        <div
          onClick={() => showModalHandler(idx)}
          key={idx}
          className={classes.grid__image + " " + "overlay"}
        >
          <img
            className={classes.grid__image_img}
            src={`http://photos.hotelbeds.com/giata/bigger/${image.path}`}
            alt="hotel image"
          />
        </div>
      ))}
      {showModal && <Modal images={images} closeModal={hideModalHandler} />}
    </div>
  );
};

export default ImageGrid;
