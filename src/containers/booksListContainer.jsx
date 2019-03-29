import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks, deleteBook } from "../thunk/thunk";
import BooksList from "../components/booksList/booksList";


class BooksListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks(this.props.page, this.props.bookPerPage);
  }

  onPageClick = page => {
    this.props.fetchBooks(page, this.props.bookPerPage);
  };

  render() {
    return <BooksList {...this.props} onPageClick={this.onPageClick} />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.base.error,
    books: state.base.books,
    page: state.base.page,
    pages: state.base.pages,
    bookPerPage: state.base.bookPerPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: (page, bookPerPage) => dispatch(getBooks(page, bookPerPage)),
    removeRow: id => dispatch(deleteBook(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksListContainer);
