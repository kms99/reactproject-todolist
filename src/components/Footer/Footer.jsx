import React from "react";
import FooterCategory from "./FooterCategory";
import FooterMyInfo from "./FooterMyInfo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <FooterMyInfo />
      <div className="footer-category">
        <FooterCategory title="주요사이트" />
        <FooterCategory title="내가만든사이트" />
      </div>
    </footer>
  );
};

export default Footer;
