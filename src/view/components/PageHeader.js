import React, { useRef } from "react";

import ButtonInput from "../../components/ButtonInput";
import Button from "../../components/Button";
import Links from "../../components/Links";

import SearchSvg from "../../assets/svg/search.svg";

import { leftSideConfig, rightSideConfig } from "../../helpers/menu-links";
import useIsOverlapping from "../../hooks/useIsOverlapping";

const PageHeader = ({ lightAreaRef }) => {
  const leftSideRef = useRef();
  const rightSideRef = useRef();

  const isLeftSideOverlapping = useIsOverlapping(
    leftSideRef,
    lightAreaRef,
    true,
    false
  );
  const isRightSideOverlapping = useIsOverlapping(
    rightSideRef,
    lightAreaRef,
    true,
    false
  );

  return (
    <div className="page-header">
      <div
        ref={leftSideRef}
        className={`page-header__left ${isLeftSideOverlapping ? "dark" : ""}`}
      >
        <div className="page-header__left__logo" />
        <Links config={leftSideConfig} />
      </div>
      <div
        ref={rightSideRef}
        className={`page-header__right ${isRightSideOverlapping ? "dark" : ""}`}
      >
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
