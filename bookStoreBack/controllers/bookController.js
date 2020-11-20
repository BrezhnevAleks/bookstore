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

    if (!book) {
      response.send("Ошибка при загрузке файла");
      return;
    }
    const { genre } = request.body;
    const newgenre = await db.Genre.findOne({ where: { value: genre } });
    if (newgenre) {
      await newgenre.update(
        {
          booksId: [...newgenre.booksId, book.id],
        },
        {
          where: {
            value: genre,
          },
        }
      );
    } else {
      const creategenre = await db.Genre.create({
        name: genre,
        booksId: [book.id],
      });
    }
    response.send(book);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.getReviews = async (request, response) => {
  try {
    const { bookId } = request.body;
    const reviews = await db.Review.findAll({
      where: { bookId },
      include: {
        model: db.User,
        as: "user",
        attributes: ["login"],
      },
    });
    console.log(reviews.user);
    console.log(reviews);
    if (!reviews) {
      response.status(404).send(`No reviews yet`);
      return;
    }

    response.send(reviews);
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

exports.getBooksByGenre = async (request, response) => {
  try {
    const { genre } = await request.body;
    console.log(genre);
    let genres = await db.Genre.findOne({ where: { value: genre } });
    console.log(genres);

    let books = await db.Book.findAll({ where: { id: genres.booksId } });
    if (!books) {
      response.status(404).send("No books with this genre");
      return;
    }

    response.status(200).send(books);
  } catch (err) {
    response.status(400).send("Something went very very terribly wrong");
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

exports.getGenres = async (request, response) => {
  try {
    let genres = await db.Genre.findAll({ raw: true });
    if (!genres) {
      response
        .status(404)
        .send("No data in the database. Genres should be added first");
      return;
    }

    response.status(200).send(genres);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};
