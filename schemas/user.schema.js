const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const created_at = Joi.string().min(5);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  created_at: created_at,
  role: role.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  created_at: created_at,
  password: password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
