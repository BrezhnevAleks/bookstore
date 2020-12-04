"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookUser.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      BookUser.belongsTo(models.Book, {
        foreignKey: "bookId",
        as: "favorites",
        onDelete: "CASCADE",
      });
    }
  }
  BookUser.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "BookUser",
    }
  );
  return BookUser;
};
