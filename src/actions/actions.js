import ActionTypes from "./actionTypes";

export function fetchBooksSuccessAction(data) {
  return {
    type: ActionTypes.FETCH_BOOKS_SUCCESS,
    pages: data.pages,
    page: data.page,
    payload: data.books
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
