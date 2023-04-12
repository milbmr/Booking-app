import { wrapper } from "store";
import {
  getHotel,
  getRunningQueriesThunk,
  useGetHotelQuery,
} from "store/slices/api-slice";
import Layout from "components/layout/layout/layout";
import { HotelDataType } from "types";
import HomePage from "views/home";

export default function Home() {
  const { data: hotels } = useGetHotelQuery();

  if (!hotels) return null;

  return (
    <Layout>
      <HomePage hotels={hotels} />
    </Layout>
  );
}

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getHotel.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
