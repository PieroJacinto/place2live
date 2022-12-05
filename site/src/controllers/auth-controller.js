const { validationResult } = require("express-validator");
const db = require("../database/models");
module.exports = {
    viewLogin: (req, res) => {
        res.render("auth/login");
    },
    viewRegister: (req, res) => {
        res.render("auth/register");
    },
    login: async (req, res) => {
        const resultValidation = validationResult(req);
        const userToLogin = await db.Usuarios.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (resultValidation.errors.length > 0) {
            return res.render("auth/login", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        if (userToLogin) {
            req.session.userLogged = userToLogin;
            return res.redirect("/");
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/login");
    },
    register: (req,res) => {       
        
        res.send("el post de register anda")
    }
};
