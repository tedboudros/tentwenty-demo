import React from "react";

import BusinessLeft from "../../../assets/images/business-left.png";
import BusinessCenter from "../../../assets/images/business-center.png";
import BusinessRight from "../../../assets/images/business-right.png";
import BusinessSideBG from "../../../assets/images/business-side-bg.png";

import Image from "../../../components/Image";
import AnimatedText from "../../../components/AnimatedText";
import BGText from "./BGText";

const BusinessSection = () => {
  return (
    <section className="business">
      <div className="business__inner-container">
        <Image
          width="712px"
          height="512px"
          effect="smooth-pop-in"
          className="business__img business__img--left"
          fullyVisible
          startHidden
          src={BusinessLeft}
        />
        <Image
          width="388px"
          height="312px"
          effect="smooth-pop-in"
          className="business__img business__img--center"
          fullyVisible
          src={BusinessCenter}
        />
        <Image
          width="230px"
          height="312px"
          effect="smooth-pop-in"
          className="business__img business__img--right"
          src={BusinessRight}
        />
        <AnimatedText startHidden effect="fade-up" className="business__title">
          Building A Lasting Legacy
          <br />
          For Individuals, Families And
          <br />
          Businesses Globally
        </AnimatedText>
      </div>
      <BGText />
      <div className="business__side-bg">
        <Image className="business__side-bg__img" src={BusinessSideBG} />
        <BGText />
      </div>
    </section>
  );
};

export default BusinessSection;
