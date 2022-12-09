import { useEffect, MutableRefObject, useRef } from "react";

function useClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (e: Event) => {
      e.preventDefault();

      const target = e.target as HTMLDivElement;

      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("touchstart", listener);
    };
  });

  return ref;
}

export default useClick;
