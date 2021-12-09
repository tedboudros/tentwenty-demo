import React, { useRef } from "react";

import AnimatedText from "../../../components/AnimatedText";

const LandingSection = () => {
  return (
    <section className="landing">
      <div className="safe-area">
        <div className="landing__bottom_container">
          <AnimatedText effect="fade-up" className="landing__heading">
            If not now, then when?
          </AnimatedText>
          <AnimatedText effect="fade-up" className="landing__title">
            Time to make your wealth work for you
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
