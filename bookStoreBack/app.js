const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");
const cors = require("cors");
const app = express();

app.listen(4000, function () {
  console.log("Сервер запущен...");
});

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("uploads"));

app.use(
  "/users",
  // function (response, request, next) {
  //   console.log(request);
  //   return next();
  // },
  userRouter
);
app.use("/books", bookRouter);
