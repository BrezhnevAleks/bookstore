const express = require("express");
const bookController = require("../controllers/bookController.js");
const bookRouter = express.Router();
const upload = require("../middleware/bookCoverUpload.js");

bookRouter.post("/filter", bookController.getSortBooks);
bookRouter.post("/one", bookController.getOneBook);
bookRouter.post("/", bookController.getBooks);
bookRouter.post("/newbook", upload.upload, bookController.createBook);
bookRouter.post("/changebook", upload.upload, bookController.changeBook);
bookRouter.post("/reviews", bookController.getReviews);
bookRouter.post("/genre", bookController.getBooksByGenre);
bookRouter.get("/getgenres", bookController.getGenres);

module.exports = bookRouter;
