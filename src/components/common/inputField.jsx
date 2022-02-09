import React from "react";

const InputField = (props) => {
  return (
    <div className="form-group" style={{ marginBottom: 15 }}>
      <label
        className="text-light"
        htmlFor={props.id}
        style={{ marginBottom: 5 }}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={
          props.label.charAt(0).toUpperCase() + props.label.slice(1) + "..."
        }
        value={props.value}
        onChange={props.handleChange}
        autocomplete="off"
      />
    </div>
  );
};

export default InputField;
