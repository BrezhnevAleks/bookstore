const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
const middleware = require("../middleware/tokenChecking.js");

userRouter.post("/create", userController.createUser);

userRouter.post("/login", userController.loginUser);
userRouter.post("/update", middleware.tokenChecking, userController.updateUser);
userRouter.post(
  "/addtofavorites",
  middleware.tokenChecking,
  userController.toFavorites
);
userRouter.post(
  "/addtoshoplist",
  middleware.tokenChecking,
  userController.toShoplist
);
userRouter.post(
  "/shoplist",
  middleware.tokenChecking,
  userController.getShoplist
);
userRouter.post(
  "/favorites",
  middleware.tokenChecking,
  userController.getFavorites
);
userRouter.post(
  "/addreview",
  middleware.tokenChecking,
  userController.addReview
);
userRouter.get("/bytoken", middleware.tokenChecking, userController.getByToken);

module.exports = userRouter;
