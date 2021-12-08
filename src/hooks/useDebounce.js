import { useState } from "react";

const useDebounce = () => {
  const [timeoutRef, setTimeoutRef] = useState();

  return (fn, time = 16) =>
    () => {
      if (timeoutRef) clearTimeout(timeoutRef);
      setTimeoutRef(
        setTimeout(() => {
          fn();
          setTimeoutRef(null);
        }, time)
      );
    };
};

export default useDebounce;
