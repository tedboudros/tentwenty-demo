import React, { useRef } from "react";

import useIsInViewport from "../../../hooks/useIsInViewport";

const LandingSection = () => {
  const textRef = useRef();
  const isInViewport = useIsInViewport(textRef);

  return (
    <section className="landing">
      <div className="safe-area">
        <div
          className={`landing__bottom_container${
            !isInViewport ? " hidden" : ""
          }`}
          ref={textRef}
        >
          <span className="landing__heading">If not now, then when?</span>
          <span className="landing__title">
            Time to make your wealth work for you
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
