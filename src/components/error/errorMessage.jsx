import React from "react";

const ErrorMessage = props => {
  return (
    <div>
      {props.errors && <div>Error Message</div>}
      <h1>Your Amazing Content</h1>
    </div>
  );
};

export default Image;
