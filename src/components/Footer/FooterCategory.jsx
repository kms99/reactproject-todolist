import React from "react";
import "./FooterCategory.css";

const FooterCategory = ({ title }) => {
  const mySite = [
    { title: "깃허브", src: "https://github.com/kms99" },
    { title: "블로그", src: "https://audtjqxx.tistory.com/" },
  ];
  const makeSite = [
    { title: "시계", src: "https://kms99.github.io/ToyProject-clock/" },
    { title: "계산기", src: "https://kms99.github.io/ToyProject-calculator/" },
    { title: "영화정보", src: "https://movie-info-page.vercel.app/" },
    { title: "todoList1", src: "https://react-todolist-theta-two.vercel.app/" },
  ];

  return (
    <div className="footer-category-container">
      <span>{title}</span>
      <ul>
        {(title === "주요사이트" ? mySite : makeSite).map((item) => {
          return (
            <li>
              <a href={item.src}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterCategory;
