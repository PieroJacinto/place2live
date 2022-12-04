const { Router } = require("express");
const router = Router();
module.exports = router;

const authRouter = require("./auth-router");
const mainController = require("../controllers/mainController");

router.use("/",authRouter)

router.get("/", mainController.home);
router.get("/detail", mainController.detail);
router.get("/session", function(req,res){
    if(req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0
    }
    req.session.numeroVisitas++;
    res.send("session tiene el numero: " + req.session.numeroVisitas + " " + req.session.userLogged)
})