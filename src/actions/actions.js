import ActionTypes from "./actionTypes";

export function fetchBooksSuccessAction(books) {
  return {
    type: ActionTypes.FETCH_BOOKS_SUCCESS,
    payload: books
  };
}

export function submitBookFailAction(error) {
  return {
    type: ActionTypes.SUBMIT_BOOK_FAIL,
    error: error
  };
}

export function loadBookFailAction(error) {
  return {
    type: ActionTypes.LOAD_BOOK_FAIL,
    error: error
  };
}

export function deleteBooksSuccessAction(books) {
  return {
    type: ActionTypes.DELETE_BOOK_SUCCESS,
    payload: books
  };
}
