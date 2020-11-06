const db = require("../models/index");

exports.getBooks = async (request, response) => {
  try {
    const books = await db.Book.findAll({ raw: true });

    if (!books) {
      response
        .status(404)
        .send("No data in the database. Books should be added first");
      return;
    }

    response.status(200).send(books);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};
