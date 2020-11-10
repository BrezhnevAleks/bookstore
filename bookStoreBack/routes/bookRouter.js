const express = require("express");
const bookController = require("../controllers/bookController.js");
const bookRouter = express.Router();
//const middleware = require("../middleware/tokenChecking.js");

bookRouter.post("/filter", bookController.getSortBooks);
bookRouter.post("/one", bookController.getOneBook);
bookRouter.get("/", bookController.getBooks);
bookRouter.post("upload", bookController.createBook);

module.exports = bookRouter;
