import { isEmpty } from "lodash";

export const validate = values => {
  const errors = {};

  if (isEmpty(values.isbn)) {
    errors.isbn = "Input isbn";
  }

  if (isEmpty(values.name)) {
    errors.name = "Input name";
  }

  if (isEmpty(values.description)) {
    errors.description = "Input description";
  }

  return errors;
};

export const validateFileInput = value => {
  return value ? undefined : "Select file";
};
