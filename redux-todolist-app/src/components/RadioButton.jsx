import React from "react";

const RadioButton = ({ name, text, value, defaultChecked, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        text={text}
        defaultChecked={defaultChecked}
      />
      {text}
    </label>
  );
};

export default RadioButton;
