import React, { useRef } from "react";

import useIsInViewport from "../../../hooks/useIsInViewport";

const ScrollingText = () => {
  const topTextRef = useRef();
  const bottomTextRef = useRef();
  const topIsInViewport = useIsInViewport(topTextRef, false);
  const bottomIsInViewport = useIsInViewport(bottomTextRef, true);

  return (
    <div className="success-stories__text-container">
      <span
        className={`success-stories__title${!topIsInViewport ? " hidden" : ""}`}
        ref={topTextRef}
      >
        Diversifying For
      </span>
      <span
        className={`success-stories__title success-stories__title--bottom${
          !bottomIsInViewport || !topIsInViewport ? " hidden" : ""
        }`}
        ref={bottomTextRef}
      >
        A More Secure Future
      </span>
    </div>
  );
};

export default ScrollingText;
