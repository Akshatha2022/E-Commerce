// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // defining product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  // defining price column
  price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
  },
  // defining a stock column
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  // defining a category_id column
  category_id: {
      // it uses the special Sequelize DataTypes object which provides what type of data it is
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
