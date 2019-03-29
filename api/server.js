const appConfig = require("./config.json");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");
const fileUpload = require("express-fileupload");

mongoose.Promise = Promise;
mongoose.connect(appConfig.db, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

app.post("/upload", (req, res, next) => {
  let imageFile = req.files.file;
  imageFile.mv(
    `${__dirname}${appConfig.uploadDir}${req.body.filename}`,
    err => {
      if (err) {
        next({
          message: `Error at upload to server file ${req.body.filename}`
        });
      }
      res.json("Success");
    }
  );
});

app.use("/books", router);

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});

app.use((err, request, response, next) => {
  response.status(500).json(err);
});
