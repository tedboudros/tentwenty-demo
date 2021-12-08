import React from "react";
import Button from "./Button";

const PageHeaderLinks = ({ config }) => {
  return (
    <div className="page-header__links">
      {(config || []).map((link, index) => (
        <a>{link.text}</a>
      ))}
    </div>
  );
};

const PageHeader = ({ leftSideConfig, rightSideConfig }) => {
  return (
    <div className="page-header">
      <div className="page-header__left">
        <div className="page-header__left__logo" />
        <PageHeaderLinks config={leftSideConfig} />
      </div>
      <div className="page-header__right">
        <PageHeaderLinks config={rightSideConfig} />
        <Button text="Book A meeting" />
      </div>
    </div>
  );
};

export default PageHeader;
