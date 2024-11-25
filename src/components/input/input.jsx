import React from "react";
import "./input.css";

const Input = ({
  id,
  name,
  value,
  defaultValue,
  checked,
  type,
  onChange,
  label,
}) => (
  <div className="input_cont">
    <label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={value}
        onChange={onChange}
        checked={checked}
        defaultValue={defaultValue}
        required={true}
      />
      {label}
    </label>
  </div>
);

export default Input;
