import React, { useRef } from "react";

import useIsInViewport from "../hooks/useIsInViewport";

const getEffectClassName = (effect) => {
  switch (effect) {
    case "rotating":
      return "image--rotating";
    default:
      return "";
  }
};

const Image = ({ effect, className, ...rest }) => {
  const imageRef = useRef();
  const isInViewport = useIsInViewport(imageRef, false);

  return (
    <img
      ref={imageRef}
      className={`image ${
        !isInViewport ? "hidden" : ""
      } ${className} ${getEffectClassName(effect)}`}
      {...rest}
    />
  );
};

export default Image;
