const db = require("../models/index");
const utils = require("../utils.js");

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

exports.getSortBooks = async (request, response) => {
  try {
    let books = await db.Book.findAll({ raw: true });
    const { filter } = await request.body;
    console.log(filter);
    if (!books) {
      response
        .status(404)
        .send("No data in the database. Books should be added first");
      return;
    }
    utils.sortingType(books, filter);

    response.status(200).send(books);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.getOneBook = async (request, response) => {
  try {
    const { id } = request.body;
    const searchedValue = { id };
    const book = await db.Book.findOne({ where: searchedValue });
    if (!book) {
      response
        .status(404)
        .send("No data in the database. Books should be added first");
      return;
    }

    response.status(200).send(book);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.createBook = async (request, response) => {
  try {
    let filedata = request.file;
    console.log(filedata);
    if (!filedata) response.send("Ошибка при загрузке файла");
    else response.send("Файл загружен");
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};
