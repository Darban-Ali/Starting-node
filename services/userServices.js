// const { where } = require("sequelize");
// const { getAttributes } = require("../models/defination/user");
const usermodel =require("../models/userModel");
const bcrypt = require("bcryptjs");
module.exports ={
    createUser: async function (body) {
      const password = body.password;
      const hashpassword = await bcrypt.hash(password,10);
      // console.log(hashpassword)
        const data = await usermodel.createUser(
          {...body,
          password: hashpassword}
          );
        return data;
      },
      getUserById: async function (id) {
        const data = await usermodel.getUserById(id);
        return data;
      },
      getAllUsers: async function () {
        const data = await usermodel.getAllUsers({
          attributes: {exclude:["password"]}
        });
        return data;
      },
}