const utils = require("../utils");

module.exports.tokenChecking = (request, response, next) => {
  const { authorization } = request.headers;

  try {
    utils.verifyToken(authorization);
  } catch (err) {
    return response.status(403).send("Token must be provided");
  }

  return next();
};
