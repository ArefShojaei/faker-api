const { Router } = require("express");
const router = Router()
const userController = require('../controllers/user-controller');
const requestController = require('../controllers/request-controller');
const gitController = require('../controllers/git-controller');
const financeController = require('../controllers/finance-controller');

router.get("/user", userController)
router.get("/request", requestController)
router.get("/git", gitController)
router.get("/finance-account", financeController)

module.exports = router