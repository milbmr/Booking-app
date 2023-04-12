import Image from "next/image";
import classes from "./carousel-item.module.scss";

const CarouselItem = ({
  index,
  image,
  column,
}: {
  index: number;
  image: string;
  column: number;
}) => {
  return (
    <div
      style={{
        transform: `translateX(-${index * 100}%)`,
        minWidth: `${100 / column}%`,
      }}
      className={classes.carouselItem}
    >
      <Image src={image} alt={image} width="800" height="800" />
    </div>
  );
};

export default CarouselItem;
