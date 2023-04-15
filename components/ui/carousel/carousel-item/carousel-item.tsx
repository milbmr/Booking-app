import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./carousel-item.module.scss";

const CarouselItem = ({
  index,
  image,
  column,
  link,
}: {
  index: number;
  image: string;
  column: number;
  link: string;
}) => {
  const router = useRouter();
  const path = router.route === "/" ? `/hotels/${link}` : `/${link}`;
  return (
    <div
      style={{
        transform: `translateX(-${index * 100}%)`,
        minWidth: `${100 / column}%`,
      }}
      className={classes.carouselItem}
    >
      <Link href={path}>
        <Image src={image} alt={image} width="800" height="800" />
      </Link>
    </div>
  );
};

export default CarouselItem;
