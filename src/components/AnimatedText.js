import React, { useRef } from "react";

import useIsInViewport from "../hooks/useIsInViewport";

const getEffectClassName = (effect) => {
  switch (effect) {
    case "fade-up":
      return "animated-text--fade-up";
    case "fade-down":
      return "animated-text--fade-down";
    default:
      return "";
  }
};

const AnimatedText = ({
  effect,
  className,
  children,
  fullyVisible = false,
  startHidden,
}) => {
  const textRef = useRef();
  const isInViewport = useIsInViewport(textRef, !fullyVisible, startHidden);

  return (
    <div
      ref={textRef}
      className={`animated-text ${!isInViewport ? "hidden" : ""} ${
        className || ""
      } ${getEffectClassName(effect)}`}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
