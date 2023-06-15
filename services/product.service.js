const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
  }

  async create(data) {
    const newProduct =  await models.Product.create(data)
    return newProduct;
  }

  async find() {
    const response = await models.Product.findAll({include: ['category']});
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
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
