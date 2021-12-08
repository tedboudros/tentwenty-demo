import React from "react";

import Image from "../../../components/Image";
import ScrollingText from "./ScrollingText";

import BackgroundSVG from "../../../assets/svg/success-stories-bg.svg";
import PortraitIMG from "../../../assets/images/success-stories-portrait.png";

const SuccessStoriesSection = () => {
  return (
    <section className="success-stories">
      <BackgroundSVG className="success-stories__bg" />
      <Image src={PortraitIMG} />
      <ScrollingText />
    </section>
  );
};

export default SuccessStoriesSection;
