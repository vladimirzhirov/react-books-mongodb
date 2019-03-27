import React, { Component } from "react";
import { reduxForm, formValueSelector, Field } from "redux-form";
import { addBook, getBook, updateBook } from "../../thunk/thunk";
import { validate, required } from "../../form/formValidate";
import { renderField } from "../../form/form";
import { SubmissionError } from "redux-form";
import WithErrorMessage from "../../components/error/withErrorMessage";
import lodash from "lodash/core";
import { initialize } from "redux-form";
import { connect } from "react-redux";
import DropZoneField from "../dropzoneField/dropzoneField";
import axios from "axios";
import {
  submitBookFailAction,
  loadBookFailAction
} from "../../actions/actions";

class Book extends Component {
  handleSubmit = values => {
    let data = new FormData();
    data.append("isbn", values.isbn);
    data.append("name", values.name);
    data.append("description", values.description);

    data.append("filename", values.image.name);
    if (values.image.file) {
      data.append("file", values.image.file);
    }

    let bookId = this.props.match.params.bookId;

    return (bookId
      ? this.props.updateBook(bookId, data)
      : this.props.addBook(data)
    )
      .then(() => {
        this.props.history.push("/books");
      })
      .catch(error => {
        if (error) {
          this.props.dispatch(submitBookFailAction(error.response.data));
        }
        throw new SubmissionError({ _error: error.response.data });
      });
  };
  clear = () => {
    this.props.dispatch(
      initialize(
        "BookForm",
        {
          isbn: this.props.isbn,
          name: this.props.name,
          description: this.props.description,
          image: null
        },
        false
      )
    );
  };

  componentDidMount() {
    let bookId = this.props.match.params.bookId;

    if (lodash.isEmpty(bookId)) {
      return;
    }

    getBook(bookId)
      .then(response => {
        let data = response.data;
        this.props.dispatch(
          initialize(
            "BookForm",
            {
              isbn: data.isbn,
              name: data.name,
              description: data.description,
              image: data.image
            },
            false
          )
        );
      })
      .catch(error => {
        this.props.dispatch(loadBookFailAction(error.response.data));
        this.props.history.push("/books");
      });
  }

  handleOnDrop = newImage => {
    const image = {
      file: newImage[0],
      name: newImage[0].name,
      url: URL.createObjectURL(newImage[0])
    };

    const data = new FormData();
    data.append("file", newImage[0]);
    data.append("filename", newImage[0].name);

    axios
      .post("http://localhost:4000/upload", data)
      .then(function(response) {})
      .catch(function(error) {});

    this.props.dispatch(
      initialize("BookForm", {
        name: this.props.name,
        isbn: this.props.isbn,
        description: this.props.description,
        image: image
      })
    );
  };

  render() {
    const { mode, error, image, submitting } = this.props;
    const editMode = mode === "edit";
    const title = editMode ? "Edit Book" : "Create New Book";
    const submitText = editMode ? "Edit Book" : "Create Book";

    return (
      <WithErrorMessage error={error}>
        <div>
          <h3>{title}</h3>
          <form
            onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}
          >
            <div className="row">
              <div className="col mt-3">
                <div className="text-center">
                  <h4 className="title">Upload An Image</h4>
                  <hr />
                  <Field
                    name="image"
                    component={DropZoneField}
                    type="file"
                    image={image ? image : null}
                    validate={required}
                    handleOnDrop={this.handleOnDrop}
                    clear={this.clear}
                  />
                </div>
              </div>
              <div className="col mt-3">
                <h4 className="title">Base attributes</h4>
                <hr />
                <Field
                  type="text"
                  name="isbn"
                  label="ISBN"
                  component={renderField}
                  className="form-control"
                />
                <Field
                  type="text"
                  name="name"
                  label="Name"
                  component={renderField}
                  className="form-control"
                />
                <Field
                  type="text-area"
                  name="description"
                  label="Description"
                  component={renderField}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={submitting}
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </WithErrorMessage>
    );
  }
}

let BookForm = reduxForm({
  form: "BookForm",
  multipartForm: true,
  validate,
  addBook,
  updateBook
})(Book);

const selector = formValueSelector("BookForm");
const mapStateToProps = state => {
  const { isbn, name, description, image } = selector(
    state,
    "isbn",
    "name",
    "description",
    "image"
  );
  return {
    error: state.error,
    isbn: isbn,
    name: name,
    description: description,
    image: image
  };
};

BookForm = connect(mapStateToProps)(BookForm);

export const CreateBookForm = props => {
  return <BookForm {...props} mode="create" />;
};

export const EditBookForm = props => {
  return <BookForm {...props} mode="edit" />;
};
