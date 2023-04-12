import { useEffect, useState } from "react";

const useMediaQuery = (width: string) => {
  const [media, setMedia] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", (e: any) => setMedia(e.matches));
    return () =>
      media.removeEventListener("change", (e: any) => setMedia(e.matches));
  }, []);

  return media;
};

export default useMediaQuery;
