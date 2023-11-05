import React from "react";
import HeaderTitle from "./HeaderTitle";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <HeaderTitle />
      <div className="header-label">
        <div className="header-label__text">
          <span>1 일</span>
          <span>완성</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
