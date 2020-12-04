"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Review, {
        foreignKey: "userId",
        as: "reviews",
        onDelete: "CASCADE",
      });

      User.belongsToMany(models.Book, {
        through: models.BookUser,
        foreignKey: "bookId",
        as: "favorites",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      shoplist: { type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: [] },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
