const { models } = require("../models/definitions");

module.exports = {
  createUser: async function (body) {
    const data = await models.user.create(body);
    return data;
  },
  getUserById: async function (id) {
    const data = await models.user.findByPk(id);
    return data;
  },
  getAllUsers: async function () {
    const data = await models.user.findAll();
    return data;
  },
};
