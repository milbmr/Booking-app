import { Suspense } from "react";
import useMediaQuery from "hook/use-media-query";
import HotelsList from "../hotels-list/hotels-list";
import classes from "./hotels-main.module.scss";
import dynamic from "next/dynamic";

const MapNoSSR = dynamic(() => import("components/ui/map"), {
  ssr: false,
});

const HotelsMain = () => {
  const width = useMediaQuery();
  const isMobile = width < 768;
  return (
    <div className={classes.hotels}>
      <div className={classes.hotels__list}>
        <HotelsList />
      </div>
      {!isMobile && (
        <div className={classes.hotels__map}>
          <MapNoSSR />
        </div>
      )}
    </div>
  );
};

export default HotelsMain;
