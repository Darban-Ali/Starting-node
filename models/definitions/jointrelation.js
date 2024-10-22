const {Model, DataTypes } = require("sequelize")
const sequelize =require("../../common/dbconnection")

class student_teacher_has_courses extends Model{}

student_teacher_has_courses.init(
    {
        id:{
            primaryKey:true ,
            type:DataTypes.INTEGER(),
            autoIncrement:true,
        },
       
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize:sequelize,
    }
    )
    module.exports = student_teacher_has_courses;