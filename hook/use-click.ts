import { useEffect, useRef, MutableRefObject } from "react";

function useClick(
  callback: () => void,
  ref: MutableRefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const listener = (e: Event) => {
      e.preventDefault();

      const target = e.target as HTMLDivElement;
      const node = ref.current?.contains(target);

      if (ref.current !== null && !node) callback();
    };

    document.addEventListener("click", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
}

export default useClick;
