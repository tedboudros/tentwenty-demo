import { useRef, useState, useEffect, useCallback } from "react";

const useSmoothHorizontalScrollRef = (transitionTime = 400) => {
  const ref = useRef();

  const [transformLeft, setTransformLeft] = useState(0);

  const doScroll = useCallback(
    (delta) => {
      const newLeft = transformLeft + delta;
      setTransformLeft(newLeft >= 0 ? 0 : newLeft);
    },
    [transformLeft]
  );

  const handleScroll = (e) => {
    doScroll(e.deltaY);
  };

  console.log(`translateX(${transformLeft}px)`);

  useEffect(() => {
    // TODO: Add touch and horizontal scroll support. Now we calculate only using deltaY
    if (ref.current) ref.current.addEventListener("wheel", handleScroll);

    return () => {
      if (ref.current) ref.current.removeEventListener("wheel", handleScroll);
    };
  }, [ref, transformLeft]);

  return {
    ref,
    style: {
      transform: `translateX(${transformLeft}px)`,
      transition: `${transitionTime}ms ease-in-out`,
    },
  };
};

export default useSmoothHorizontalScrollRef;
