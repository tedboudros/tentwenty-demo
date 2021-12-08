import React, { useRef } from "react";

import useIsInViewport from "../../../hooks/useIsInViewport";

const TopHeading = () => {
  const textRef = useRef();
  const isInViewport = useIsInViewport(textRef, false);

  return (
    <div className="success-stories__top-container">
      <div
        className={`success-stories__heading${!isInViewport ? " hidden" : ""}`}
        ref={textRef}
      >
        Success Stories
        <br />
        Our Capabilities In Action
      </div>
    </div>
  );
};

export default TopHeading;
