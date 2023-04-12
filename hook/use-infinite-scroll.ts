import { useState, useEffect, RefObject } from "react";

const useInfiniteScroll = (ref: RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const callback = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersecting(true);
    } else if (!target.isIntersecting) {
      setIsIntersecting(false);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "10px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callback, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref.current]);

  return {
    isIntersecting,
  };
};

export default useInfiniteScroll;
