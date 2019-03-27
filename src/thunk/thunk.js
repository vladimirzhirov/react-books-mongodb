import { add, get, update, remove, getAll } from "../services/books";
import {
  fetchBooksSuccessAction,
  deleteBooksSuccessAction
} from "../actions/actions";

export const addBook = values => {
  return add(values);
};

export const updateBook = (id, values) => {
  return update(id, values);
};

export const getBook = id => {
  return get(id);
};

export const getBooks = () => dispatch => {
  getAll().then(res => {
    dispatch(fetchBooksSuccessAction(res.data));
  });
};

export const deleteBook = id => dispatch => {
  remove(id)
    .then(res => {
      dispatch(deleteBooksSuccessAction(res.data));
    })
    .catch(err => console.log(err));
};
