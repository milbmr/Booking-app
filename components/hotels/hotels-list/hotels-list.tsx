import { useState, useEffect, useRef } from "react";
import { useGetHotelQuery, getHotel } from "store/slices/api-slice";
import HotelItem from "../hotel-item/hotel-item";
import useInfiniteScroll from "hook/use-infinite-scroll";
import { BoxSkeleton } from "components/ui/skeleton";
import Spinner from "components/ui/spinner";
import { randomPrice, randomRating } from "lib/helpers";
import classes from "./hotels-list.module.scss";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";

const HotelsList = () => {
  const [batchNum, setBatchNum] = useState(1);
  const [isRefetch, setIsRefetch] = useState(false);
  const { data, isError, isLoading, isFetching } = useGetHotelQuery(batchNum);
  const [sliceNum, setSliceNum] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useInfiniteScroll(targetRef);

  const maxLength = 20 * batchNum;
  useEffect(() => {
    if (isIntersecting && sliceNum * 5 < maxLength) {
      setSliceNum((slice) => slice + 1);
      setIsRefetch(false);
    } else if (sliceNum * 5 >= maxLength) {
      setIsRefetch(true);
    }
  }, [isIntersecting, maxLength]);

  const refetchHandler = () => {
    setBatchNum((num) => num + 1);
    setSliceNum((slice) => slice + 1);
  };

  console.log(sliceNum, batchNum, isRefetch, isIntersecting);

  const skeletons = new Array(5).fill("").map(() => <BoxSkeleton />);

  if (isError) throw new Error();

  return (
    <div className={classes.hotelslist}>
      {isLoading
        ? skeletons
        : data
            ?.slice(0, sliceNum * 5)
            .map((hotel) => (
              <HotelItem
                key={hotel._id}
                id={hotel._id}
                name={hotel.name.content}
                starRating={hotel.categoryGroupCode}
                image={hotel.images[0].path}
                address={hotel.address.content}
                price={randomPrice(hotel.coordinates.longitude)}
                rating={hotel.coordinates.longitude}
              />
            ))}
      <div ref={targetRef} className={classNames(classes.container)}>
        {isRefetch || isFetching ? (
          <button
            className={classNames(classes.button)}
            onClick={refetchHandler}
          >
            {isFetching && <Spinner />}
            <span
              className={classNames(classes.button_text, {
                [classes.hide]: isFetching,
              })}
            >
              Load More
            </span>
          </button>
        ) : (
          isIntersecting && (
            <div className={classNames(classes.loading)}>
              <Spinner color="#1971c2" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HotelsList;
