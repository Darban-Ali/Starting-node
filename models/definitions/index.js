// const Sequelize = require("sequelize");
const sequelize = require("../../common/dbconnection");
const user = require("./user");
const student = require("./student");
const teacher = require("./teacher");
const courses = require("./courses");
const student_teacher_has_courses = require("./jointrelation")
const db = {};
const models = {
  user,
  student,
  teacher,
  courses,
  student_teacher_has_courses
};
user.hasOne(student,{onDelete:"CASCADE",foreignKey:"userId"})
student.hasOne(user,{onDelete:"CASCADE",foreignKey:"userId"})

user.hasOne(teacher,{onDelete:"CASCADE",foreignKey:"userId"})
teacher.hasOne(user,{onDelete:"CASCADE",foreignKey:"userId"})

user.hasMany(student_teacher_has_courses,{onDelete:"CASCADE",foreignKey:"teacherId"})
student_teacher_has_courses.hasMany(user,{onDelete:"CASCADE",foreignKey:"teacherId"})


sequelize.models = models;
db.sequelize = sequelize;
module.exports = { db, models };
