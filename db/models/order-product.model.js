const { Model, Sequelize} = require('sequelize')

const { ORDER_TABLE} = require('./order.model')
const { PRODUCT_TABLE} = require('./product.model')

const ORDER_PRODUCT_TABLE = 'orders_products'

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
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
  amount: {
    allowNull:false,
    type: Sequelize.INTEGER,
    }
  ,
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}


class OrderProduct extends Model {
  static associate(){

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timeStamps: false
    }
  }
}


module.exports = { ORDER_PRODUCT_TABLE, OrderProduct, OrderProductSchema}
