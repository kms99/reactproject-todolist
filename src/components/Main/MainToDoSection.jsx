import React from "react";
import MainToDoCard from "./MainToDoCard";
import "./MainToDoSection.css";

const MainToDoSection = ({ section, todoList, setTodoList }) => {
  return (
    <div className="section">
      <div className="section-title">
        <span>{section}</span>
      </div>

      {todoList.filter((todo) => {
        return todo.isDone === (section === "해야하는일") ? false : true;
      }).length !== 0 ? (
        <ul className="section-ul">
          {todoList
            .filter((todo) => {
              return todo.isDone === (section === "해야하는일") ? false : true;
            })
            .map((item) => (
              <MainToDoCard
                key={item.id}
                currentTodo={item}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))}
        </ul>
      ) : (
        <div className="default-message">오늘의 TO-DO List를 등록해보세요.</div>
      )}
    </div>
  );
};

export default MainToDoSection;
