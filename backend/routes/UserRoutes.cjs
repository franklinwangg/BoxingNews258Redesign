const { express, Router } = require("express");
const userController = require("../controllers/UserController.cjs");

const router = Router();
router.post("/sign-up", userController.createUser);
router.post("/login", userController.loginAsUser);

module.exports = router;
