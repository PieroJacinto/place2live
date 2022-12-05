const { validationResult } = require("express-validator");
const db = require("../database/models");
const bcryptjs = require("bcryptjs");

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
    register: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("auth/register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        const userInDb = await db.Usuarios.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (userInDb) {
            return res.render("auth/register", {
                errors: {
                    email: {
                        msg: "Este email ya esta registrado",
                    },
                },
                oldData: req.body,
            });
        } else if (resultValidation.errors.length == 0) {
            await db.Usuarios.create({
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10),
                // avatar: req.file.filename,
            }).then(function () {
                res.redirect("/login");
            });
        }
    },
};
