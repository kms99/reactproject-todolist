import React from "react";
import "./HeaderTitle.css";

const HeaderTitle = () => {
  return (
    <div className="title-container">
      <div className="title-container__sub-title">
        리액트를 완벽히 배우고 싶다면
      </div>
      <div className="title-container__main-title">
        <div className="title-logo">
          <span>Do</span>
          <span>it!</span>
        </div>

        <h1 className="title-text">
          <div className="text-blue">
            리액트 공부<span className="delete-bold">를 위한</span>
          </div>
          <div>
            TO-DO LIST<span className="text-bold">프로젝트</span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default HeaderTitle;
