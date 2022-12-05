const { Router } = require("express");
const router = Router();
module.exports = router;

const authController = require("../controllers/auth-controller");
const loginValidations = require("../validators/login-validations").loginValidations

router.get("/login",authController.viewLogin)
router.post("/login",loginValidations, authController.login);

router.get("/register", authController.viewRegister);
router.post("/register", authController.register);

router.post("/logout", authController.logout);
