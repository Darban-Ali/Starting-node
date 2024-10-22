const config = require("../config.json");
const {Sequelize} = require("sequelize")
const database =new Sequelize(config.db)

database.authenticate().then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log("database connection failed");
    console.log(err);

})
module.exports = database;