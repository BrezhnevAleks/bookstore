const utils = require("../utils.js");
const db = require("../models/index");

exports.createUser = async (request, response) => {
  const { login, email, password } = await request.body;
  console.log(`${login}, ${email}, ${password}`);
  {
    try {
      if (password.length < 6) {
        response.status(400).send("Password is too short");
        return;
      }
      if (!utils.isUserExist(email)) {
        response.status(400).send("User already exists");
        return;
      }
      console.log(request.body);
      const user = await db.User.create({
        login,
        email,
        password: utils.cipher(password),
      });

      const createdtoken = utils.createToken(user.id);
      response.send({ user: user, isLogged: true, token: createdtoken });
    } catch (err) {
      response.status(500).send("Something went wrong");
    }
  }
};

exports.getUsers = async (request, response) => {
  try {
    const users = await db.User.findAll({ raw: true });

    if (!users) {
      response
        .status(404)
        .send("No data in the database. Users should be added first");
      return;
    }

    response.status(200).send(users);
  } catch (err) {
    response.status(400).send("Something went terribly wrong");
  }
};

exports.deleteUser = async (request, response) => {
  const {
    body: { id },
  } = request;
  const searchedValue = { id };

  try {
    const user = await db.User.findOne({ where: searchedValue });

    if (!user) {
      response.status(404).send(`User id ${id} not found`);
      return;
    }

    await user.destroy({ where: searchedValue });
    response.status(200).send(`User id ${id} was successfully deleted`);
  } catch (err) {
    response.status(500).send("Something went wrong");
  }
};

exports.updateUser = async (request, response) => {
  const {
    body: { email, newname },
  } = request;
  const searchedValue = { email };
  try {
    const user = await db.User.findOne({ where: searchedValue });

    if (!user) {
      response.status(404).send(`User not found`);
      return;
    }

    await user.update(
      { name: newname },
      {
        where: find,
      }
    );
    response
      .status(200)
      .send(`User ${user.id}: name updated. New name: ${newname}`);
  } catch (err) {
    response.status(500).send(`Something went wrong`);
  }
};

exports.loginUser = async (request, response) => {
  const { email, password } = request.body;
  const searchedValue = { email };
  console.log(request.get("host"));
  try {
    const user = await db.User.findOne({ where: searchedValue });

    if (!user) {
      response.status(404).send("User not found");
      return;
    }

    if (user.password !== utils.cipher(password)) {
      response.status(404).send("Invalid password");
      return;
    }

    const createdtoken = utils.createToken(user.id);
    response.send({ user: user, isLogged: true, token: createdtoken });
  } catch (err) {
    response.status(500).send("Something went wrong");
  }
};
