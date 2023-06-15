const { boom } = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {}
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const response = await models.Category.findAll();
    return response;
  }

  async findOne(id) {
    const found = await models.Category.findByPk(id, {
      include: ['products']
    });
    if (!found) {
      throw boom.notFound(`category id ${id} not found`);
    }
    return { found, id };
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const data = category.update(changes);
    return {
      id,
      data,
    };
  }

  async delete(id) {
    const categoryToDelete = await models.findOne(id);
    if (!categoryToDelete) {
      throw boom.notFound(`category id: ${id} deleted`);
    }
    await categoryToDelete.destroy();
    return { id };
  }
}

module.exports = CategoryService;
