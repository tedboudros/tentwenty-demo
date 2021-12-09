import React from "react";

import Image from "../../../components/Image";
import ScrollingText from "./ScrollingText";

import BackgroundSVG from "../../../assets/svg/success-stories-bg.svg";
import PortraitIMG from "../../../assets/images/success-stories-portrait.png";
import TopHeading from "./TopHeading";

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
            className="success-stories__portrait"
          />
        </div>
        <ScrollingText />
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
