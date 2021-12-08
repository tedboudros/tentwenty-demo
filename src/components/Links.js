import React, { useState } from "react";

const Links = ({ config }) => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => setIsHovering(true);

  const onMouseLeave = () => setIsHovering(false);

  return (
    <div className={`links${isHovering ? " hovering" : ""}`}>
      {(config || []).map((link) => (
        <a
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          key={link.url}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Links;
