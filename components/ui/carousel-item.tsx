import classes from "./carousel-item.module.scss";

const CarouselItem = ({ index, image }: { index: number; image: string }) => {
  return (
    <div
      style={{ transform: `translateX(-${index * 100}%)` }}
      className={classes.carouselItem}
    >
      <img src={`/images/${image}.jpg`} alt={`${image}`} />
    </div>
  );
};

export default CarouselItem;
