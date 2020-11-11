const express = require("express");
const bookController = require("../controllers/bookController.js");
const bookRouter = express.Router();
const upload = require("../middleware/bookCoverUpload.js");

bookRouter.post("/filter", bookController.getSortBooks);
bookRouter.post("/one", bookController.getOneBook);
bookRouter.get("/", bookController.getBooks);
bookRouter.post("/newbook", upload.upload, bookController.createBook);
bookRouter.post("/changebook", upload.upload, bookController.changeBook);

module.exports = bookRouter;
