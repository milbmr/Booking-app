import { Suspense } from "react";
import { useAppSelector } from "store/hooks";
import HotelsMain from "components/hotels/hotels-main/hotels-main";
import { LayoutHotels } from "components/layout";
import { wrapper } from "store";
import { getHotel, getRunningQueriesThunk } from "store/slices/api-slice";


const HotelsPage = () => {
  const hotels = useAppSelector((state) => state);
  return (
    <LayoutHotels>
      <HotelsMain />
    </LayoutHotels>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getHotel.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default HotelsPage;
