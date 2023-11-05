import React from "react";
import "./MainToDoCardBtn.css";
const MainToDoCardBtn = ({ clickEventHandler, text }) => {
  return <button onClick={clickEventHandler}>{text}</button>;
};

export default MainToDoCardBtn;
