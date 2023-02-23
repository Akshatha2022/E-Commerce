const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
      // define a id column
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // defining a product_id column
    product_id: {
      // it uses the special Sequelize DataTypes object which provides what type of data it is
      type: DataTypes.INTEGER,
      references: {
          model: "product",
          key: "id"
      }
  },
  // defining a tag_id column
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
        model: "tag",
        key: "id"
    }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
