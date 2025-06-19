import React from "react";
import "./style.css";

function Button({ text, onClick, blue, disabled }) {
  return (
    <button
      onClick={onClick}
      className={blue ? "btn btn-blue" : "btn"}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
