const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId  =Joi.number().integer()
const created_at = Joi.string().min(5);
const limit = Joi.number().integer()
const offset = Joi.number().integer()
const price_min = Joi.number().integer().min(0);
const price_max = Joi.number().integer()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
  created_at: created_at

});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  created_at: created_at
});

const getProductSchema = Joi.object({
  id: id.required(),
});
const queryProductSchema = Joi.object({
  limit: limit,
  offset: offset,
  price: price,
  price_min: price_min,
  price_max: price_max
}).with('price_min', 'price_max').with('price_max', 'price_min');

module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema };
