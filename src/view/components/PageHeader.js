import React from "react";
import Button from "../../components/Button";
import Links from "../../components/Links";

const PageHeader = ({ leftSideConfig, rightSideConfig }) => {
  return (
    <div className="page-header">
      <div className="page-header__left">
        <div className="page-header__left__logo" />
        <Links config={leftSideConfig} />
      </div>
      <div className="page-header__right">
        <Links config={rightSideConfig} />
        <Button text="Book A meeting" />
      </div>
    </div>
  );
};

export default PageHeader;
