const crypto = require("crypto");
const config = require("./config/config.json");
const jwt = require("jsonwebtoken");
const db = require("./models");

module.exports.cipher = (pass) => {
  return crypto
    .createHmac("sha256", "secretword")
    .update(pass.trim())
    .digest("hex");
};

module.exports.createToken = (information) => {
  return jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60, data: information },
    config.token.secret
  );
};

module.exports.verifyToken = (token) => {
  return jwt.verify(token, config.token.secret);
};

module.exports.isUserExist = async (email) => {
  const user = await db.User.findOne({ where: { email: email } });
  console.log(user);
  if (user === null) {
    console.log("false");
    return false;
  }
  console.log("true");
  return true;
};
