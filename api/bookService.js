const books = require("./model");

const create = (file, req, res, next) => {
  let book = new books(req.body);
  book.image = { url: file.url, name: file.name };

  book
    .save()
    .then(() => {
      res.json("Success");
    })
    .catch(() => {
      next({ message: "Error at create book, repeat create later" });
    });
};

const update = (file, book, req, res, next) => {
  console.log("f3");
  book.name = req.body.name;
  book.description = req.body.description;
  book.isbn = req.body.isbn;
  console.log("update book", book);
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
        message: `Error at update book with id = ${
          book._id
        }, repeat update later`
      });
    });
};

module.exports = { create, update };
