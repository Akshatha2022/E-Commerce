const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // defining a product_id column
    product_id: {
      // it uses the special Sequelize DataTypes object which provides what type of data it is
      type: DataTypes.INTEGER,
    allowNull: false
  },
  // defining a tag_id column
  tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
