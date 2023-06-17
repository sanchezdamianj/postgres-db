const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');
const { Op } = require('sequelize')

class ProductsService {
  constructor() {
  }

  async create(data) {
    const newProduct =  await models.Product.create(data)
    return newProduct;
  }

  async find(query) {
    const { limit, offset} = query;
    const options = {
      include: ['category'],
      where : {}
    }

    if (limit && offset) {
      options.limit  = limit,
      options.offset = offset
    }
    const { price } = query;
    if(price) {
      options.where.price = price
    }
    const { price_min, price_max } = query;
    // if(price_min && price_max) {
    //   options.where.price = {
    //     [Op.gte]: price_min,
    //     [Op.lte]: price_max,
    //   };
    // }
    if (price_min && price_max) {
      if (parseFloat(price_min) > parseFloat(price_max)) {
        throw boom.badRequest(`${price_min} must be less than ${price_max}`);
      }
      options.where.price = {
      [Op.between]: [price_min, price_max]
      // [Op.gte]: price_min,
      // [Op.lte]: price_max,
    }
    }

    const response = await models.Product.findAll(options);
    return response;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound(`product id ${id} not found`);
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const data = product.update(changes);
    return data;
  }
  async delete(id) {
    const index = await models.Product.findOne(id)
    if (!index) {
      throw boom.notFound('product not found');
    }
    index.destroy()
    return `product id: ${id} deleted`;
  }
}

module.exports = ProductsService;
