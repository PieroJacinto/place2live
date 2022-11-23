const { Router } = require("express");
const router = Router();
module.exports = router;

const authRouter = require("./routers/auth-router");
const mainController = require("../controllers/mainController");

router.use("/",authRouter)

router.get("/", mainController.home);