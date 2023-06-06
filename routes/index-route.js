const { Router } = require("express");
const router = Router()
const userController = require('../controllers/user-controller');
const requestController = require('../controllers/request-controller');

router.get("/user", userController)
router.get("/request", requestController)

module.exports = router