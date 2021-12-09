import { useState, useEffect, useCallback } from "react";

const MULTIPLIER = 1.5;

const useSmoothHorizontalScrollRef = (ref) => {
  const [transformLeft, setTransformLeft] = useState(0);

  const handleScroll = useCallback(
    (e) => {
      const containerWidth =
        ref.current?.clientWidth -
        (window.innerWidth || document.documentElement.clientWidth);

      // TODO: Add touch and horizontal scroll support. Now we calculate only using deltaY
      let newLeft = transformLeft - (e.deltaY || 0) * MULTIPLIER;
      if (newLeft > 0) newLeft = 0;
      if (-newLeft > containerWidth) newLeft = -containerWidth;

      setTransformLeft(newLeft);
      if (ref.current) ref.current.style.transform = `translateX(${newLeft}px)`;
    },
    [transformLeft]
  );

  useEffect(() => {
    window.addEventListener("load", handleScroll);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [transformLeft]);
};

export default useSmoothHorizontalScrollRef;
