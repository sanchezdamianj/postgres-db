const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

  User.associate(sequelize.models);
  Customer.assocciate(sequelize.models);
  Product.assocciate(sequelize.models);
  Category.associate(sequelize.models);
}

module.exports = { setupModels };
