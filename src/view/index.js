import React, { useRef, memo } from "react";

import PageHeader from "../components/PageHeader";
import Landing from "./sections/landing";

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

const HomeInner = memo(() => {
  console.log("this is rendering");

  return (
    <>
      <Landing />
    </>
  );
});

const Home = () => {
  const horizontalScroll = useSmoothHorizontalScrollRef();

  return (
    <div>
      <PageHeader
        leftSideConfig={headerLeftSideConfig}
        rightSideConfig={headerRightSideConfig}
      />
      <div className="scroll-wrapper" {...horizontalScroll}>
        <HomeInner />
      </div>
    </div>
  );
};

export default Home;
