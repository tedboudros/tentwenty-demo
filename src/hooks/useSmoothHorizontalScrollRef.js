import { useState, useEffect, useCallback } from "react";

const MULTIPLIER = 1.3;

const useSmoothHorizontalScrollRef = (ref) => {
  const [transformLeft, setTransformLeft] = useState(0);

  const containerWidth = ref.current?.clientWidth - screen.width;

  const handleScroll = useCallback(
    (e) => {
      // TODO: Add touch and horizontal scroll support. Now we calculate only using deltaY
      let newLeft = transformLeft - e.deltaY * MULTIPLIER;
      if (newLeft > 0) newLeft = 0;
      if (-newLeft > containerWidth) newLeft = -containerWidth;

      setTransformLeft(newLeft);
      if (ref.current) ref.current.style.transform = `translateX(${newLeft}px)`;
    },
    [transformLeft]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [transformLeft]);
};

export default useSmoothHorizontalScrollRef;
