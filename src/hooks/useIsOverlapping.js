import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useIsOverlapping = (firstElementRef, secondElementRef, isFullyInside) => {
  const [isOverlapping, setIsOverlapping] = useState(true);
  const debounce = useDebounce();

  const areElementsOverlapping = (el1, el2) => {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return !(
      rect1.top > rect2.bottom ||
      rect1.right < rect2.left ||
      rect1.bottom < rect2.top ||
      rect1.left > rect2.right
    );
  };

  const isFirstElementInsideSecond = (el1, el2) => {
    var rect1 = el1.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();

    return (
      rect2.top <= rect1.top &&
      rect1.top <= rect2.bottom &&
      rect2.top <= rect1.bottom &&
      rect1.bottom <= rect2.bottom &&
      rect2.left <= rect1.left &&
      rect1.left <= rect2.right &&
      rect2.left <= rect1.right &&
      rect1.right <= rect2.right
    );
  };

  const onVisibilityChange = useCallback(() => {
    const newIsOverlapping = (
      isFullyInside ? isFirstElementInsideSecond : areElementsOverlapping
    )(firstElementRef.current, secondElementRef.current);

    if (newIsOverlapping !== isOverlapping) {
      setIsOverlapping(newIsOverlapping);
    }
  }, [isOverlapping]);

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
  }, [isOverlapping, firstElementRef, secondElementRef]);

  return isOverlapping;
};

export default useIsOverlapping;
