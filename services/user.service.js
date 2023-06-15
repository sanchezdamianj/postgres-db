// const pool = require('../libs/postgres.pool');
// const getConection = require('../libs/postgres');
const { models } = require('./../libs/sequelize');
const { boom } = require('@hapi/boom');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('err', (err) => console.log(err));
  }

  async create(data) {
    const response = await models.User.create(data);
    return response;
  }

  async find() {
    const response = await models.User.findAll({
      include: ['customer'],
    });
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound(`id ${id} not found`);
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const data = user.update(changes);
    return data;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
