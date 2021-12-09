import React from "react";

import ButtonInput from "../../components/ButtonInput";
import Button from "../../components/Button";
import Links from "../../components/Links";

import SearchSvg from "../../assets/svg/search.svg";

import { leftSideConfig, rightSideConfig } from "../../helpers/menu-links";

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="page-header__left">
        <div className="page-header__left__logo" />
        <Links config={leftSideConfig} />
      </div>
      <div className="page-header__right">
        <Links config={rightSideConfig} />
        <ButtonInput>
          <SearchSvg width={14} height={14} />
        </ButtonInput>
        <Button text="Book A meeting" />
      </div>
    </div>
  );
};

export default PageHeader;
