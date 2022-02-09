import React from "react";

const Switch = (props) => {
  return (
    <div className="form-check form-switch" style={{ marginBottom: 15 }}>
      <input
        className="form-check-input"
        type="checkbox"
        id={props.id}
        onChange={props.handleChange}
        checked={props.value}
      />
      <label className="form-check-label text-light" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default Switch;
