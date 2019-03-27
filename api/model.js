const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Books = new Schema(
  {
    isbn: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: Object,
      url: {
        type: String
      },
      name: {
        type: String
      }
    }
  },

  { collection: "books" }
);

module.exports = mongoose.model("Books", Books);
