const {models} = require('../libs/sequelize')
const boom = require('@hapi/boom');


class OrderService {

  constructor(){
  }
  async create(data) {
    const newOrder = await models.Order.create(data)
    return newOrder;
  }

  async find() {
    const data = await models.Order.findAll({include: ['customer']})
    return data;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {include:
      [{
        association: 'customer',
        include: ['user']
      },
      'items'
    ]
    })
    if(!order){
      throw boom.notFound(`order id: ${id} not in the database`)
    }
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id)
    const data = await order.update(changes)
    return data
  }

  async delete(id) {
    const order = await this.findOne(id)
    order.destroy()
    return `order ${id} has been deleted`;
  }

  async addItem(data){
    const newItem = await models.OrderProduct.create(data)
    return newItem;
  }

}

module.exports = OrderService;
