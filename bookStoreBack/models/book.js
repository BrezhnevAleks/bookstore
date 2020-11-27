"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.hasMany(models.Review, {
        foreignKey: "bookId",
        as: "reviews",
        onDelete: "CASCADE",
      });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      picture: DataTypes.STRING,
      price: DataTypes.INTEGER,
      rating: { type: DataTypes.FLOAT, allowNull: true },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
