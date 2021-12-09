import React from "react";

import Image from "../../../components/Image";
import ScrollingText from "./ScrollingText";

import BackgroundSVG from "../../../assets/svg/success-stories-bg.svg";
import PortraitIMG from "../../../assets/images/success-stories-portrait.png";
import TopHeading from "./TopHeading";
import BottomSection from "./BottomSection";

const SuccessStoriesSection = () => {
  return (
    <section className="success-stories">
      <div className="safe-area">
        <BackgroundSVG className="success-stories__bg" />
        <TopHeading />
        <div className="success-stories__portrait-container">
          <Image
            effect="rotating"
            src={PortraitIMG}
            fullyVisible
            className="success-stories__portrait"
          />
        </div>
        <BottomSection />
        <ScrollingText />
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
