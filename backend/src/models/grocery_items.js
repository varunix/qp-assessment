"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class grocery_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  grocery_items.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      img: DataTypes.STRING,
      category: DataTypes.STRING,
      weight: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: "grocery_items",
    }
  );
  return grocery_items;
};
