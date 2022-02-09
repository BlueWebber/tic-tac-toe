import React from "react";

const Cell = (props) => {
  const getClassNames = () => {
    let classStr = "btn btn-primary fs-1 m-2";
    if (props.value || props.winner) {
      classStr += " disabled";
    }
    return classStr;
  };

  return (
    <button
      style={{ height: 90, width: 90 }}
      className={getClassNames()}
      onClick={props.handleClick}
    >
      {props.value ? props.value.toUpperCase() : props.id}
    </button>
  );
};

export default Cell;
