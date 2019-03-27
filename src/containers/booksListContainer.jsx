import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks, deleteBook } from "../thunk/thunk";
import BooksList from "../components/booksList/booksList";

class BooksListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return <BooksList {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.base.error,
    books: state.base.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(getBooks()),
    removeRow: id => dispatch(deleteBook(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksListContainer);
