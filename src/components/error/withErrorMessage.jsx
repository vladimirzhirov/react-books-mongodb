import React from "react";

const withErrorMessage = WrappedComponent => ({ error, children }) => {
  return (
    <WrappedComponent>
      {error ? (
        <div className="alert alert-danger my-100" role="alert">
          {error.message}
        </div>
      ) : null}
      {children}
    </WrappedComponent>
  );
};

const WithErrorMessage = withErrorMessage(({ children }) => (
  <React.Fragment>{children}</React.Fragment>
));

export default WithErrorMessage;
