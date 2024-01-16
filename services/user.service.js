const { userSchema } = require("../models");

const addUser = (body) => {
  return userSchema.create(body);
};

const findUser = (username) => {
  return userSchema.findOne({ username });
};

module.exports = { addUser, findUser };
