const {Model, DataTypes } = require("sequelize")
const sequelize =require("../../common/dbconnection")

class student extends Model{}

student.init(
    {
        id:{
            primaryKey:true ,
            type:DataTypes.INTEGER(),
            autoIncrement:true,
        },
        firstname:{
            type:DataTypes.STRING(),
            allowNull:false,
        },
        lastname:{
            type:DataTypes.STRING(),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING(),
            allowNull:false,
            unique:true,
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        subject:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize:sequelize,
    }
    )
    module.exports = student;