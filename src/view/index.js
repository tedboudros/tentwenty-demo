import PageHeader from "../components/PageHeader";
import React from "react";

import Landing from "./sections/landing";

const Home = () => {
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

  return (
    <div className="home-wrapper">
      <PageHeader
        leftSideConfig={headerLeftSideConfig}
        rightSideConfig={headerRightSideConfig}
      />
      <Landing />
    </div>
  );
};

export default Home;
