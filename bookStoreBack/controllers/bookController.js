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
    const url = request.protocol + "://" + request.get("host");
    const book = await db.Book.create({
      name: request.body.name,
      author: request.body.author,
      price: request.body.price,
      picture: url + "/" + request.file.filename,
    });
    if (!book) response.send("Ошибка при загрузке файла");
    else response.send(book);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.changeBook = async (request, response) => {
  try {
    const url = request.protocol + "://" + request.get("host");
    const { id, name, author, price } = request.body;
    console.log(id, name, author, price);
    const searchedValue = { id };
    console.log(searchedValue);
    const book = await db.Book.findOne({ where: searchedValue });

    if (!book) {
      response.status(404).send(`Book not found`);
      return;
    }
    console.log(id, name, author, price, request.file.filename);
    await db.Book.update(
      {
        name: name,
        author: author,
        price: price,
        picture: url + "/" + request.file.filename,
      },
      {
        where: { id: id },
      }
    );

    response.send(book);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};
