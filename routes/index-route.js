const { Router } = require("express");
const router = Router()
const userController = require('../controllers/user-controller');


router.get("/user", userController)

module.exports = router