import React, { useState } from "react";
import MainForm from "./MainForm";
import MainToDoSection from "./MainToDoSection";

const Main = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo"))
  );

  const getInputDataHandler = (inputData) => {
    localStorage.setItem(
      "todo",
      JSON.stringify([...JSON.parse(localStorage.getItem("todo")), inputData])
    );
    setTodoList([...todoList, inputData]);
  };
  return (
    <main>
      <MainForm onGetInputData={getInputDataHandler} />
      <div>
        <MainToDoSection
          section="해야하는일"
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <MainToDoSection
          section="완료한일"
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
    </main>
  );
};

export default Main;
