import React from "react";

import BusinessLeft from "../../../assets/images/business_left.png";
import BusinessCenter from "../../../assets/images/business_center.png";
import BusinessRight from "../../../assets/images/business_right.png";

import Image from "../../../components/Image";

const BusinessSection = () => {
  return (
    <section className="business">
      <Image
        width="892px"
        height="594px"
        effect="smooth-pop-in"
        className="business__img--left"
        src={BusinessLeft}
      />
      <Image
        width="388px"
        height="312px"
        effect="smooth-pop-in"
        className="business__img--center"
        fullyVisible
        src={BusinessCenter}
      />
      <Image
        width="230px"
        height="312px"
        effect="smooth-pop-in"
        className="business__img--right"
        fullyVisible
        src={BusinessRight}
      />
    </section>
  );
};

export default BusinessSection;
