const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");

const app = express();

app.listen(4000, function () {
  console.log("Сервер запущен...");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", userRouter);
