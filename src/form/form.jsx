import React from "react";
import classNames from "classnames";

const renderError = error => {
  return <span className="is-invalid invalid-feedback">{error}</span>;
};

export const renderField = ({
  input,
  label,
  type,
  value,
  meta: { touched, error }
}) => {
  const formCtrlClasses = classNames({
    "form-control": true,
    "is-valid": !touched && value,
    "is-invalid": touched && error
  });

  return (
    <div className="form-group">
      <label className="control-label">{label}</label>
      <div>
        {type === "text"
          ? renderInput(input, label, type, formCtrlClasses)
          : renderTextArea(input, label, type, formCtrlClasses)}
        {touched && error ? renderError(error) : null}
      </div>
    </div>
  );
};

const renderInput = (component, label, type, formCtrlClasses) => {
  return (
    <input
      {...component}
      placeholder={label}
      type={type}
      className={formCtrlClasses}
    />
  );
};

const renderTextArea = (component, label, type, formCtrlClasses) => {
  return (
    <textarea
      {...component}
      placeholder={label}
      rows="10"
      cols="40"
      className={formCtrlClasses}
    />
  );
};
