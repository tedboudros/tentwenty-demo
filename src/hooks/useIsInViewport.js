import { useEffect, useState, useCallback } from "react";
import useDebounce from "./useDebounce";

const useIsInViewport = (
  ref,
  partiallyInViewport = true,
  startHidden = false
) => {
  const [isInViewport, setIsInViewport] = useState(!startHidden);
  const debounce = useDebounce();

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left + (partiallyInViewport ? rect.width : 0) >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right - (partiallyInViewport ? rect.width : 0) <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const onVisibilityChange = useCallback(() => {
    const newIsInViewport = isElementInViewport(ref.current);

    if (newIsInViewport !== isInViewport) {
      setIsInViewport(newIsInViewport);
    }
  }, [isInViewport]);

  const onVisibilityChangeDebounced = debounce(onVisibilityChange, 100);

  useEffect(() => {
    window.addEventListener("load", onVisibilityChangeDebounced, false);
    window.addEventListener("wheel", onVisibilityChangeDebounced, false);
    window.addEventListener("resize", onVisibilityChangeDebounced, false);
    return () => {
      window.removeEventListener("load", onVisibilityChangeDebounced, false);
      window.removeEventListener("wheel", onVisibilityChangeDebounced, false);
      window.removeEventListener("resize", onVisibilityChangeDebounced, false);
    };
  }, [isInViewport]);

  return isInViewport;
};

export default useIsInViewport;
