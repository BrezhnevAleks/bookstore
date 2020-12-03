"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorite.belongsToMany(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      Favorite.belongsToMany(models.Book, {
        foreignKey: "bookId",
        onDelete: "CASCADE",
      });
    }
  }
  Favorite.init(
    {
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
