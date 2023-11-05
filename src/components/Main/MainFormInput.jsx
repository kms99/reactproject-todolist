import React, { useState } from "react";

const MainFormInput = ({ section, value, setValue }) => {
  // state
  const [focus, setFocus] = useState(false);

  //   eventHandler
  const focusCheckHandler = () => {
    setFocus(true);
  };
  const focusOutCheckHandler = () => {
    setFocus(false);
  };

  const valueCheckHandler = (e) => {
    setValue(e.target.value);
  };

  //   change style object
  const labelStyle = {
    top: "-2rem",
    background: "#00aaff",
    color: "white",
  };

  const inputStyle = {
    outline: "1px solid #00aaff",
  };

  return (
    <div>
      <label style={focus || value ? labelStyle : {}}>{section}</label>
      <input
        style={focus ? inputStyle : {}}
        value={value}
        onFocus={focusCheckHandler}
        onBlur={focusOutCheckHandler}
        onChange={valueCheckHandler}
      />
    </div>
  );
};

export default MainFormInput;
