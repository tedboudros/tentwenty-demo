import React, { useState, useMemo } from "react";

const Links = ({ config }) => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  return useMemo(
    () => (
      <div className={`links${isHovering ? " hovering" : ""}`}>
        {(config || []).map((link) => (
          <a
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            key={link.url}
            href={link.url}
          >
            {link.text}
          </a>
        ))}
      </div>
    ),
    [isHovering]
  );
};

export default Links;
