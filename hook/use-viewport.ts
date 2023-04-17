import { useState, useEffect } from "react";

const useViewport = () => {
  const [isViewport, setIsViewport] = useState(false);

  useEffect(() => {
    setIsViewport(true);
  }, []);

  return { isViewport };
};

export default useViewport;
