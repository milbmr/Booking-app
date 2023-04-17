import { useEffect, useState } from "react";
import useViewport from "./use-viewport";

const useMediaQuery = () => {
  const [media, setMedia] = useState<number>(0);
  const { isViewport } = useViewport();

  useEffect(() => {
    const handleView = () => setMedia(isViewport ? window.innerWidth : 0);
    handleView();

    window.addEventListener("resize", handleView);
    return () => window.removeEventListener("resize", handleView);
  }, [isViewport]);

  return media;
};

export default useMediaQuery;
