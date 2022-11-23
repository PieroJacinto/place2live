const { Router } = require("express");
const router = Router();
module.exports = router;

const authController = require("../controllers/auth-controller");

router.get("/login",authController.login)
router.post("/login", authController.login);

router.get("/register", authController.register);
router.post("/register", authController.register);