import { useState, useRef } from "react";

const useTouch = (length: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [initialTouchPosition, setInitialTouchPosition] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const slideWidth =
    (containerRef.current?.firstChild as HTMLElement)?.clientWidth ?? 0;

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setInitialTouchPosition(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isSwiping) {
      const touchPosition = event.touches[0].clientX;
      const distance = touchPosition - initialTouchPosition;
      if (containerRef.current) {
        //containerRef.current.style.transform = `translateX(${distance}px)`;
      }
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isSwiping) {
      const touchPosition = event.changedTouches[0].clientX;
      const distance = touchPosition - initialTouchPosition;
      const threshold = slideWidth / 4; // Swipe distance threshold
      if (Math.abs(distance) > threshold) {
        if (distance > 0) {
          setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1));
        } else {
          setCurrentSlideIndex(Math.min(length - 1, currentSlideIndex + 1));
        }
      }
      const targetPosition = -currentSlideIndex * slideWidth;
      if (containerRef.current) {
        containerRef.current.style.transition = "transform 0.3s ease-in-out";
        containerRef.current.style.transform = `translateX(${targetPosition}px)`;
      }
      setIsSwiping(false);
    }
  };

  return {
    containerRef,
    currentSlideIndex,
    handleTouchEnd,
    handleTouchStart,
    handleTouchMove,
  };
};

export default useTouch;
