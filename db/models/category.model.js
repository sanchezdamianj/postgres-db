const { Model, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNullL: false,
    type: Sequelize.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNullL: false,
    type: Sequelize.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  }
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timeStamps: false,
    };
  }
}

module.exports = { CATEGORY_TABLE, Category, CategorySchema };
