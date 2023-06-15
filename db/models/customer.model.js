const { Model, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: { allowNull: false, type: Sequelize.STRING },
  lastName: { allowNull: false, type: Sequelize.STRING, field: 'last_name' },
  phone: { allowNull: true, type: Sequelize.STRING },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: Sequelize.INTEGER,
    unique: true,
    references: { model: USER_TABLE, key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Customer extends Model {
  static assocciate(models) {
    this.belongsTo(models.User, { as: 'user' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };
