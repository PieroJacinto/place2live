const path = require("path");
const { body } = require("express-validator");
const db = require("../database/models");

module.exports = [
    body("nombre")
        .notEmpty()
        .withMessage("Debes completar tu nombre")
        .bail()
        .isLength({ min: 2 })
        .withMessage("El nombre debe tener al menos dos caracteres"),
    body("apellido")
        .notEmpty()
        .withMessage("Debes completar tu apellido")
        .bail()
        .isLength({ min: 2 })
        .withMessage("El apellido debe tener al menos dos caracteres"),
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de correo válido")
        .custom(async (value, { req }) => {
            const userToRegister = await db.Usuarios.findAll({
                where: {
                    email: req.body.email,
                },
            });
            if (userToRegister.length > 0) {
                throw new Error("El e-mail ingresado ya está registrado");
            }
        }),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir una contraseña")
        .bail()
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos ocho caracteres"),
    body("repPassword", "Las contraseñas no coinciden")
        .notEmpty()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        }),
    body("telefono")
        .notEmpty()
        .withMessage("Debes completar tu número de teléfono")
        .bail()
        .isLength({ min: 8 })
        .withMessage("Debes introducir un número telefónico válido"),
    body("localidad").notEmpty().withMessage("Debes completar el nombre de tu localidad"),
];
