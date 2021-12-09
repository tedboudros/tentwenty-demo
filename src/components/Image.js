import React, { useRef } from "react";

import useIsInViewport from "../hooks/useIsInViewport";

const getEffectClassName = (effect) => {
  switch (effect) {
    case "rotating":
      return "image--rotating";
    case "smooth-pop-in":
      return "image--smooth-pop-in";
    default:
      return "";
  }
};

const Image = ({
  effect,
  className,
  fullyVisible = false,
  startHidden,
  ...rest
}) => {
  const imageRef = useRef();
  const isInViewport = useIsInViewport(imageRef, !fullyVisible, startHidden);

  return (
    <img
      ref={imageRef}
      className={`image ${!isInViewport ? "hidden" : ""} ${
        className || ""
      } ${getEffectClassName(effect)}`}
      {...rest}
    />
  );
};

export default Image;
