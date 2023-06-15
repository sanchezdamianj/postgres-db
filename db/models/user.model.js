const { Model, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNullL: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  email: {
    allowNullL: false,
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    allowNullL: false,
    type: Sequelize.STRING,
  },
  role: {
    allowNullL: false,
    type: Sequelize.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNullL: false,
    type: Sequelize.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, { as: 'customer', foreignKey: 'userId' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
