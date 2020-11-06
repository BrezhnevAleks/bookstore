const express = require("express");
const bookController = require("../controllers/bookController.js");
const bookRouter = express.Router();
//const middleware = require("../middleware/tokenChecking.js");

bookRouter.get("/", bookController.getBooks);

module.exports = bookRouter;
