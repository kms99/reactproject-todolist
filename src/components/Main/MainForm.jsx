import React, { useState } from "react";
import "./MainForm.css";
import MainFormInput from "./MainFormInput";

const MainForm = ({ onGetInputData }) => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const submitEventHandler = (e) => {
    e.preventDefault();

    if (!validationCheck(title, "제목")) return;
    if (!validationCheck(context, "내용")) return;

    const todoCardInfo = {
      id: Date.now(),
      title,
      context,
      isDone: false,
    };

    setTitle("");
    setContext("");
    onGetInputData(todoCardInfo);
  };

  const validationCheck = (value, valueName) => {
    if (!value) {
      alert(`${valueName}을 입력해 주세요.`);
      return false;
    }
    return true;
  };

  return (
    <div className="form-container">
      <form className="main-form__container" onSubmit={submitEventHandler}>
        <MainFormInput section="제목" value={title} setValue={setTitle} />
        <MainFormInput section="내용" value={context} setValue={setContext} />
        <button type="submit" className="main-form__submit-btn">
          등록
        </button>
      </form>
    </div>
  );
};

export default MainForm;
