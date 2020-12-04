const utils = require("../utils.js");
const db = require("../models/index");

exports.createUser = async (request, response) => {
  const {
    body: { login, email, password },
  } = request;
  console.log(login, email, password);
  {
    try {
      if (password.length < 6) {
        response.status(400).send("Password is too short");
        return;
      }

      const userExist = await db.User.findOne({ where: { email: email } });

      if (userExist !== null) {
        response.status(400).send("User already exists");
        return;
      }

      const user = await db.User.create({
        login,
        email,
        password: utils.cipher(password),
        include: [
          {
            model: db.Book,
            as: "favorites",
          },
        ],
      });

      const createdToken = utils.createToken(user.id);

      response.send({ user: user, token: createdToken });
    } catch (err) {
      response.status(500).send("Something went wrong");
    }
  }
};

exports.loginUser = async (request, response) => {
  const {
    body: { email, password },
  } = request;
  const searchedValue = { email };

  try {
    const user = await db.User.findOne({
      where: searchedValue,
      include: [
        {
          model: db.Book,
          as: "favorites",
        },
      ],
    });

    if (!user) {
      response.status(404).send("User not found");
      return;
    }

    if (user.password !== utils.cipher(password)) {
      response.status(404).send("Invalid password");
      return;
    }

    const createdtoken = utils.createToken(user.id);
    response.send({ user: user, token: createdtoken });
  } catch (err) {
    response.status(500).send("Something went wrong");
  }
};

exports.getByToken = async (request, response) => {
  try {
    const { authorization } = request.headers;
    const id = utils.verifyToken(authorization).data;

    const user = await db.User.findOne({ where: { id: id } });

    if (!user) {
      response.status(404).send("User not found");
      return;
    }

    const createdtoken = utils.createToken(user.id);
    response.send({ user: user });
  } catch (err) {
    response.status(500).send("Something went wrong");
  }
};

exports.toFavorites = async (request, response) => {
  try {
    const {
      body: { userID, bookID },
    } = request;
    const favorite = await db.BookUser.findOne({
      where: {
        userId: userID,
        bookId: bookID,
      },
    });

    if (favorite !== null) {
      await db.BookUser.destroy({
        where: {
          userId: userID,
          bookId: bookID,
        },
      });
      const newUser = await db.User.findOne({
        where: { id: userID },
        include: [
          {
            model: db.Book,
            as: "favorites",
          },
        ],
      });
      response.status(200).send({ favorites: newUser.favorites });
      return;
    }
    const user = await db.User.findOne({
      where: { id: userID },
    });

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
    console.log("user >>>", user);
    const book = await db.Book.findOne({ where: { id: bookID } });
    console.log("book >>>>", book);
    await db.BookUser.create({ bookId: bookID, userId: userID });
    console.log("after noname await >>>>");
    await user.addFavorite(book);
    // await db.BookUser.create({ userId: userID, bookId: bookID });
    // console.log("BBBBBBBBBB");
    // console.log(user);

    //const favorites = await db.Book.findAll({ where: { userId: userID } });
    //console.log(favorites);
    //response.status(200).send({ favorites });
    // const bookuser = await db.BookUser.findAll({});
    // console.log('bookuser >>>>', bookuser);
    const newUser = await db.User.findOne({
      where: { id: userID },
      include: [
        {
          model: db.Book,
          as: "favorites",
        },
      ],
    });
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
    console.log("newUser", newUser);
    response.status(200).send({ favorites: newUser.favorites });
  } catch (err) {
    console.error("ERROR >>>>", err);
    response.status(400).send("Something went terribly wrong");
  }
};

exports.toShoplist = async (request, response) => {
  try {
    const {
      body: { userID, bookID },
    } = request;
    const user = await db.User.findOne({
      where: {
        id: userID,
      },
    });

    if (user.shoplist.includes(bookID)) {
      let { shoplist } = user;

      shoplist.splice(shoplist.indexOf(bookID), 1);

      await db.User.update(
        {
          shoplist,
        },
        {
          where: {
            id: userID,
          },
        }
      );
      const newUser = await db.User.findOne({
        where: {
          id: userID,
        },
      });

      response.send({ user: newUser });
      return;
    }

    await db.User.update(
      {
        shoplist: [...user.shoplist, bookID],
      },
      {
        where: {
          id: userID,
        },
      }
    );

    const newUser = await db.User.findOne({
      where: {
        id: userID,
      },
    });

    response.status(200).send({ user: newUser });
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.getShoplist = async (request, response) => {
  try {
    const {
      body: { userID },
    } = request;
    const user = await db.User.findOne({ where: { id: userID } });
    const data = await db.Book.findAll({
      where: {
        id: user.shoplist,
      },
    });

    response.status(200).send(data);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.addReview = async (request, response) => {
  const {
    body: { userId, bookId, text, rating },
  } = request;
  try {
    const existingReview = await db.Review.findOne({
      where: { bookId, userId },
    });

    if (existingReview) {
      await existingReview.update(
        {
          text: text || existingReview.text,
          rating: rating || existingReview.rating,
        },
        { where: { bookId, userId } }
      );
    } else {
      await db.Review.create({
        text,
        bookId,
        userId,
        rating,
      });
    }

    const reviews = await db.Review.findAll({
      where: { bookId },
      include: {
        model: db.User,
        as: "user",
        attributes: ["login"],
      },
    });
    let rated = await reviews.filter((item) => item.rating != null);

    let rate = (
      rated.reduce((acc, item) => acc + item.rating, 0) / rated.length
    ).toFixed(2);

    const book = await db.Book.findOne({ where: { id: bookId } });

    if (!book) {
      response.status(404).send(`Book id ${bookId} not found`);
      return;
    }

    await db.Book.update({ rating: rate }, { where: { id: bookId } });

    response.status(200).send("Success");
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.getFavorites = async (request, response) => {
  try {
    const {
      body: { userID },
    } = request;
    const user = await db.User.findOne({
      where: { id: userID },
      include: [
        {
          model: db.Book,
          as: "favorites",
        },
      ],
    });

    response.status(200).send({ favorites: User.favorites });
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.updateUser = async (request, response) => {
  const {
    body: { id, email, login, password },
  } = request;

  try {
    const user = await db.User.findOne({ where: id });
    if (!user) {
      response.status(404).send(`User not found`);
      return;
    }

    await user.update(
      {
        email,
        login,
        password: password ? utils.cipher(password) : user.password,
      },
      {
        where: id,
      }
    );
    response.send({ user: user });
  } catch (err) {
    response.status(500).send(`Something went wrong`);
  }
};
