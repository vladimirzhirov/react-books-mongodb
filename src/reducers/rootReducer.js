import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import ActionTypes from "../actions/actionTypes";
import appConfig from "../../config.json";

const initialState = {
  books: [],
  error: "",
  page: 1,
  pages: 1,
  bookPerPage: appConfig.bookPerPage
};

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.payload,
        page: action.page,
        pages: action.pages
      };
    }
    case ActionTypes.DELETE_BOOK_SUCCESS: {
      return {
        ...state,
        books: state.books.filter(item => item._id !== action.id)
      };
    }
    case ActionTypes.SUBMIT_BOOK_FAIL: {
      return { ...state, error: action.error };
    }
    case ActionTypes.LOAD_BOOK_FAIL: {
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  base: baseReducer,
  form: formReducer
});
