var express = require('express');
var router = express.Router();

const {createUser} = require('../controller/userController/usercontroller')

router.get("/xyz", createUser);

router.post("/createUser",createUser)


module.exports = router;
