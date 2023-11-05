import React, { useState } from "react";
import "./MainToDoCard.css";
import MainToDoCardBtn from "./MainToDoCardBtn";

const MainToDoCard = ({ currentTodo, todoList, setTodoList }) => {
  const [modifyMode, setModifyMode] = useState(false);
  const [modifyValue, setModifyValue] = useState({
    title: currentTodo.title,
    context: currentTodo.context,
  });

  const doneChangeEventHandler = () => {
    const newTodo = {
      ...currentTodo,
      isDone: currentTodo.isDone ? false : true,
    };
    const newTodoList = [
      ...todoList.filter((todo) => todo.id !== currentTodo.id),
      newTodo,
    ];
    localStorage.setItem("todo", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  const modifyEventHandler = () => {
    if (modifyMode) {
      const newTodo = {
        ...currentTodo,
        ...modifyValue,
      };
      const newTodoList = [
        ...todoList.filter((todo) => todo.id !== currentTodo.id),
        newTodo,
      ];
      setTodoList(newTodoList);

      localStorage.setItem("todo", JSON.stringify(newTodoList));
    }

    setModifyMode(modifyMode ? false : true);
  };

  const modifyTitleHandler = (e) => {
    setModifyValue({ ...modifyValue, title: e.target.value });
  };
  const modifyContextHandler = (e) => {
    setModifyValue({ ...modifyValue, context: e.target.value });
  };

  const deleteEventHandler = () => {
    const deleteCheck = window.confirm("정말로 삭제하시겠습니까?");
    if (!deleteCheck) return;
    const newTodoList = [
      ...todoList.filter((todo) => todo.id !== currentTodo.id),
    ];
    localStorage.setItem("todo", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  return (
    <li className="card-list">
      {currentTodo.isDone ? <div className="card-done">DONE!</div> : ""}
      <div className="card">
        {modifyMode ? (
          <input
            className="card-title"
            value={modifyValue.title}
            onChange={modifyTitleHandler}
          />
        ) : (
          <h2>{currentTodo.title}</h2>
        )}

        {modifyMode ? (
          <textarea
            className="card-context"
            value={modifyValue.context}
            onChange={modifyContextHandler}
          />
        ) : (
          <p>{currentTodo.context}</p>
        )}

        <div className="card__button-area">
          <div className="button-area__first-line">
            <MainToDoCardBtn
              clickEventHandler={modifyEventHandler}
              text={modifyMode ? "수정완료" : "수정"}
            />
            <MainToDoCardBtn
              clickEventHandler={deleteEventHandler}
              text="삭제"
            />
          </div>
          <MainToDoCardBtn
            clickEventHandler={doneChangeEventHandler}
            text={currentTodo.isDone ? "취소" : "완료"}
          />
        </div>
      </div>
    </li>
  );
};

export default MainToDoCard;
