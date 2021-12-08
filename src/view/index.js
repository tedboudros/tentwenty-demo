import React, { useRef, useMemo } from "react";

import PageHeader from "./components/PageHeader";

import LandingSection from "./sections/landing";
import BusinessSection from "./sections/business";
import SuccessStoriesSection from "./sections/success-stories";

import useSmoothHorizontalScrollRef from "../hooks/useSmoothHorizontalScrollRef";

// the urls don't lead anywhere :(
const headerLeftSideConfig = [
  { text: "Private clients", url: "/private-clients" },
  { text: "Corporates", url: "/corporates" },
  { text: "Insights", url: "/insights" },
  { text: "Contact", url: "/contact" },
];

const headerRightSideConfig = [
  { text: "About", url: "/about" },
  { text: "Careers", url: "/careers" },
];

const Home = () => {
  const containerRef = useRef();
  useSmoothHorizontalScrollRef(containerRef);

  return useMemo(
    () => (
      <div>
        <PageHeader
          leftSideConfig={headerLeftSideConfig}
          rightSideConfig={headerRightSideConfig}
        />
        <div className="scroll-wrapper" ref={containerRef}>
          <LandingSection />
          <BusinessSection />
          <SuccessStoriesSection />
        </div>
      </div>
    ),
    []
  );
};

export default Home;
