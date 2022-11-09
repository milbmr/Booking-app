import { MutableRefObject, useEffect, useRef} from "react";

function useClick (ref: MutableRefObject<HTMLDivElement | null>, callback: () => void): void {
  
    useEffect(() => {
      const listener = (e: Event) => {
        e.preventDefault();
        if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
          callback();
        }
  
        
  
        document.addEventListener("click", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("click", listener);
          document.removeEventListener("touchstart", listener);
        };
      };
    });
  };




/*const useClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as HTMLDivElement)) {
        return;
      }

      console.log('run')
      callback();

      document.addEventListener("click", listener);
      //document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("click", listener);
        //document.removeEventListener("touchstart", listener);
      };
    };
  }, [ref]);

  return ref;
};*/

export default useClick;
