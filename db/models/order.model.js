const { Model, Sequelize} = require('sequelize')

const { CUSTOMER_TABLE} = require('../models/customer.model')

const ORDER_TABLE = 'orders'

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
  },
  // just for small amounts by node, if not by sql
  totalAmount: {
    type: Sequelize.VIRTUAL,
    get(){
      if(this.items.length > 0) {
        return this.items.reduce((totalAmount, item) => {
          return totalAmount + (item.price * item.OrderProduct.amount)
        },0)
      }
      return 0;
    }
  }
}


class Order extends Model {
  static associate(models){
    this.belongsTo(models.Customer, {
      as: 'customer',
      foreignKey: 'customerId'
    })
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timeStamps: false
    }
  }
}


module.exports = { ORDER_TABLE, Order, OrderSchema}
