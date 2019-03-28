const lodash = require("lodash");
const cloudService = require("./cloudService");
const bookService = require("./bookService");
const books = require("./model");
const express = require("express");
const router = express.Router();

router.route("/add").post(function(req, res, next) {
  cloudService
    .upload(req.body.filename)
    .then(file => {
      bookService.create(file, req, res);
    })
    .catch(err => {
      next(err);
    });
});

router.route("/").get(function(req, res, next) {
  books.find((err, list) => {
    if (lodash.isObject(err)) {
      next({ message: "Error at load books" });
    }
    res.json(list);
  });
});

router.route("/get/:id").get((req, res, next) => {
  let id = req.params.id;
  books.findById(id, (err, book) => {
    if (lodash.isObject(err)) {
      next({ message: `Error at find book with id = ${id}` });
    }
    res.json(book);
  });
});

router.route("/update/:id").post(function(req, res, next) {
  books.findById(req.params.id, (err, book) => {
    if (lodash.isObject(err)) {
      next({ message: `Error at update book with id = ${req.params.id}` });
    } else {
      book.name = req.body.name;
      book.description = req.body.description;
      book.isbn = req.body.isbn;

      cloudService
        .upload(req.body.filename)
        .then(file => {
          bookService.update(file, book, req, res, next);
        })
        .catch(() => {
          next(err);
        });
    }
  });
});

router.route("/delete/:id").get(function(req, res, next) {
  books.findOneAndDelete(req.params.id, function(err, obj) {
    if (lodash.isObject(err)) {
      next({ message: `Error at delete book with id = ${req.params.id}` });
    } else {
      res.json("Success");
    }
  });
});

module.exports = router;
