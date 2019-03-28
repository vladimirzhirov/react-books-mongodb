import {isObject} from "lodash";
const books = require("./model");

const create = (file, req, res, next) => {
  let book = new books(req.body);

  if (file) {
    book.image = { url: file.url, name: file.name };
  }

  book
    .save()
    .then(() => {
      res.json("Success");
    })
    .catch(() => {
      next({ message: "Error at create book" });
    });
};

const update = (file, book, req, res, next) => {
  book.name = req.body.name;
  book.description = req.body.description;
  book.isbn = req.body.isbn;

  if (file) {
    book.image = { url: file.url, name: file.name };
  }

  book
    .save()
    .then(() => {
      res.json("Success");
    })
    .catch(() => {
      next({
        message: `Error at update book with id = ${book._id}`
      });
    });
};

module.exports = { create, update };
