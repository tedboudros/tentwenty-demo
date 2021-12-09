import React from "react";

import Button from "../../../components/Button";
import AnimatedText from "../../../components/AnimatedText";

const BottomSection = () => {
  return (
    <div className="success-stories__bottom-section">
      <AnimatedText
        effect="fade-down"
        className="success-stories__bottom-section__text"
      >
        <Button text="Make Enquiry" />
        Diversifying For A More Secure Future
      </AnimatedText>
    </div>
  );
};

export default BottomSection;
