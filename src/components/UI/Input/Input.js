import React from "react";
import classes from "./Input.module.css";

function isInvalid({ valid, shouldValidate, touched }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const inputType = props.type || "text";
  const htmlFor = `${inputType}-${Math.random()}`;
  const cls = [classes.Input];

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      ></input>

      {isInvalid(props)
        ? <span>{props.errorMessage}</span> || "Введите корректное значение "
        : null}
    </div>
  );
};

export default Input;
