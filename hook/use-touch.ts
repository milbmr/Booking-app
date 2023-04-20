import { useState, useRef, RefObject } from "react";

export function useStateRef<S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef<S>(defaultValue);
  const [state, _setState] = useState<S>(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}

const useTouch = (length: number) => {
  /*const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  console.log(offsetX)

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);

    currentOffsetXRef.current = offsetXRef.current!;
    startXRef.current = e.touches[0].clientX;

    console.log(currentOffsetXRef.current)
    console.log(startXRef.current)

    const containerEl = containerRef.current;
    const containerWidth = containerEl!.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl!.scrollWidth;

    console.log(containerEl!.scrollWidth)
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentX = e.changedTouches[0].clientX;
    //const diff = startXRef.current - currentX;
    //let newOffsetX = currentOffsetXRef.current - diff;
    const offse = currentX - startXRef.current

    console.log(offse)

    const maxOffsetX = 0;
    const minOffsetX = minOffsetXRef.current;

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(offse);
  };

  const MIN_SWIPE_REQUIRED = 40;
  const onTouchEnd = () => {
    const currentOffsetX = currentOffsetXRef.current;
    const containerWidth = containerWidthRef.current;
    let newOffsetX = offsetXRef.current!;

    const diff = currentOffsetX - newOffsetX;

    // we need to check difference in absolute/positive value (if diff is more than 40px)
    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        // swipe to the left if diff is negative
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      // remain in the current image
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.abs(newOffsetX / containerWidth));
  };

  const indicatorOnClick = (idx: number) => {
    const containerEl = containerRef.current;
    const containerWidth = containerEl!.offsetWidth;

    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  };

  return {offsetX, containerRef, onTouchStart, onTouchMove, onTouchEnd}*/

  const containerRef = useRef<HTMLUListElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [distance, setDistance] = useState(0);
  const distanceRef = useRef(0);
  const currentOffset = useRef(0);
  const minOffset = useRef(0);
  const startRef = useRef(0);
  const [initialTouchPosition, setInitialTouchPosition] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const slideWidth =
    (containerRef.current?.firstChild as HTMLElement)?.clientWidth ?? 0;
  const containerWidth = containerRef.current?.offsetWidth!;

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    currentOffset.current = distance;
    startRef.current = event.changedTouches[0].clientX;

    minOffset.current = containerWidth - length * containerWidth;

    setInitialTouchPosition(event.changedTouches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchPosition = event.changedTouches[0].clientX;
    const diff = startRef.current - touchPosition;
    let distance = currentOffset.current - diff;

    const max = 0;
    const min = minOffset.current;
    if (distance > 0) {
      distance = max;
    }

    if (distance < min) {
      distance = min;
    }

    setDistance(distance);
    /* if (containerRef.current) {
        setDistance(distance)
        containerRef.current.style.transform = `translateX(${distance}px)`;
      } */
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const current = currentOffset.current;
    const diff = current - distance;
    let newDic = distance;
    const threshold = containerWidth / 4; // Swipe distance threshold
    if (Math.abs(distance) > threshold) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newDic = Math.floor(newDic / containerWidth) * containerWidth;
      } else {
        // swipe to the left if diff is negative
        newDic = Math.ceil(newDic / containerWidth) * containerWidth;
      }
    } else {
      // remain in the current image
      newDic = Math.round(newDic / containerWidth) * containerWidth;
    }
    const targetPosition = -currentSlideIndex * slideWidth;
    setDistance(newDic);
    setIsSwiping(false);
  };

  return {
    containerRef,
    currentSlideIndex,
    distance,
    handleTouchEnd,
    handleTouchStart,
    handleTouchMove,
  };
};

export default useTouch;
