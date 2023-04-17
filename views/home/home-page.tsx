import useMediaQuery from "hook/use-media-query";
import Carousel from "components/ui/carousel";
import CarouselHeader from "components/ui/carousel/carousel-header";
import Accordion from "components/ui/accordion";
import { filter } from "utils";
import { HotelDataType } from "types";
import { Fragment, ReactNode } from "react";

function accordionArray(data: any[], arr: ReactNode[], idx: number) {
  if (idx > data.length - 1) {
    return;
  }

  let index = idx;
  let _arr = [];
  for (let i = index; i < index + 5; i++) {
    _arr.push(<Accordion title={data[i].city} hotels={data[i].hotels} />);
  }
  arr.push(<div>{_arr}</div>);

  accordionArray(data, arr, index + 5);
}

const HomePage = ({ hotels }: { hotels: HotelDataType[] }) => {
  const width = useMediaQuery();
  const isMobile = width < 768;

  const cities = filter.cityFilter(hotels);

  let accordions: ReactNode[] = [];
  accordionArray(cities, accordions, 0);

  return (
    <Fragment>
      <div className="mt-40">
        <CarouselHeader title="See Destinations" />
        <Carousel data={hotels} column={!isMobile ? 4 : 1} itemNumber={10} />
      </div>
      <div className="mt-40">
        <CarouselHeader title="Top Attractions" />
        <Carousel localImages={["snow", "river"]} column={!isMobile ? 2 : 1} />
      </div>
      <div className="container">
        <div className="grid grid-cols-4 gap-x-4 mt-40 mb-40 @screen md:grid-cols-2">
          {accordions}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
