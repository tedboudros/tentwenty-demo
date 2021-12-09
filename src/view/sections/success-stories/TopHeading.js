import React, { useRef } from "react";

import useIsInViewport from "../../../hooks/useIsInViewport";
import Links from "../../../components/Links";
import { leftSideConfig } from "../../../helpers/menu-links";

const TopHeading = () => {
  const textRef = useRef();
  const isInViewport = useIsInViewport(textRef, false);

  return (
    <div className="success-stories__top-container">
      <div
        className={`success-stories__heading${!isInViewport ? " hidden" : ""}`}
        ref={textRef}
      >
        <span>Success Stories</span>
        <span>Our Capabilities In Action</span>
      </div>
      <div
        className={`success-stories__links${!isInViewport ? " hidden" : ""}`}
      >
        <Links config={leftSideConfig} />
      </div>
    </div>
  );
};

export default TopHeading;
