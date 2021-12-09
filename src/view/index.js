import React, { useRef, useMemo } from "react";

import PageHeader from "./components/PageHeader";

import LandingSection from "./sections/landing";
import BusinessSection from "./sections/business";
import SuccessStoriesSection from "./sections/success-stories";

import useSmoothHorizontalScrollRef from "../hooks/useSmoothHorizontalScrollRef";

const Home = () => {
  const containerRef = useRef();
  useSmoothHorizontalScrollRef(containerRef);

  return useMemo(
    () => (
      <div>
        <PageHeader />
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
