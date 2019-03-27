export const validate = values => {
  const errors = {};

  if (!values.isbn) {
    errors.isbn = "Input isbn";
  }

  if (!values.name) {
    errors.name = "Input name";
  }

  if (!values.description) {
    errors.description = "Input description";
  }

  return errors;
};

export const required = value => {
  return value ? undefined : "Select file";
};
