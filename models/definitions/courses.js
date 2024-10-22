const {Model, DataTypes } = require("sequelize")
const sequelize =require("../../common/dbconnection")

class courses extends Model{}

courses.init(
    {
        id:{
            primaryKey:true ,
            type:DataTypes.INTEGER(),
            autoIncrement:true,
        },
        courseCode:{
            type:DataTypes.STRING(),
            allowNull:false,
        },
        courseName:{
            type:DataTypes.STRING(),
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING(),
            allowNull:false,
            unique:true,
        },
        creditHours:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        isLab:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize:sequelize,
    }
    )
    module.exports = courses;