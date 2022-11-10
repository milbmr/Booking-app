import Search from "../components/search/Search";
import Carousel from "../components/ui/carousel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Search />
        <Carousel />
      </div>
    </>
  );
}
