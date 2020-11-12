const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
const middleware = require("../middleware/tokenChecking.js");
const multer = require("multer");

userRouter.post("/create", userController.createUser);
userRouter.delete(
  "/delete",
  middleware.tokenChecking,
  userController.deleteUser
);
userRouter.post("/login", userController.loginUser);
userRouter.post("/update", middleware.tokenChecking, userController.updateUser);
userRouter.post("/addtofavorites", userController.toFavorites);
userRouter.post("/addtoshoplist", userController.toShoplist);
userRouter.post("/shoplist", userController.getShoplist);
userRouter.post("/favorites", userController.getFavorites);
userRouter.post("/", middleware.tokenChecking, userController.getUsers);

module.exports = userRouter;
