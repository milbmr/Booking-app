import { MutableRefObject, useEffect} from "react";

export function useClick (ref: MutableRefObject<HTMLDivElement | null>, callback: () => void): void {
  
    useEffect(() => {
      const listener = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
        
          callback();
        }
  
        
  
        document.addEventListener("click", listener);
        //document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("click", listener);
          //document.removeEventListener("touchstart", listener);
        };
      };
    }, [ref]);
  };




/*export const useClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }

      callback();

      document.addEventListener("click", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("click", listener);
        document.removeEventListener("touchstart", listener);
      };
    };
  }, [ref]);

  return ref;
};*/
